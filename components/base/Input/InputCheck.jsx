import style from './InputAll.module.css';
const InputCheck = (props) => {
  return (
    <div className={`${style['input-check-container']} ${props.inputCheckContainer}`}>
      {props.defaultChecked && (
        <input
          type={props.type}
          className={`${style['input-check']} ${props.styleInput}`}
          value={props.value}
          name={props.name}
          id={props.id}
          onBlur={props.onBlur}
          onChange={props.onClick}
          checked={props.defaultChecked === props.value ? true : false}
        />
      )}
      {!props.defaultChecked && (
        <input
          type={props.type}
          className={`${style['input-check']} ${props.styleInput}`}
          value={props.value}
          name={props.name}
          id={props.id}
          onBlur={props.onBlur}
          onChange={props.onClick}
        />
      )}
      <label htmlFor={props.id} className={`${style.label} ${props.styleLabel}`}>
        {props.label}
      </label>
    </div>
  );
};

export default InputCheck;
