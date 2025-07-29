'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
    const [show, setShow] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        // Check if user has given consent
        const hasConsent = getCookieValue('cookieConsent');
        const hsOptOut = getCookieValue('__hs_opt_out');

        console.log('Current cookies:', document.cookie);
        console.log('Has consent:', hasConsent);
        console.log('HubSpot opt-out:', hsOptOut);

        // Show banner if no consent decision has been made
        if (hasConsent === null && hsOptOut === null) {
            setShow(true);
        }

        // If user previously consented, ensure HubSpot tracking is enabled
        if (hasConsent === 'true' && hsOptOut !== 'no') {
            enableHubSpotTracking();
        }

        // If user previously declined, ensure HubSpot tracking is disabled
        if (hasConsent === 'false' || hsOptOut === 'yes') {
            disableHubSpotTracking();
        }
    }, []);

    // Helper function to get cookie value
    const getCookieValue = (name) => {
        if (typeof document === 'undefined') return null;

        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) {
            return parts.pop().split(';').shift();
        }
        return null;
    };

    const enableHubSpotTracking = () => {
        if (typeof window !== 'undefined') {
            // Method 1: Using _hsq queue (most reliable)
            if (window._hsq) {
                window._hsq.push(['setPrivacyOptions', { enabled: true }]);
                window._hsq.push(['revokeCookieConsent']); // Remove any previous opt-out
                console.log('HubSpot tracking enabled via _hsq');
            }

            // Method 2: Remove HubSpot opt-out cookie by setting it to 'no'
            const expirationDate = new Date();
            expirationDate.setFullYear(expirationDate.getFullYear() + 1);
            document.cookie = `__hs_opt_out=no; path=/; expires=${expirationDate.toUTCString()}; SameSite=Lax; Secure`;

            // Method 3: Use HubSpot Consent API if available
            if (window.hsConsentAPI) {
                window.hsConsentAPI.grantConsent();
                console.log('HubSpot consent granted via API');
            }

            // Re-initialize HubSpot tracking code if available
            if (window._hsq && window._hsq.push) {
                window._hsq.push(['addPrivacyConsentListener', function(consent) {
                    console.log('HubSpot consent status:', consent);
                }]);
            }
        }
    };

    const disableHubSpotTracking = () => {
        if (typeof window !== 'undefined') {
            // Method 1: Using _hsq queue
            if (window._hsq) {
                window._hsq.push(['setPrivacyOptions', { enabled: false }]);
                window._hsq.push(['doNotTrack']);
                console.log('HubSpot tracking disabled via _hsq');
            }

            // Method 2: Set HubSpot opt-out cookie to 'yes'
            const expirationDate = new Date();
            expirationDate.setFullYear(expirationDate.getFullYear() + 1);
            document.cookie = `__hs_opt_out=yes; path=/; expires=${expirationDate.toUTCString()}; SameSite=Lax; Secure`;

            // Method 3: Use HubSpot Consent API if available
            if (window.hsConsentAPI) {
                window.hsConsentAPI.revokeConsent();
                console.log('HubSpot consent revoked via API');
            }
        }
    };

    const acceptCookies = () => {
        // Set our custom consent cookie
        const expirationDate = new Date();
        expirationDate.setFullYear(expirationDate.getFullYear() + 1);

        document.cookie = `cookieConsent=true; path=/; expires=${expirationDate.toUTCString()}; SameSite=Lax; Secure`;

        // Enable HubSpot form tracking
        enableHubSpotTracking();

        // Enable Google Analytics if available
        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('consent', 'update', {
                'analytics_storage': 'granted',
                'ad_storage': 'granted',
                'functionality_storage': 'granted',
                'personalization_storage': 'granted',
                'security_storage': 'granted'
            });
            console.log('Google Analytics consent granted');
        }

        console.log('Cookies accepted. All tracking enabled.');
        setShow(false);
    };

    const declineCookies = () => {
        // Set decline cookie
        const expirationDate = new Date();
        expirationDate.setFullYear(expirationDate.getFullYear() + 1);

        document.cookie = `cookieConsent=false; path=/; expires=${expirationDate.toUTCString()}; SameSite=Lax; Secure`;

        // Disable HubSpot form tracking
        disableHubSpotTracking();

        // Disable Google Analytics if available
        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('consent', 'update', {
                'analytics_storage': 'denied',
                'ad_storage': 'denied',
                'functionality_storage': 'denied',
                'personalization_storage': 'denied'
            });
            console.log('Google Analytics consent denied');
        }

        console.log('Cookies declined. Tracking disabled.');
        setShow(false);
    };

    // Don't render on server side
    if (!mounted) return null;

    // Don't show if consent decision already made
    const hasConsent = getCookieValue('cookieConsent');
    const hsOptOut = getCookieValue('__hs_opt_out');

    if (hasConsent !== null || (hsOptOut !== null && hsOptOut !== 'undefined')) {
        return null;
    }

    return (
        <>
            {show && (
                <div className="cookie-banner">
                    <div className="cookie-banner__content">
                        <div className="cookie-banner__text">
                            <h3>Ми використовуємо кукі 🍪</h3>
                            <p>
                                Ми використовуємо файли cookie для покращення досвіду користувача.
                            </p>
                        </div>
                        <div className="cookie-banner__buttons">
                            <button className="cookie-banner__button cookie-banner__button--decline" onClick={declineCookies}>
                                Відхилити
                            </button>
                            <button className="cookie-banner__button cookie-banner__button--accept" onClick={acceptCookies}>
                                Прийняти всі
                            </button>
                        </div>
                    </div>

                    <style jsx>{`
                        .cookie-banner {
                            position: fixed;
                            bottom: 32px;
                            left: 0;
                            right: 0;
                            display: flex;
                            justify-content: center;
                            z-index: 9999;
                            animation: slideUp 0.5s ease-out;
                            pointer-events: none;
                        }

                        .cookie-banner__content {
                            width: 1144px;
                            background: linear-gradient(135deg, #2c2c2c 0%, #1a1a1a 100%);
                            border: 1px solid #404040;
                            border-radius: 48px;
                            padding: 32px 32px;
                            box-shadow: 0 16px 64px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05);
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            pointer-events: all;
                            box-sizing: border-box;
                            gap: 32px;
                            backdrop-filter: blur(10px);
                        }

                        .cookie-banner__text {
                            flex: 1;
                            max-width: 70%;
                        }

                        .cookie-banner__text h3 {
                            font-size: 20px;
                            margin: 0 0 8px 0;
                            font-weight: 600;
                            color: #fff;
                        }

                        .cookie-banner__text p {
                            margin: 0;
                            line-height: 1.5;
                            color: #e0e0e0;
                            font-size: 18px;
                        }

                        .cookie-banner__link {
                            color: #FF6F20;
                            text-decoration: underline;
                            margin-left: 8px;
                            font-weight: 500;
                        }

                        .cookie-banner__link:hover {
                            color: #ff8f3f;
                        }

                        .cookie-banner__buttons {
                            display: flex;
                            gap: 12px;
                            white-space: nowrap;
                            flex-shrink: 0;
                        }

                        .cookie-banner__button {
                            font-size: 18px;
                            font-weight: 600;
                            border: none;
                            height: 48px;
                            padding: 12px 24px;
                            border-radius: 16px;
                            cursor: pointer;
                            transition: all 0.3s ease;
                            position: relative;
                            overflow: hidden;
                        }

                        .cookie-banner__button--accept {
                            background: #FF6F20;
                            color: white;
                            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
                        }

                        .cookie-banner__button--accept:hover {
                            transform: scale(1.05);
                            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.75);
                        }

                        .cookie-banner__button--accept:active {
                            transform: translateY(0);
                        }

                        .cookie-banner__button--decline {
                            background: transparent;
                            color: #ccc;
                            border: 2px solid #555;
                        }

                        .cookie-banner__button--decline:hover {
                            background: #555;
                            color: white;
                            border-color: #666;
                            transform: scale(1.05);
                        }

                        @media (max-width: 1144px) {
                            .cookie-banner__content {
                                width: 90%;
                                
                                //margin: 0 16px;
                            }
                        }

                        @media (max-width: 767px) {
                            .cookie-banner {
                                bottom: 16px;
                                
                            }

                            .cookie-banner__content {
                                width: 94%;
                                padding: 16px;
                                border-radius: 16px;
                                flex-direction: column;
                                align-items: stretch;
                                gap: 20px;
                            }

                            .cookie-banner__text {
                                max-width: 100%;
                            }

                            .cookie-banner__text h3 {
                                font-size: 18px;
                                text-align: center;
                            }

                            .cookie-banner__text p {
                                text-align: center;
                                font-size: 18px;
                            }

                            .cookie-banner__buttons {
                                flex-direction: column;
                                gap: 12px;
                            }

                            .cookie-banner__button {
                                width: 100%;
                                padding: 16px;
                                font-size: 16px;
                            }
                        }

                        @media (max-width: 480px) {
                            .cookie-banner__content {
                                width: 94%;
                                padding: 16px;
                                gap: 16px;
                            }

                            .cookie-banner__text h3 {
                                font-size: 18px;
                            }

                            .cookie-banner__text p {
                                font-size: 18px;
                            }

                            .cookie-banner__buttons {
                                gap: 8px;
                            }

                            .cookie-banner__button {
                                padding: 16px;
                                font-size: 14px;
                            }
                        }

                        @keyframes slideUp {
                            from {
                                opacity: 0;
                                transform: translateY(100px);
                            }
                            to {
                                opacity: 1;
                                transform: translateY(0);
                            }
                        }
                    `}</style>
                </div>
            )}
        </>
    );
}