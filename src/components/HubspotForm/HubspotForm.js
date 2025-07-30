'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState, useCallback, useRef, useMemo } from 'react';

// Cache for HubSpot script loading promise
let hubspotScriptPromise = null;
let hubspotLoadingState = 'idle'; // 'idle', 'loading', 'loaded', 'error'

// Optimized HubSpot script loader with better error handling
const loadHubSpotScript = () => {
    if (hubspotLoadingState === 'loaded' && window.hbspt) {
        return Promise.resolve(window.hbspt);
    }

    if (hubspotScriptPromise) return hubspotScriptPromise;

    hubspotLoadingState = 'loading';
    hubspotScriptPromise = new Promise((resolve, reject) => {
        // Check if already loaded
        if (window.hbspt) {
            hubspotLoadingState = 'loaded';
            resolve(window.hbspt);
            return;
        }

        const script = document.createElement('script');
        script.src = 'https://js-eu1.hsforms.net/forms/embed/v2.js';
        script.async = true;
        script.defer = true;

        // Add resource hints for better loading
        const preloadLink = document.createElement('link');
        preloadLink.rel = 'preload';
        preloadLink.href = script.src;
        preloadLink.as = 'script';
        document.head.appendChild(preloadLink);

        let timeoutId;
        const cleanup = () => {
            if (timeoutId) clearTimeout(timeoutId);
        };

        script.onload = () => {
            cleanup();

            // Use a more efficient check with exponential backoff
            let attempts = 0;
            const maxAttempts = 20;
            const checkHbspt = () => {
                attempts++;
                if (window.hbspt) {
                    hubspotLoadingState = 'loaded';
                    resolve(window.hbspt);
                } else if (attempts < maxAttempts) {
                    // Exponential backoff: 25ms, 50ms, 100ms, etc.
                    const delay = Math.min(25 * Math.pow(2, attempts - 1), 500);
                    timeoutId = setTimeout(checkHbspt, delay);
                } else {
                    hubspotLoadingState = 'error';
                    reject(new Error('HubSpot script loaded but hbspt object not available'));
                }
            };

            // Use requestIdleCallback if available, otherwise use immediate callback
            if (window.requestIdleCallback) {
                window.requestIdleCallback(checkHbspt, { timeout: 100 });
            } else {
                timeoutId = setTimeout(checkHbspt, 25);
            }
        };

        script.onerror = () => {
            cleanup();
            hubspotLoadingState = 'error';
            reject(new Error('Failed to load HubSpot script'));
        };

        // Add timeout for script loading
        timeoutId = setTimeout(() => {
            cleanup();
            hubspotLoadingState = 'error';
            reject(new Error('HubSpot script loading timeout'));
        }, 10000);

        document.head.appendChild(script);
    });

    return hubspotScriptPromise;
};

// Optimized cookie parser - memoized and more efficient
const parseCookies = () => {
    if (typeof document === 'undefined') return {};

    return document.cookie
        .split(';')
        .reduce((cookies, cookie) => {
            const [name, value] = cookie.trim().split('=');
            if (name) cookies[name] = value || '';
            return cookies;
        }, {});
};

const HubspotForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [hasConsent, setHasConsent] = useState(false);
    const [consentDeclined, setConsentDeclined] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [formLoaded, setFormLoaded] = useState(false);
    const [scriptError, setScriptError] = useState(false);

    const intervalRef = useRef(null);
    const formCreatedRef = useRef(false);
    const cookiesCacheRef = useRef({});
    const lastCookieCheckRef = useRef(0);

    // Memoized cookie consent checker with caching
    const checkConsent = useCallback(() => {
        const now = Date.now();

        // Cache cookies for 500ms to reduce DOM access
        if (now - lastCookieCheckRef.current > 500) {
            cookiesCacheRef.current = parseCookies();
            lastCookieCheckRef.current = now;
        }

        return cookiesCacheRef.current.cookieConsent === 'true';
    }, []);

    // Memoized consent declined checker
    const checkConsentDeclined = useCallback(() => {
        const now = Date.now();

        if (now - lastCookieCheckRef.current > 500) {
            cookiesCacheRef.current = parseCookies();
            lastCookieCheckRef.current = now;
        }

        return cookiesCacheRef.current.cookieConsent === 'false';
    }, []);

    // Optimized cookie banner reopener
    const reopenCookieBanner = useCallback(() => {
        // Use more efficient cookie removal
        const cookiesToRemove = ['cookieConsent', '__hs_opt_out'];
        const expireDate = 'Thu, 01 Jan 1970 00:00:00 GMT';
        const cookieAttributes = 'path=/; SameSite=Lax; Secure';

        cookiesToRemove.forEach(cookieName => {
            document.cookie = `${cookieName}=; expires=${expireDate}; ${cookieAttributes}`;
        });

        // Use replace instead of reload to avoid losing form state if needed
        window.location.reload();
    }, []);

    // Initial consent check - only run once
    useEffect(() => {
        const consent = checkConsent();
        const declined = checkConsentDeclined();

        console.log('HubSpot Form - Initial consent status:', { consent, declined });

        setHasConsent(consent);
        setConsentDeclined(declined);
        setIsLoading(false);
    }, []); // Empty dependency array - only run once

    // Optimized consent polling - use longer intervals and requestIdleCallback
    useEffect(() => {
        if (hasConsent || consentDeclined) {
            // Stop polling once we have a definitive answer
            return;
        }

        const checkConsentPeriodically = () => {
            // Use requestIdleCallback to avoid blocking main thread
            const performCheck = () => {
                const currentConsent = checkConsent();
                const currentDeclined = checkConsentDeclined();

                if (currentConsent !== hasConsent) {
                    setHasConsent(currentConsent);
                }
                if (currentDeclined !== consentDeclined) {
                    setConsentDeclined(currentDeclined);
                }
            };

            if (window.requestIdleCallback) {
                window.requestIdleCallback(performCheck, { timeout: 1000 });
            } else {
                // Fallback with immediate execution in next tick
                setTimeout(performCheck, 0);
            }
        };

        // Increased interval to 2 seconds to reduce main thread work
        intervalRef.current = setInterval(checkConsentPeriodically, 2000);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [hasConsent, consentDeclined, checkConsent, checkConsentDeclined]);

    // Form creation effect - optimized with better error handling
    useEffect(() => {
        if (!hasConsent || formLoaded || formCreatedRef.current || scriptError) {
            return;
        }

        const createForm = async () => {
            try {
                setScriptError(false);
                const hbspt = await loadHubSpotScript();

                if (hbspt && !formCreatedRef.current) {
                    formCreatedRef.current = true;

                    // Defer form creation to next idle period
                    const createFormCallback = () => {
                        try {
                            hbspt.forms.create({
                                portalId: '146566481',
                                formId: '4b36a761-f2b8-480d-91ae-d03dc94f8727',
                                region: 'eu1',
                                target: '#hubspotForm',
                                onFormSubmitted: function () {
                                    setIsSubmitted(true);
                                    console.log('HubSpot form submitted successfully');
                                },
                                onFormReady: function () {
                                    console.log('HubSpot form ready');
                                    setFormLoaded(true);
                                },
                                onFormSubmitError: function (error) {
                                    console.error('HubSpot form submission error:', error);
                                }
                            });
                        } catch (error) {
                            console.error('Error creating HubSpot form:', error);
                            formCreatedRef.current = false;
                            setScriptError(true);
                        }
                    };

                    if (window.requestIdleCallback) {
                        window.requestIdleCallback(createFormCallback, { timeout: 3000 });
                    } else {
                        setTimeout(createFormCallback, 200);
                    }
                }
            } catch (error) {
                console.error('Error loading HubSpot script:', error);
                setScriptError(true);
                formCreatedRef.current = false;
            }
        };

        createForm();
    }, [hasConsent, formLoaded, scriptError]);

    // Memoized loading component
    const LoadingComponent = useMemo(() => (
        <div className="hubspot-form-container">
            <div className="loading-spinner">
                <div className="spinner"></div>
                <p>Завантаження...</p>
            </div>
            <style jsx>{`
                .hubspot-form-container {
                    min-height: 400px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #f8f9fa;
                    border-radius: 12px;
                    border: 2px dashed #dee2e6;
                }
                .loading-spinner {
                    text-align: center;
                    color: #6c757d;
                }
                .spinner {
                    width: 40px;
                    height: 40px;
                    border: 4px solid #f3f3f3;
                    border-top: 4px solid #FF6F20;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                    margin: 0 auto 16px;
                }
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    ), []);

    if (isLoading) {
        return LoadingComponent;
    }

    if (scriptError) {
        return (
            <div className="hubspot-form-container">
                <div className="error-message">
                    <div className="error-icon">⚠️</div>
                    <h3>Помилка завантаження</h3>
                    <p>Не вдалося завантажити форму. Спробуйте оновити сторінку.</p>
                    <button
                        className="retry-button"
                        onClick={() => window.location.reload()}
                    >
                        Оновити сторінку
                    </button>
                </div>
                <style jsx>{`
                    .hubspot-form-container {
                        min-height: 400px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: linear-gradient(135deg, #f8d7da 0%, #f5c6cb 100%);
                        border-radius: 16px;
                        border: 2px solid #f5c6cb;
                        padding: 40px 20px;
                        text-align: center;
                    }
                    .error-message {
                        max-width: 400px;
                    }
                    .error-icon {
                        font-size: 48px;
                        margin-bottom: 20px;
                    }
                    .error-message h3 {
                        color: #721c24;
                        margin-bottom: 16px;
                        font-size: 24px;
                        font-weight: 600;
                    }
                    .error-message p {
                        color: #721c24;
                        line-height: 1.6;
                        font-size: 16px;
                        margin-bottom: 24px;
                    }
                    .retry-button {
                        background: #dc3545;
                        color: white;
                        border: none;
                        border-radius: 12px;
                        padding: 14px 28px;
                        font-size: 16px;
                        font-weight: 600;
                        cursor: pointer;
                        transition: all 0.3s ease;
                    }
                    .retry-button:hover {
                        background: #c82333;
                        transform: translateY(-1px);
                    }
                `}</style>
            </div>
        );
    }

    // Rest of the component remains the same but with better performance
    if (consentDeclined && !hasConsent) {
        return (
            <div className="hubspot-form-container">
                <div className="consent-message">
                    <div className="consent-icon">🍪</div>
                    <h3>Форма недоступна</h3>
                    <p>
                        Для використання форми зворотнього зв&#39;язку необхідно дати згоду на використання cookies.
                        Ви раніше відхилили їх використання.
                    </p>
                    <button
                        className="consent-button"
                        onClick={reopenCookieBanner}
                    >
                        Переглянути налаштування cookies
                    </button>
                </div>
                <style jsx>{`
                    .hubspot-form-container {
                        min-height: 500px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
                        border-radius: 16px;
                        border: 2px solid #ffeaa7;
                        padding: 40px 20px;
                        text-align: center;
                    }
                    .consent-message {
                        max-width: 400px;
                    }
                    .consent-icon {
                        font-size: 48px;
                        margin-bottom: 20px;
                    }
                    .consent-message h3 {
                        color: #856404;
                        margin-bottom: 16px;
                        font-size: 24px;
                        font-weight: 600;
                    }
                    .consent-message p {
                        color: #856404;
                        line-height: 1.6;
                        font-size: 16px;
                        margin-bottom: 24px;
                    }
                    .consent-button {
                        background: #FF6F20;
                        height: 48px;
                        color: white;
                        border: none;
                        border-radius: 12px;
                        padding: 14px 28px;
                        font-size: 16px;
                        font-weight: 600;
                        cursor: pointer;
                        transition: all 0.3s ease;
                        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
                    }
                    .consent-button:hover {
                        transform: scale(1.05);
                        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.075);
                    }
                    .consent-button:active {
                        transform: translateY(0);
                    }
                `}</style>
            </div>
        );
    }

    if (!hasConsent && !consentDeclined) {
        return (
            <div className="hubspot-form-container">
                <div className="loading-spinner">
                    <div className="spinner"></div>
                    <p>Для завантаження форми зворотнього зв&#39;язку необхідно дати згоду на cookie</p>
                </div>
                <style jsx>{`
                    .hubspot-form-container {
                        min-height: 100%;
                        margin: 32px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: #f8f9fa;
                        border-radius: 12px;
                        border: 2px dashed #dee2e6;
                    }
                    .loading-spinner {
                        text-align: center;
                        color: #6c757d;
                        padding: 16px;
                    }
                    .spinner {
                        width: 40px;
                        height: 40px;
                        border: 4px solid #f3f3f3;
                        border-top: 4px solid #FF6F20;
                        border-radius: 50%;
                        animation: spin 1s linear infinite;
                        margin: 0 auto 16px;
                    }
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                `}</style>
            </div>
        );
    }

    if (isSubmitted) {
        return (
            <div className="hubspot-form-container">
                <div className="success-message">
                    <div className="success-icon">✅</div>
                    <h3>Дякуємо за звернення!</h3>
                    <p>
                        Ваше повідомлення успішно надіслано.
                        Ми зв&#39;яжемося з вами найближчим часом.
                    </p>
                </div>
                <style jsx>{`
                    .hubspot-form-container {
                        min-height: 300px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%);
                        border-radius: 16px;
                        border: 2px solid #b6d7c1;
                        padding: 40px 20px;
                        text-align: center;
                    }
                    .success-message {
                        max-width: 400px;
                    }
                    .success-icon {
                        font-size: 48px;
                        margin-bottom: 20px;
                    }
                    .success-message h3 {
                        color: #155724;
                        margin-bottom: 16px;
                        font-size: 24px;
                        font-weight: 600;
                    }
                    .success-message p {
                        color: #155724;
                        line-height: 1.6;
                        font-size: 16px;
                    }
                `}</style>
            </div>
        );
    }

    return (
        <div className="hubspot-form-container">
            <div id="hubspotForm" />
            <style jsx>{`
                .hubspot-form-container {
                    border-radius: 12px;
                    overflow: hidden;
                }

                /* Optimized HubSpot form styles */
                :global(.hubspot-form-container .hbspt-form) {
                    font-family: inherit !important;
                }

                :global(.hubspot-form-container .hs-form-field > label) {
                    font-weight: 600 !important;
                    color: #495057 !important;
                    margin-bottom: 8px !important;
                }

                :global(.hubspot-form-container .hs-input) {
                    border: 2px solid #dee2e6 !important;
                    border-radius: 8px !important;
                    padding: 12px 16px !important;
                    font-size: 16px !important;
                    transition: border-color 0.15s ease !important;
                    will-change: border-color !important;
                }

                :global(.hubspot-form-container .hs-input:focus) {
                    border-color: #FF6F20 !important;
                    outline: none !important;
                    box-shadow: 0 0 0 3px rgba(255, 111, 32, 0.1) !important;
                }

                :global(.hubspot-form-container .hs-submit .hs-button) {
                    background: linear-gradient(135deg, #FF6F20 0%, #ff8f3f 100%) !important;
                    border: none !important;
                    border-radius: 12px !important;
                    padding: 14px 28px !important;
                    font-size: 16px !important;
                    font-weight: 600 !important;
                    transition: transform 0.15s ease, box-shadow 0.15s ease !important;
                    box-shadow: 0 4px 16px rgba(255, 111, 32, 0.3) !important;
                    will-change: transform, box-shadow !important;
                }

                :global(.hubspot-form-container .hs-submit .hs-button:hover) {
                    transform: translateY(-2px) !important;
                    box-shadow: 0 8px 24px rgba(255, 111, 32, 0.4) !important;
                }
            `}</style>
        </div>
    );
};

export default HubspotForm;