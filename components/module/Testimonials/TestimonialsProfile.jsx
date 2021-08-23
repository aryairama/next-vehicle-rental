import style from './Testimonials.module.css';
const TestimonialsProfile = (props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 grid-flow-row">
      <div className={style['card-testimonials']}>
        <img src={props.src} className={`${style['card-testimonials-img']}`} alt="testimonials-img" />
        <div className={style['card-testimonials-overlay']}>
          <img src="/assets/icon/previous.png" className="px-4 h-8" alt="icon-prev" />
          <img src="/assets/icon/next.png" className="px-2 h-8" alt="icon-next" />
        </div>
        <div className={style['card-testimonials-icon-plus']}>
          <img src="/assets/icon/plus.png" alt="icon-plus" />
        </div>
        <div className={style['card-testimonials-icon-circle-loading']}>
          <img src="/assets/icon/icon-circle-loading.png" alt="icon-plus" />
        </div>
      </div>
    </div>
  );
};

export default TestimonialsProfile;
