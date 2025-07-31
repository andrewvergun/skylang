'use client';

import '@/styles/components/TeachingStyle.css';
import { useEffect, useRef, useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const teachingStyleItems = [
    {
        img: '/lotties/congrats.lottie',
        title: "Гарантований результат і державні сертифікати",
        description: "Наші студенти успішно складають державні іспити з польської мови (рівні A2–C1) і здобувають офіційні сертифікати, визнані в Польщі та ЄС. Ми знаємо, що вам потрібен не просто курс, а результат, який змінює життя.",
    },
    {
        img: '/lotties/gift.lottie',
        title: "Безкоштовне навчання через польські програми",
        description: "Допомагаємо вам вийти на безкоштовне навчання або стажування в Польщі через освітні та урядові програми. Ми знаємо, де шукати можливості — і допомагаємо вам їх реалізувати.",
    },
    {
        img: '/lotties/chat-bubble.lottie',
        title: "Польська мова для життя, а не для підручника",
        description: "Навчаємо живої, практичної польської — для роботи, переїзду, університету чи повсякденного спілкування. Ви одразу застосовуєте мову в реальних ситуаціях, тому що ми готуємо не до тестів — ми готуємо до життя.",
    },
    {
        img: '/lotties/rocket.lottie',
        title: "Авторська методика, яка дає прогрес вже з першого тижня",
        description: "Наша структурована, ефективна та сучасна методика поєднує speaking club, гейміфікацію, психологію запам'ятовування та зворотний зв'язок. Уроки минають швидко, а результат відчувається одразу.",
    },
    {
        img: '/lotties/study.lottie',
        title: "Вчителі, які не читають з книжки, а вчать",
        description: "У нас викладають не просто носії мови чи філологи, а навчені комунікатори, які вміють пояснити, мотивувати й підтримати. Ми віримо в кожного учня — і саме тому ви будете вчити мову із задоволенням, а не з примусу.",
    },
    {
        img: '/lotties/travel.lottie',
        title: "Мова як трамплін до нового життя",
        description: "Знання польської — це не тільки граматика. Це робота за кордоном, вступ у ВНЗ, громадянство, нове коло спілкування. А ще — це впевненість у собі. І ми допомагаємо вам зробити цей крок — м'яко, але впевнено.",
    },
];

const TeachingStyle = () => {
    return (
        <>
            <h2 className='why-us-title'>Чому обирають саме нас</h2>
            <div className="teaching-style__container">
                <div className="teaching-style__container--grid">
                    {teachingStyleItems.map((item, index) => (
                        <TeachingStyleItem key={index} item={item} />
                    ))}
                </div>
            </div>
        </>
    );
};

const TeachingStyleItem = ({ item }) => {
    const containerRef = useRef(null);
    const [dotLottie, setDotLottie] = useState(null);

    const dotLottieRefCallback = (dotLottieInstance) => {
        setDotLottie(dotLottieInstance);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && dotLottie) {
                    dotLottie.stop(); // Stop the animation first
                    dotLottie.play(); // Then play it from the beginning
                }
            },
            { threshold: 0.5 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, [dotLottie]);

    return (
        <div ref={containerRef} className="teaching-style__container--grid--item">
            <div className="teaching-style-lottie-wrapper">
                <DotLottieReact
                    className="teaching-style-lottie"
                    src={item.img}
                    autoplay={false}
                    loop={false}
                    dotLottieRefCallback={dotLottieRefCallback}
                />
            </div>
            <div className="grid-description">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
            </div>
        </div>
    );
};

export default TeachingStyle;