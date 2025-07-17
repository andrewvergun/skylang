import '@/styles/components/Сertificate.css'
const Certificate = '/assets/Certificate.png'

import Image from 'next/image'

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
            <Image src={Certificate} width={540} height={381} alt="" />
        </div>
    </div>
    </>
  )
}

export default Сertificate