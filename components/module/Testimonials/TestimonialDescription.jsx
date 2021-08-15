import style from './Testimonials.module.css';
const TestimonialDescription = (props) => {
  return (
    <>
      <div className={`${style['testimonial-description']} ${props.styleTestimonialDescription}`}>
        <ul>
          <li>
            <img src="/assets/icon/star.png" />
          </li>
          <li>
            <img src="/assets/icon/star.png" />
          </li>
          <li>
            <img src="/assets/icon/star.png" />
          </li>
          <li>
            <img src="/assets/icon/star.png" />
          </li>
          <li>
            <img src="/assets/icon/star.png" />
          </li>
        </ul>
        <p className="font-Mulish text-xl mt-5">
          ”It was the right decision to rent vehicle here, I spent less money and enjoy the trip. It was an amazing
          experience to have a ride for wildlife trip!”
        </p>
        <p className="font-Nunito font-bold text-base mt-5">Edward Newgate</p>
        <p className="font-Nunito text-sm text-grey-1 my-3">Founder Circle</p>
      </div>
    </>
  );
};

export default TestimonialDescription;
