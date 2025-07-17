import '@/styles/components/Footer.css'
import Image from "next/image";
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
                        <Image src={facebookLogoFooter} width={32} height={32} alt="Facebook logo"  />
                        <Image src={instagramLogoFooter} width={32} height={32} alt="Instagram logo"  />
                        <Image src={youtubeLogoFooter} width={32} height={32} alt="Youtube logo"  />
                    </div>
                </div>
                <div className='footer__container-right'>
                    <p>Онлайн-школа польської мови SkyLang</p>
                    <p>email: skylang@gmail.com</p>
                    <p>Telegram: @skylang</p>
                    <p>Телефон: +48790452677</p>
                </div>
            </div>

        </footer>
    )
}

export default Footer