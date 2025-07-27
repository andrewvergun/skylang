'use client';

import CourseItemBig from "@/components/CourseItemBig/CourseItemBig";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@/styles/pages/Courses.css'


const Flag_of_Poland = '/svg/Flag_of_Poland.svg';
const Flag_of_England = '/svg/Flag_of_England.svg';

const coursePolishA1 = {
    primaryColor: '#F06292',
    borderColor: 'rgba(240, 98, 146, 0.5)',
    icon: Flag_of_Poland,
    title: 'Польська мова - A1',
    courseDuration: '3 місяці',
    price: '6000 грн',
    numberOfLessons: '27',
    description: (
        <div className="course-description">
            <p>
                Курс польської мови рівня A1 допоможе вам з нуля освоїти основи граматики, лексику для повсякденного
                життя та сформувати впевнені навички спілкування. Ви навчитесь правильно читати, писати, будувати
                речення та розуміти базову мову на слух. Ідеально підходить для тих, хто планує навчання, роботу чи
                життя в Польщі.
            </p>
            <div className="course-section">
                <h3>Після курсу ви зможете:</h3>
                <p>Представити себе та розповісти про себе</p>
                <p>Підтримати просту розмову</p>
                <p>Розуміти основні фрази на слух</p>
                <p>Читати прості тексти та оголошення</p>
                <p>Підготуватись до рівня A2 або до екзамену на карту побиту</p>
            </div>

            <div className="course-section">
                <h3>Матеріали курсу:</h3>
                <p>Авторські конспекти та вправи</p>
                <p>Аудіо та інтерактивні тести</p>
                <p>Постійна підтримка викладача</p>
            </div>
        </div>
    )


};

const courseEnglishB2 = {
    primaryColor: '#133E87',
    borderColor: 'rgba(19, 62, 135, 0.5)',
    icon: Flag_of_England,
    title: 'Англійська мова - B2',
    courseDuration: '3 місяці',
    price: '6000 грн',
    numberOfLessons: '27',
    description: (
        <div className="course-description">
            <p>
                Курс польської мови рівня A1 допоможе вам з нуля освоїти основи граматики, лексику для повсякденного
                життя та сформувати впевнені навички спілкування. Ви навчитесь правильно читати, писати, будувати
                речення та розуміти базову мову на слух. Ідеально підходить для тих, хто планує навчання, роботу чи
                життя в Польщі.
            </p>
            <div className="course-section">
                <h3>Після курсу ви зможете:</h3>
                <p>Представити себе та розповісти про себе</p>
                <p>Підтримати просту розмову</p>
                <p>Розуміти основні фрази на слух</p>
                <p>Читати прості тексти та оголошення</p>
                <p>Підготуватись до рівня A2 або до екзамену на карту побиту</p>
            </div>

            <div className="course-section">
                <h3>Матеріали курсу:</h3>
                <p>Авторські конспекти та вправи</p>
                <p>Аудіо та інтерактивні тести</p>
                <p>Постійна підтримка викладача</p>
            </div>
        </div>
    )


};

const Page = () => {
    return (
        <div className='courses-page'>
            <div className="courses--title">
                <p id='polish-courses'>Польська мова</p>
                <div className="courses--hint">
                    Свайпніть вправо, щоб побачити більше курсів
                </div>
            </div>
            <Splide aria-label="Courses" options={
                {
                    type: 'splide',
                    rewind: true,
                    width: '1380px',
                    drag: true,
                    breakpoints: {
                        767: {
                            arrows: false
                        }
                    }
                }}

                style={{marginLeft: 'auto', marginRight: 'auto'}}
             >
                <SplideSlide>
                    <CourseItemBig
                        primaryColor={coursePolishA1.primaryColor}
                        borderColor={coursePolishA1.borderColor}
                        icon={coursePolishA1.icon}
                        title={coursePolishA1.title}
                        description={coursePolishA1.description}
                        courseDuration={coursePolishA1.courseDuration}
                        price={coursePolishA1.price}
                        numberOfLessons={coursePolishA1.numberOfLessons}
                    />
                </SplideSlide>
                <SplideSlide>

                </SplideSlide>
            </Splide>
            <div className="courses--title">
                <p id='english-courses'>Англійська мова</p>
                <div className="courses--hint">
                    Свайпніть вправо, щоб побачити більше курсів
                </div>
            </div>
            <Splide aria-label="Courses" options={
                {
                    type: 'splide',
                    rewind: true,
                    width: '1380px',
                    drag: true,
                    breakpoints: {
                        767: {
                            arrows: false
                        }
                    }
                }}
                    style={{marginLeft: 'auto', marginRight: 'auto'}}
            >
                <SplideSlide>
                    <CourseItemBig
                        primaryColor={courseEnglishB2.primaryColor}
                        borderColor={courseEnglishB2.borderColor}
                        icon={courseEnglishB2.icon}
                        title={courseEnglishB2.title}
                        description={courseEnglishB2.description}
                        courseDuration={courseEnglishB2.courseDuration}
                        price={courseEnglishB2.price}
                        numberOfLessons={courseEnglishB2.numberOfLessons}
                    />
                </SplideSlide>
                <SplideSlide>

                </SplideSlide>
            </Splide>


        </div>
    );
};

export default Page;
