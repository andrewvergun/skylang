'use client';
import { useEffect, useState } from 'react';
import Script from 'next/script';

const HubspotForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        const loadForm = () => {
            if (window.hbspt) {
                window.hbspt.forms.create({
                    portalId: '146566481',
                    formId: '4b36a761-f2b8-480d-91ae-d03dc94f8727',
                    region: 'eu1',
                    target: '#hubspotForm',
                    onFormSubmitted: function () {
                        setIsSubmitted(true);
                    },
                    onFormReady: function () {
                        // Optional: Reset submission state if needed
                    },
                });
            }
        };

        if (window.hbspt) {
            loadForm();
        } else {
            const interval = setInterval(() => {
                if (window.hbspt) {
                    loadForm();
                    clearInterval(interval);
                }
            }, 100);
        }
    }, []);

    return (
        <>
            <Script
                src="//js-eu1.hsforms.net/forms/embed/v2.js"
                type="text/javascript"
                charSet="utf-8"
                strategy="afterInteractive"
            />
            <div id="hubspotForm" />
        </>
    );
};

export default HubspotForm;
