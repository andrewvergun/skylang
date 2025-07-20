import Intro from "@/components/Intro/Intro"
import TeachingStyle from "@/components/TeachingStyle/TeachingStyle"
import Teachers from "@/components/Teachers/Teachers"
import Certificate from "@/components/Сertificate/Сertificate"
import Encouragement from "@/components/Encouragement/Encouragement"
import Reviews from "@/components/Reviews/Reviews"
import ContactForm from "@/components/ContactForm/ContactForm"


const Home = () => {
  return (
    <>
        <Intro/>
        <TeachingStyle/>
        <Teachers/>
        <Certificate/>
        <Encouragement/>
        <Reviews/>
        <h2 className="contact-form__title">Залишились питання?</h2>
        <ContactForm/>
    </>
  )
}

export default Home