import style from './Card.module.css';
const CardContainer = (props) => {
  return (
    <div onClick={props.onClick} className={`${style.card} ${props.styleCard}`}>
      {props.children}
    </div>
  );
};

export default CardContainer;
