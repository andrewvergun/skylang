import '@/styles/components/Footer.css'
import Image from "next/image";
import Link from "next/link"
const facebookLogoFooter = '/svg/facebook-footer.svg'
const instagramLogoFooter = '/svg/instagram-footer.svg'
const youtubeLogoFooter = '/svg/youtube-footer.svg'

const Footer = () => {
    return(
        <footer>
            <div className="footer__container">
                <div className="footer__container-left">
                  <p>SkyLang</p>
                    <div className="social-block">
                        <Link href=""><Image src={facebookLogoFooter} width={32} height={32} alt="Facebook logo"  /> </Link>
                        <Link href=""><Image src={instagramLogoFooter} width={32} height={32} alt="Instagram logo"  /></Link>
                        <Link href=""><Image src={youtubeLogoFooter} width={32} height={32} alt="Youtube logo"  /></Link>
                    </div>
                </div>
                <div className='footer__container-right'>
                    <p>Онлайн-школа польської мови SkyLang</p>
                    <Link href="mailto:hello.skylang@gmail.com"><p>email: skylang@gmail.com</p></Link>
                    <Link href=""><p>Telegram: @skylang</p></Link>
                    <Link href="tel:+48790452677"><p>Телефон: +48790452677</p></Link>
                </div>
            </div>

        </footer>
    )
}

export default Footer