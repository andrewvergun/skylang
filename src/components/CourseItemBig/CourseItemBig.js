import '@/styles/components/CourseItemBig.css';
import Image from 'next/image';
import Link from 'next/link';

const CourseItemBig = ({
                           primaryColor,
                           borderColor,
                           image,
                           icon,
                           title,
                           description,
                           numberOfLessons,
                           courseDuration,
                           price
                       }) => {
    return (
        <div className='course-item-big__container' style={{border: `3px solid ${borderColor}`}}>
            <div className="course-item-big__top" style = {{backgroundColor: `${primaryColor}`}}>
                <Image className='course-item-big__icon' src={icon} width={64} height={64} alt="Flag icon"/>
                <h2 className='title'>{title}</h2>

            </div>
            <div className="course-item-big__bottom">
                <div className="course-item-big__bottom--left">
                    <div className='description'>
                        {description}
                    </div>
                </div>
                <div className="course-item-big__bottom--right">
                    <div className="details">
                        <div className="details-items">
                            <p>Тривалість: {courseDuration}</p>
                        </div>

                        <div className="details-items">
                            <p>Кількість занять: {numberOfLessons}</p>
                        </div>

                        <div className="details-items">
                            <p>Ціна: {price}</p>
                        </div>
                    </div>

                    <Link className='link-course-item-big__btn--enroll' href='/contact'>
                        <button

                            className="course-item-big__btn--enroll"
                            style={{backgroundColor: `${primaryColor}`
                        }}>
                            Записатись
                        </button>
                    </Link>
                </div>


            </div>
        </div>
    )
}

export default CourseItemBig;