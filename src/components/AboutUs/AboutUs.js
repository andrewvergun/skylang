import Image from 'next/image';
import Link from 'next/link';
import "@/styles/components/AboutUs.css";
import TeachingStyle from "@/components/TeachingStyle/TeachingStyle";
import Reviews from "@/components/Reviews/Reviews";

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

            <div className="about-team">
                <h2 className='about-team-title'>
                    Ми - команда SkyLang
                </h2>
                <Image className='about-team-img' src='' width={640} height={480} alt='Our team image'/>
                <p className='about-team-p'>
                    Все почалося з мого власного досвіду вивчення мов.
                    Коли я переїхав до Польщі, мені довелося швидко опанувати польську, щоб вчитися, працювати та просто жити. Я знаю, як це — боятися зробити помилку, плутати слова, соромитися говорити.
                    <br/><br/>
                    Та завдяки системному підходу, практиці з носіями й любові до мов я не лише вивчив польську до рівня В2+, а й почав викладати її іншим. Потім додалась англійська — і тепер я передаю свої знання тим, хто хоче змінити своє життя через мову.
                    <br/><br/>
                    Так з’явилася ця школа — простір, де кожен може вивчити польську чи англійську без страху, нудної теорії й з постійною підтримкою. Ми тут, щоб допомогти тобі заговорити впевнено й досягти своїх цілей.


                </p>
                <p className='about-team-p-bottom'>
                    - Андрій, засновник SkyLang
                </p>
            </div>
            <TeachingStyle/>
            <Reviews/>
            <div className="hero-bottom">
                <h2 className='hero-bottom-title'>
                    Почни говорити іноземною мовою вже за тиждень!
                </h2>
                <p className='hero-bottom-subtitle'>
                    Готові почати або хочете дізнатись більше? Залиште повідомлення - ми відповімо найближчим часом.
                </p>
                <button className='hero-bottom-btn'>
                    Написати нам
                </button>
            </div>
        </div>
    );

}

export default AboutUs;