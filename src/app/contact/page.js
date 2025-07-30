import ContactForm from "@/components/ContactForm/ContactForm";
import '@/styles/pages/Contact.css'

const Page = () => {
    return (
        <div className='contact-page'>
            <div className="contact-page__description">
                <p className='contact-page-description-text'>
                    Залиште заявку на обраний курс або поставте запитання - і наші фахівці зв’яжуться з вами найближчим часом.
                </p>
            </div>
            <ContactForm/>
        </div>
    )
}

export default Page