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
            <p>Сертифікат, який відкриває двері: підвищує шанси при вступі до університету та працевлаштуванні в Польщі.</p>
            <p>Після курсу — не просто знання, а підтверджений результат, який цінують роботодавці та університети.</p>

        </div>
        <div className="certificate__container--img">
            <Image src={Certificate} width={540} height={381} alt="" />
        </div>
    </div>
    </>
  )
}

export default Сertificate