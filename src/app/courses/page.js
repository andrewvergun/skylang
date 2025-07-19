import CourseItemBig from "@/components/CourseItemBig/CourseItemBig";
const KrakowBg = '/assets/Krakow_bg.jpg';
const Flag_of_Poland = '/svg/Flag_of_Poland.svg';

const Page = () => {
  return (
    <CourseItemBig
        primaryColor='#F06292'
        borderColor='rgba(240, 98, 146, 0.5)'
        icon={Flag_of_Poland}
        title='Польська мова - А1'
        description='Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet'
        courseDuration = '3 місяці'
        price='6000 грн'
        numberOfLessons='27'
    />

  )
}

export default Page