import "@/styles/components/ContactForm.css";
import {Sour_Gummy} from 'next/font/google';
import CopyButton from '@/components/CopyButton/CopyButton';

const fireworks = "/assets/fireworks.png";
import Image from 'next/image';
import Link from 'next/link';
import HubspotForm from "@/components/HubspotForm/HubspotForm";
const TelegramIcon = '/svg/telegram-contact-form.svg';
const PhoneCallIcon = '/svg/phone-call-contact-form.svg';
const EmailIcon = '/svg/email-contact-form.svg';

const sourGummy = Sour_Gummy({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // customize as needed
    style: ['normal', 'italic'],
    display: 'swap',
});

const ContactForm = () => {
    return (
        <div id="contact-form-home">
            <div className="contact-form__container">
                <div className="contact-form__left">

                    <div>
                        <h3>Напишіть нам!</h3>
                        <p className='hello-text' style={{fontFamily: sourGummy.style.fontFamily}}>Cześć!</p>
                    </div>
                    <div className="contact-links">

                        <div className="contact-link-with-copy">
                            <a href="https://mailto:hello.skylang@gmail.com" target='_blank'>
                                <div className='contact-link-item'>
                                    <p className='p-title'>Email:</p>
                                    <p className='p-definition'>hello.skylang@gmail.com</p>
                                </div>
                            </a>
                            <div className="copy-button-container">
                                <CopyButton textToCopy='hello.skylang@gmail.com'/>
                            </div>

                        </div>

                        <div className="contact-link-with-copy">
                            <a href="tel:+48790452677"  target='_blank'>
                                <div className='contact-link-item'>
                                    <p className='p-title'>Номер телефону:</p>
                                    <p className='p-definition'>+48886033804</p>
                                </div>
                            </a>
                            <div className="copy-button-container">
                                <CopyButton textToCopy='+48886033804'/>
                            </div>
                        </div>


                        <div className="contact-link-with-copy">
                            <a href="https://t.me/hello_skylang" target='_blank'>
                                <div className='contact-link-item'>
                                    <p className='p-title'>Телеграм:</p>
                                    <p className='p-definition'>@hello_skylang</p>
                                </div>
                            </a>
                            <div className="copy-button-container">
                                <CopyButton textToCopy='@hello_skylang'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-form__right">
                    <HubspotForm/>
                    <div className="contact-links-right">

                        <div className="contact-link-with-copy">
                            <a href="https://mailto:hello.skylang@gmail.com" target='_blank'>
                                <div className='contact-link-item'>
                                    <p className='p-title'>Email:</p>
                                    <p className='p-definition'>hello.skylang@gmail.com</p>
                                </div>
                            </a>
                            <div className="copy-button-container">
                                <CopyButton textToCopy='hello.skylang@gmail.com'/>
                            </div>

                        </div>


                        <div className="contact-link-with-copy">
                            <a href="tel:+48790452677"  target='_blank'>
                                <div className='contact-link-item'>
                                    <p className='p-title'>Номер телефону:</p>
                                    <p className='p-definition'>+48886033804</p>
                                </div>
                                </a>
                                <div className="copy-button-container">
                                    <CopyButton textToCopy='+48886033804'/>
                                </div>
                        </div>


                        <div className="contact-link-with-copy">
                            <a href="https://t.me/hello_skylang" target='_blank'>
                                <div className='contact-link-item'>
                                    <p className='p-title'>Телеграм:</p>
                                    <p className='p-definition'>@hello_skylang</p>
                                </div>
                            </a>
                            <div className="copy-button-container">
                                <CopyButton textToCopy='@hello_skylang'/>
                            </div>
                        </div>


                    </div>


                </div>
            </div>
        </div>
);
};

export default ContactForm;
