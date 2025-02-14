import './CourseItems.css'
import flagPl from '../../../assets/Flag_of_Poland.svg'
import flagEn from '../../../assets/Flag_of_the_United_Kingdom_Square.svg'
import { Link } from 'react-router-dom'

const CourseItems = () => {

    const courseItems = [
        {
            img: flagPl,
            title: "Польська мова",
            description: "lorem ipsum dolor sit amet",
            numberOfLessons: "20",
            duration: "1 місяць",
            price: "400 грн",
            link1: "",
            link2: ""
        },
        {
            img: flagEn,
            title: "Англійська мова",
            description: "lorem ipsum dolor sit amet",
            numberOfLessons: "20",
            duration: "1 місяць",
            price: "400 грн",
            link1: "",
            link2: ""
        },

    ]

  return (
    <>
    {courseItems.map((item, index) => (
      <div key={index} className="course-item">
        <div className="course-item__title">
          <img src={item.img} alt="" />
          <p>{item.title}</p>
        </div>
        <div className="course-item__description">
          <p>{item.description}</p>
        </div>
        <div className="course-item__number-of-lessons">
          <p>Кількість уроків: {item.numberOfLessons}</p>
        </div>
        <div className="course-item__duration">
          <p>Тривалість: {item.duration}</p>
        </div>
        <div className="course-item__price">
          <p>Ціна: {item.price}</p>
        </div>
          
          
       
        <div className="course-item__btn">

          <Link to={item.link1}>
            <button className='course-item__btn--learn-more'>
                Дізнатись більше
            </button>
          </Link>
          <Link to={item.link2}>
            <button className='course-item__btn--enroll'>
                Записатись
            </button>
          </Link>
          
        </div>
      </div>
    ))}
    </>
  )
}

export default CourseItems