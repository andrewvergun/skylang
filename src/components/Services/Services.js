import Image from 'next/image';
import '@/styles/components/Services.css';
const university = '/svg/university.svg';
const suitcase = '/svg/suitcase.svg';
const certificateDiploma = '/svg/certificate-diploma.svg';

const services = [
    {
        icon: certificateDiploma,
        title: 'Польська мова для державних сертифікатів B1, B2, C1 та безоплатного навчання',
    },
    {
        icon: university,
       title: 'Польська мова для вступу до університету',
    },
    {
        icon: suitcase,
        title: 'Польська мова для переїзду, життя та роботи',
    }
]

const Services = () => {
    return (
        <div className='services'>
            {services.map((service, index) => {
                return (
                    <div className='services-item' key={index}>
                        <div className="services-item__icon">
                            <Image className='services-item__image' src = {service.icon} width={48} height={48} alt='icon'/>
                        </div>
                        <div className="services-item__text">
                            <h4 className='services-item__title'>{service.title}</h4>
                        </div>

                    </div>
                )
            })}
        </div>
    );
}

export default Services;