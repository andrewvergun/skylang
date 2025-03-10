import "./ContactForm.css";
import fireworks from "../../assets/fireworks.png";

const ContactForm = () => {
  return (
    <div>
      <h2 className="contact-form__title">Залишились питання?</h2>
      <div className="contact-form__container">
        <div className="contact-form__left">
          <h3>Напишіть нам!</h3>
          <img src={fireworks} alt="Феєрверки" className="contact-form__image" />
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
            <button type="submit" className="contact-form__button">
              Відправити 🎆
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
