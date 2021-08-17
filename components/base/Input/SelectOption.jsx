import style from './InputAll.module.css';
const SelectOption = (props) => {
  return (
    <div className={`mb-6 relative ${props.styleContainer}`}>
      <select
        defaultValue={props.defaultValue}
        onChange={props.onChange}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        id={props.id}
        type={props.type}
        name={props.name}
        value={props.value}
        className={`${style.select} ${props.styleInput}`}
        placeholder={props.placeholder}
        min={props.min}
        max={props.max}
      >
        {props?.options?.map((option, index) => (
          <option key={index} className={`${style.option} ${props.styleOption}`} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <img className="absolute right-6 top-6 h-2" src="/assets/icon/arrow-down.png" alt="" />
      {props.children}
    </div>
  );
};

export default SelectOption;
