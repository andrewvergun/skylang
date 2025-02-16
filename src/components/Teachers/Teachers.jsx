import { useState } from 'react';
import './Teachers.css';
import Vika from '../../assets/Vika.jpg';

const Teachers = () => {
    const teachers = [
        {
            img: Vika,
            name: "Вікторія Вергун",
            description: "Дипломований спеціаліст англійської, польської та німецької мов.\n\nЗакінчила Ягелонський університет у Кракові",
            experience: "Викладає 3 роки"
        },
        {
            img: Vika,
            name: "Інший викладач",
            description: "Опис іншого викладача",
            experience: "Викладає 5 років"
        },
        {
            img: Vika,
            name: "Інший викладач 2",
            description: "Опис іншого викладача",
            experience: "Викладає 5 років"
        },
    ];

    // Стан для вибору викладача (за замовчуванням перший у списку)
    const [selectedTeacher, setSelectedTeacher] = useState(teachers[0]);

    return (
        <div className='teachers__container'>
            <div className="teachers__container--left">
                <p>Навчайтесь у сильних викладачів</p>
                <div className="teachers-choice">
                    {teachers.map((teacher, index) => (
                        <img 
                            key={index} 
                            src={teacher.img} 
                            alt={teacher.name} 
                            onClick={() => setSelectedTeacher(teacher)} 
                        />
                    ))}
                </div>
            </div>
            <div className="teachers__container--right">
                <img src={selectedTeacher.img} alt={selectedTeacher.name}/>
                <div className="teacher-info">
                    <p className='teacher-name'>{selectedTeacher.name}</p>
                    <p className='teacher-description'>
                        {selectedTeacher.description.split('\n').map((line, i) => (
                            <span key={i}>
                                {line}
                                <br />
                            </span>
                        ))}
                    </p>
                    <div className="teacher-experience">
                        <p>{selectedTeacher.experience}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Teachers;
