import '@/styles/components/Footer.css'
import Image from "next/image";
import Link from "next/link"
import SocialMediaLinks from "@/components/SocialMediaLinks/SocialMediaLinks";

const TelegramFooterIcon = '/svg/telegram-footer.svg';
const EmailFooterIcon = '/svg/email-footer.svg';
const PhoneFooterIcon = '/svg/phone-call-footer.svg';


const Footer = () => {
    return (
        <footer>
            <div className="footer__container">
                <div className="footer__container-left">
                    <p>SkyLang</p>
                    <SocialMediaLinks/>
                </div>
                <div className='footer__container-right'>
                    <p>Онлайн-школа польської мови SkyLang</p>

                    <Link href="tel:+48790452677">
                        <div className="footer-link-item">
                            <Image src={PhoneFooterIcon} width={24} height={24} alt='Link'/>
                            <p>Номер телефону: +48886033804</p>
                        </div>

                    </Link>
                    <Link href="https://t.me/hello_skylang">
                        <div className="footer-link-item">
                            <Image src={TelegramFooterIcon} width={24} height={24} alt='Link'/>
                            <p>Телеграм: @hello_skylang</p>
                        </div>
                    </Link>
                    <Link href="mailto:hello.skylang@gmail.com">
                        <div className="footer-link-item">
                            <Image src={EmailFooterIcon} width={24} height={24} alt='Link'/>
                            <p>Email: hello.skylang@gmail.com</p>
                        </div>
                    </Link>

                </div>
            </div>

        </footer>
    )
}

export default Footer
