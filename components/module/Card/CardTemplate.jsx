import style from './Card.module.css';
const CardTemplate = (props) => {
  return <div className={`${style['card-template']} ${props.styleCardTemplate}`}>{props.children}</div>;
};

export default CardTemplate;
