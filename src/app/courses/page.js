import CourseItemBig from "@/components/CourseItemBig/CourseItemBig";

const Flag_of_Poland = '/svg/Flag_of_Poland.svg';

const coursePolishA1 = {
  primaryColor: '#F06292',
  borderColor: 'rgba(240, 98, 146, 0.5)',
  icon: Flag_of_Poland,
  title: 'Польська мова - A1',
  courseDuration: '3 місяці',
  price: '6000 грн',
  numberOfLessons: '27',
  description: (
      <div className="course-description">
        <p>
          Курс польської мови рівня A1 допоможе вам з нуля освоїти основи граматики, лексику для повсякденного життя та сформувати впевнені навички спілкування. Ви навчитесь правильно читати, писати, будувати речення та розуміти базову мову на слух. Ідеально підходить для тих, хто планує навчання, роботу чи життя в Польщі.
        </p>
        <div className="course-section">
          <h3>Після курсу ви зможете:</h3>
          <p>Представити себе та розповісти про себе</p>
          <p>Підтримати просту розмову</p>
          <p>Розуміти основні фрази на слух</p>
          <p>Читати прості тексти та оголошення</p>
          <p>Підготуватись до рівня A2 або до екзамену на карту побиту</p>
        </div>

        <div className="course-section">
          <h3>Матеріали курсу:</h3>
          <p>Авторські конспекти та вправи</p>
          <p>Аудіо та інтерактивні тести</p>
          <p>Постійна підтримка викладача</p>
        </div>
      </div>
  )


};

const Page = () => {
  return (
      <CourseItemBig
          primaryColor={coursePolishA1.primaryColor}
          borderColor={coursePolishA1.borderColor}
          icon={coursePolishA1.icon}
          title={coursePolishA1.title}
          description={coursePolishA1.description}
          courseDuration={coursePolishA1.courseDuration}
          price={coursePolishA1.price}
          numberOfLessons={coursePolishA1.numberOfLessons}
      />
  );
};

export default Page;
