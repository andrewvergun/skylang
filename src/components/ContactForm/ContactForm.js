import "@/styles/components/ContactForm.css";
import {Sour_Gummy} from 'next/font/google';
const fireworks= "/assets/fireworks.png";
import Image from 'next/image';
import HubspotForm from "@/components/HubspotForm/HubspotForm";

const sourGummy = Sour_Gummy({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // customize as needed
    style: ['normal', 'italic'],
    display: 'swap',
});

const ContactForm = () => {
  return (
      <div id="contact-form-home">
        <h2 className="contact-form__title">Залишились питання?</h2>
        <div className="contact-form__container">
          <div className="contact-form__left">
            <h3>Напишіть нам!</h3>
              <p style={{fontFamily: sourGummy.style.fontFamily}}>Cześć!</p>
          </div>
          <div className="contact-form__right">
              <HubspotForm/>



          </div>
        </div>
      </div>
  );
};

export default ContactForm;
