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

            <div className="quote">
                <div className="quote-container">
                    <div className="quote-mark">

                    </div>
                    <p className='quote-text'>
                        Наша місія — зробити мову не бар’єром, а мостом. Ми вчимо так, як хотіли б, щоб вчили нас: легко, структуровано, без стресу.
                    </p>
                </div>
            </div>
        </div>
    );

}

export default AboutUs;