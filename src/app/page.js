import Intro from "@/components/Intro/Intro"
import TeachingStyle from "@/components/TeachingStyle/TeachingStyle"
import Teachers from "@/components/Teachers/Teachers"
import Certificate from "@/components/Сertificate/Сertificate"
import Encouragement from "@/components/Encouragement/Encouragement"
import Reviews from "@/components/Reviews/Reviews"
import ContactForm from "@/components/ContactForm/ContactForm"
import Footer from "@/components/Footer/Footer";


const Home = () => {
  return (
    <>
        <Intro/>
        <TeachingStyle/>
        <Teachers/>
        <Certificate/>
        <Encouragement/>
        <Reviews/>
        <ContactForm/>
    </>
  )
}

export default Home