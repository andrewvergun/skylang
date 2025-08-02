import "@/styles/components/Intro.css";
import CourseItems from "../CourseItem/CourseItems";
const image = "/assets/background-image.jpg";
import Image from 'next/image'
import Services from "@/components/Services/Services";

const Intro = () => {
  const introDescription = {
    title: "SkyLang - твій найкращий друг у вивченні мови!",
    description: `Готуємо до іспитів, вступу, переїзду та роботи. Даємо не просто знання — а результат, який змінює життя.

Вже на 2 тижні занять ти починаєш говорити.
Через 8 тижнів — впевнено спілкуєшся польською в реальних ситуаціях.
Уроки минають легко, а мова стає твоїм інструментом до нових можливостей.

Ми знаємо, як важко зробити перший крок — тому поруч із тобою буде команда, яка підтримує, пояснює і веде до мети.

Залиши заявку — і почни свій шлях до нового життя в Польщі вже сьогодні.`,
  };

  return (
    <section className="intro">
      <div className="intro__description">
        <div className="intro__description--text">
          <h3>{introDescription.title}</h3>
          <p>
            {introDescription.description.split("\n").map((line, index) => (
              <span key={index}>
                {line.trim()}
                {index !==
                  introDescription.description.split("\n").length - 1 && <br />}
              </span>
            ))}
          </p>
          <Services/>
        </div>
        <div className="intro__description__img">
          <Image src={image} width={508} height={420} alt="Background" className="intro__img" />
        </div>
      </div>
      <div className="intro__courses">
        <div className="intro__courses--title">
          <p>Курси</p>
          <div className="intro__courses--hint">
            Свайпніть вправо, щоб побачити більше курсів
          </div>
        </div>
        <div className="intro__courses--courses">
          <CourseItems />
        </div>
      </div>
    </section>
  );
};

export default Intro;
