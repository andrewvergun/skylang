import '@/styles/components/CourseItemBig.css';
import Image from 'next/image';

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
                <h2>{title}</h2>

            </div>
            <div className="course-item-big__bottom">
                <div className="course-item-big__bottom--left">
                    <div className='description'>
                        {description}
                    </div>
                </div>
                <div className="course-item-big__bottom--right">
                    <div className="details">
                        <div className="details-item">
                            <p>Тривалість: {courseDuration}</p>
                        </div>

                        <div className="details-item">
                            <p>Кількість занять: {numberOfLessons}</p>
                        </div>

                        <div className="details-item">
                            <p>Ціна: {price}</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default CourseItemBig;