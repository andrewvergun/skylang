import "@/styles/components/ContactForm.css";
const fireworks= "/assets/fireworks.png";
import Image from 'next/image';
import HubspotForm from "@/components/HubspotForm/HubspotForm";

const ContactForm = () => {



  return (
      <div id="contact-form-home">
        <h2 className="contact-form__title">Залишились питання?</h2>
        <div className="contact-form__container">
          <div className="contact-form__left">
            <h3>Напишіть нам!</h3>
            <Image src={fireworks} width={204} height={204} alt="Феєрверки" className="contact-form__image"/>
          </div>
          <div className="contact-form__right">
            <div className=".contact-form__form">
              <HubspotForm/>
            </div>

          </div>
        </div>
      </div>
  );
};

export default ContactForm;
