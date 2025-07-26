import Image from 'next/image';
import Link from 'next/link';
import "@/styles/components/AboutUs.css";

const AboutUs = () => {
    return (
        <div className="about-us-page">
            <div className="hero">
                <h2 className='hero-title'>
                    SkyLang - мовна школа, яка навчає результативно.
                </h2>
                <p className='hero-subtitle'>
                    Польська та англійська з нуля до впевненого спілкування. Онлайн, з підтримкою, без нудної граматики.
                </p>
                <button className='hero-btn'>
                    Переглянути курси
                </button>
            </div>
        </div>
    );

}

export default AboutUs;