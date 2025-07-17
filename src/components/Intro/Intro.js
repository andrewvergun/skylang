import "@/styles/components/Intro.css";
import CourseItems from "../CourseItem/CourseItems";
const grayBg = "/assets/gray-bg.png";
import Image from 'next/image'

const Intro = () => {
  const introDescription = {
    title: "SkyLang - твій найкращий друг у вивченні мови!",
    description: `Вступ у ВНЗ закордоном, навчання, екзамени, переїзд чи робота у Польщі?\n
    Ми з цим допоможемо!\n
    Наші онлайн-курси польської та англійської мов створені для вашого успіху! Ми допоможемо вам не лише опанувати мову, а й легко вписатися у нове суспільство.\n
    Забудьте про навчання в переповнених курсах – у нас навчання проходить в компактних групах до 5 осіб, щоб кожен отримав максимум уваги та підтримки.\n
    Розвивайте свої мовні навички разом із нами та досягайте своїх цілей впевнено!`,
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
        </div>
        <div className="intro__description--img">
          <Image src={grayBg} width={508} height={420} alt="Background" />
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
