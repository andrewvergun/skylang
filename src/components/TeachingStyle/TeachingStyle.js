'use client';

import '@/styles/components/TeachingStyle.css'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
const speechBubble = '/assets/speech-bubble.png'
const lightbulb = '/assets/lightbulb.png'
const star = '/assets/star-1.png'
const onlineVideo = '/assets/online-video.png'
const qa = '/assets/qa.png'
import Image from'next/image'

const travelLottie = '/lotties/travel.lottie';
const congrats = '/lotties/congrats.lottie';
const gift = '/lotties/gift.lottie';
const chatBubble = '/lotties/chat-bubble.lottie';
const rocket = '/lotties/rocket.lottie';
const study = '/lotties/study.lottie';

const TeachingStyle = () => {

    const teachingStyleItems = [
        {
            img: congrats,
            title: "Гарантований результат і державні сертифікати",
            description: "Наші студенти успішно складають державні іспити з польської мови (рівні A2–C1) і здобувають офіційні сертифікати, визнані в Польщі та ЄС. Ми знаємо, що вам потрібен не просто курс, а результат, який змінює життя.",
        },
        {
            img: gift,
            title: "Безкоштовне навчання через польські програми",
            description: "Допомагаємо вам вийти на безкоштовне навчання або стажування в Польщі через освітні та урядові програми. Ми знаємо, де шукати можливості — і допомагаємо вам їх реалізувати.",
        },
        {
            img: chatBubble,
            title: "Польська мова для життя, а не для підручника",
            description: "Навчаємо живої, практичної польської — для роботи, переїзду, університету чи повсякденного спілкування. Ви одразу застосовуєте мову в реальних ситуаціях, тому що ми готуємо не до тестів — ми готуємо до життя.",
        },
        {
            img: rocket,
            title: "Авторська методика, яка дає прогрес вже з першого тижня",
            description: "Наша структурована, ефективна та сучасна методика поєднує speaking club, гейміфікацію, психологію запам’ятовування та зворотний зв’язок. Уроки минають швидко, а результат відчувається одразу.",
        },
        {
            img: study,
            title: "Вчителі, які не читають з книжки, а вчать",
            description: "У нас викладають не просто носії мови чи філологи, а навчені комунікатори, які вміють пояснити, мотивувати й підтримати. Ми віримо в кожного учня — і саме тому ви будете вчити мову із задоволенням, а не з примусу.",
        },
        {
            img: travelLottie,
            title: "Мова як трамплін до нового життя",
            description: "Знання польської — це не тільки граматика. Це робота за кордоном, вступ у ВНЗ, громадянство, нове коло спілкування. А ще — це впевненість у собі. І ми допомагаємо вам зробити цей крок — м’яко, але впевнено.",
        },
    ]

  return (
    <>
        <h2>Чому обирають саме нас</h2>
        <div className="teaching-style__container">
            <div className="teaching-style__container--grid">
                {teachingStyleItems.map((item, index) => (
                    <div key={index} className="teaching-style__container--grid--item">

                        <DotLottieReact
                            className='teaching-style-lottie'
                            src={item.img}
                            loop
                            autoplay
                        />
                        <div className="grid-description">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                        
                    </div>
                ))}   
            </div>
        </div>
    </>
  )
}

export default TeachingStyle