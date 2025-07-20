import Link from "next/link";
import Image from "next/image";
import "@/styles/components/SocialMediaLinks.css";
const facebookLogoFooter = '/svg/facebook-footer.svg'
const instagramLogoFooter = '/svg/instagram-footer.svg'
const youtubeLogoFooter = '/svg/youtube-footer.svg'

const SocialMediaLinks = () => {
    return (
        <div className="social-block">
            <Link href=""><Image src={facebookLogoFooter} width={32} height={32} alt="Facebook logo"  /> </Link>
            <Link href=""><Image src={instagramLogoFooter} width={32} height={32} alt="Instagram logo"  /></Link>
            <Link href=""><Image src={youtubeLogoFooter} width={32} height={32} alt="Youtube logo"  /></Link>
        </div>
    )
}

export default SocialMediaLinks