import './Сertificate.css'
import Certificate from '../../assets/Certificate.png'

const Сertificate = () => {
  return (
    <>
    <h2>Те, що важко отримати</h2>
    <div className="certificate__container">
        <div className="certificate__container--description">
            <h3>Сертифікат SkyLang</h3>
            <p>Високо цінується роботодавцями та ВНЗ-ми</p>
            <p >Після завершення курсу ви
                проходите фінальний екзамен
                та у разі успішного його проходження
                отримуєте сертифікат</p>
        </div>
        <div className="certificate__container--img">
            <img src={Certificate} alt="" />
        </div>
    </div>
    </>
  )
}

export default Сertificate