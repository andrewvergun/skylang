'use client';
import { useEffect, useState } from 'react';

const HubspotForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [hasConsent, setHasConsent] = useState(false);
    const [consentDeclined, setConsentDeclined] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [formLoaded, setFormLoaded] = useState(false);

    // Check for cookie consent
    const checkConsent = () => {
        if (typeof document === 'undefined') return false;

        const consent = document.cookie
            .split('; ')
            .find(row => row.startsWith('cookieConsent='))
            ?.split('=')[1];

        return consent === 'true';
    };

    // Check if cookies were previously declined
    const checkConsentDeclined = () => {
        if (typeof document === 'undefined') return false;

        const consent = document.cookie
            .split('; ')
            .find(row => row.startsWith('cookieConsent='))
            ?.split('=')[1];

        const isDeclined = consent === 'false';
        console.log('Consent declined check:', isDeclined, 'consent value:', consent);
        return isDeclined;
    };

    // Function to reopen cookie banner
    const reopenCookieBanner = () => {
        // Remove the cookieConsent cookie to trigger banner display
        document.cookie = 'cookieConsent=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax; Secure';

        // Also remove HubSpot opt-out cookie
        document.cookie = '__hs_opt_out=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax; Secure';

        // Trigger a page reload to reinitialize the banner
        window.location.reload();
    };

    useEffect(() => {
        const consent = checkConsent();
        const declined = checkConsentDeclined();

        console.log('HubSpot Form - Consent status:', { consent, declined });

        setHasConsent(consent);
        setConsentDeclined(declined);
        setIsLoading(false);

        const checkConsentInterval = setInterval(() => {
            const currentConsent = checkConsent();
            const currentDeclined = checkConsentDeclined();

            if (currentConsent !== hasConsent) {
                setHasConsent(currentConsent);
            }
            if (currentDeclined !== consentDeclined) {
                setConsentDeclined(currentDeclined);
            }
        }, 1000);

        return () => clearInterval(checkConsentInterval);
    }, [hasConsent, consentDeclined]);

    useEffect(() => {
        if (!hasConsent || formLoaded) return;

        const loadHubSpotForm = () => {
            // Create script element
            const script = document.createElement('script');
            script.src = 'https://js-eu1.hsforms.net/forms/embed/v2.js';
            script.type = 'text/javascript';
            script.charset = 'utf-8';
            script.async = true;

            script.onload = () => {
                // Wait for hbspt to be available
                const waitForHbspt = setInterval(() => {
                    if (window.hbspt) {
                        createForm();
                        clearInterval(waitForHbspt);
                    }
                }, 100);
            };

            document.head.appendChild(script);
        };

        const createForm = () => {
            if (window.hbspt && !formLoaded) {
                try {
                    window.hbspt.forms.create({
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
                        onFormSubmitError: function () {
                            console.error('HubSpot form submission error');
                        }
                    });
                } catch (error) {
                    console.error('Error creating HubSpot form:', error);
                }
            }
        };

        // If hbspt already exists, create form directly
        if (window.hbspt) {
            createForm();
        } else {
            loadHubSpotForm();
        }
    }, [hasConsent, formLoaded]);

    if (isLoading) {
        return (
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
        );
    }

    // If cookies were declined, show message with option to reopen consent
    if (consentDeclined && !hasConsent) {
        return (
            <div className="hubspot-form-container">
                <div className="consent-message">
                    <div className="consent-icon">🍪</div>
                    <h3>Форма недоступна</h3>
                    <p>
                        Для використання форми зворотнього зв'язку необхідно дати згоду на використання cookies.
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
                        min-height: 400px;
                        margin: 32px;
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
                        background: linear-gradient(135deg, #FF6F20 0%, #ff8f3f 100%);
                        color: white;
                        border: none;
                        border-radius: 12px;
                        padding: 14px 28px;
                        font-size: 16px;
                        font-weight: 600;
                        cursor: pointer;
                        transition: all 0.3s ease;
                        box-shadow: 0 4px 16px rgba(255, 111, 32, 0.3);
                    }
                    .consent-button:hover {
                        transform: translateY(-2px);
                        box-shadow: 0 8px 24px rgba(255, 111, 32, 0.4);
                    }
                    .consent-button:active {
                        transform: translateY(0);
                    }
                `}</style>
            </div>
        );
    }

    // If no consent yet and not explicitly declined, show loading state (let cookie banner handle consent)
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

                /* Style the HubSpot form */
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
                    transition: border-color 0.3s ease !important;
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
                    transition: all 0.3s ease !important;
                    box-shadow: 0 4px 16px rgba(255, 111, 32, 0.3) !important;
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