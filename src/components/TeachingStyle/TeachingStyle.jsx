import './TeachingStyle.css'
import speechBubble from '../../assets/speech-bubble.png'
import lightbulb from '../../assets/lightbulb.png'
import star from '../../assets/star-1.png'
import onlineVideo from '../../assets/online-video.png'
import qa from '../../assets/qa.png'

const TeachingStyle = () => {

    const teachingStyleItems = [
        {
            img: speechBubble,
            title: "Акцент на практику",
            description: "На наших заняттях ви з першого уроку почнете активно спілкуватися, моделювати реальні ситуації та брати участь у захопливих дискусіях.",
        },
        {
            img: lightbulb,
            title: "Навчання за найкращими методами",
            description: "Комунікативний підхід, інтерактивні вправи та сучасні інструменти роблять навчання не лише корисним, а й захопливим. З нами кожен урок – це крок вперед до вашої мрії!",
        },
        {
            img: star,
            title: "Індивідуальний підхід",
            description: "Наші навчальні програми враховують ваші особисті потреби, інтереси та темп. Ви будете вивчати саме те, що вам потрібно, без зайвого стресу та перевантаження.",
        },
        {
            img: onlineVideo,
            title: "Гнучкість та комфорт навчання онлайн",
            description: "Хочете навчатися вдома, у кав'ярні чи навіть у відпустці? З нами це можливо! Онлайн-заняття – це свобода вибору часу і місця.",
        },
        {
            img: qa,
            title: "Постійна підтримка",
            description: "Наші викладачі готові допомогти, пояснити та підтримати на кожному етапі навчання. Ми – ваша команда, яка радіє кожному вашому успіху!",
        },
    ]

  return (
    <>
        <h2>Який наш стиль навчання?</h2>
        <div className="teaching-style__container">
            <div className="teaching-style__container--grid">
                {teachingStyleItems.map((item, index) => (
                    <div key={index} className="teaching-style__container--grid--item">
                        <img src={item.img} alt="" />
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