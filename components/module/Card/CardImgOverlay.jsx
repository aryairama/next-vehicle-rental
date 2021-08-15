import style from './Card.module.css';
const CardImgOverlay = (props) => {
  return <img src={props.src} className={`${style['card-img-overlay']} ${props.styleImg}`} />;
};

export default CardImgOverlay;
