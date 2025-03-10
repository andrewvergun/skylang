import "./Reviews.css";
import facebook from "../../assets/facebook.png";
import google from "../../assets/google.png";

const Reviews = () => {
  const ratings = {
    facebook: "5",
    google: "5",
  };

  const reviews = [
    {
      name: "Olha",
      review:
        "Good lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      name: "Andrew",
      review: "Awesome",
    },
    {
      name: "Vika",
      review: "Amazing",
    },
    {
      name: "Katia",
      review: "Cool",
    },
    {
      name: "Olha",
      review:
        "Good lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <>
      <h2>Нас вибирають!</h2>
      <div className="reviews">
        <div className="social-reviews">
          <div className="review-facebook">
            <img src={facebook} alt="" />
            <p>Рейтинг - {ratings.facebook}/5</p>
          </div>
          <div className="review-google">
            <img src={google} alt="" />
            <p>Рейтинг - {ratings.google}/5</p>
          </div>
        </div>
        <div className="people-reviews">
          {reviews.map((review, index) => (
            <div className="review" key={index}>
              <p className="review-name">{review.name}</p>
              <p className="review-review">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Reviews;
