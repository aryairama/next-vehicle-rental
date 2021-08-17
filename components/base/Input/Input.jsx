import style from './InputAll.module.css';
const Input = (props) => {
  return (
    <div className={`mb-6 ${props.styleContainer}`}>
      {props.label && (
        <label className={`text-grey-1 text-sm ${props.styleLabel}`} htmlFor={props.id}>
          {props.label}
        </label>
      )}
      <input
        onChange={props.onChange}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        id={props.id}
        type={props.type}
        name={props.name}
        value={props.value}
        className={`${style.input} ${props.styleInput}`}
        placeholder={props.placeholder}
        min={props.min}
        max={props.max}
      />
      {props.children}
    </div>
  );
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
