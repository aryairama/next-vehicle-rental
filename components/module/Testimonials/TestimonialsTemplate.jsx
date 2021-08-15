import style from './Testimonials.module.css';
import { TestimonialDescription, TestimonialsProfile } from '..';
const TestimonialsTemplate = (props) => {
  return (
    <div className={`${style['testimonials-template']} ${props.styleTestimonialsTemplate}`}>
      <TestimonialDescription />
      <TestimonialsProfile src="/assets/img/testimonials/1.png" />
    </div>
  );
};

export default TestimonialsTemplate;
