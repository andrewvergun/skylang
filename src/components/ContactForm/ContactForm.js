import "@/styles/components/ContactForm.css";
const fireworks= "/assets/fireworks.png";
import Image from 'next/image';

const ContactForm = () => {
  return (
    <div id="contact-form-home">
      <h2 className="contact-form__title">Залишились питання?</h2>
      <div className="contact-form__container">
        <div className="contact-form__left">
          <h3>Напишіть нам!</h3>
          <Image src={fireworks} width={204} height={204} alt="Феєрверки" className="contact-form__image" />
        </div>
        <div className="contact-form__right">
          <form className="contact-form__form">
            <label>
              Ім'я та прізвище
              <input type="text" required />
            </label>
            <label>
              Номер телефону або Telegram
              <input type="text" required />
            </label>
            <label>
              E-mail
              <input type="email" required />
            </label>
            <label>
                Ваше питання
                <textarea 
                    style={{ height: '144px', resize: 'none' }} 
                    required 
                    placeholder=""
                />
            </label>
            <button type="submit" className="contact-form__button">
              Відправити
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
