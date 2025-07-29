import '@/styles/components/Footer.css'
import Image from "next/image";
import Link from "next/link"
import SocialMediaLinks from "@/components/SocialMediaLinks/SocialMediaLinks";


const Footer = () => {
    return(
        <footer>
            <div className="footer__container">
                <div className="footer__container-left">
                  <p>SkyLang</p>
                    <SocialMediaLinks/>
                </div>
                <div className='footer__container-right'>
                    <p>Онлайн-школа польської мови SkyLang</p>
                    <Link href="mailto:hello.skylang@gmail.com"><p>email: hello.skylang@gmail.com</p></Link>
                    <Link href="https://t.me/hello_skylang"><p>Telegram: @hello_skylang</p></Link>
                    <Link href="tel:+48790452677"><p>Телефон: +48886033804</p></Link>
                </div>
            </div>

        </footer>
    )
}

export default Footer
