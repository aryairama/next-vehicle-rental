import style from './Card.module.css';
const CardTextOverlay = (props) => {
  return <div className={`${style['card-text-overlay']} ${props.styleCardText}`}>{props.children}</div>;
};

export default CardTextOverlay;
