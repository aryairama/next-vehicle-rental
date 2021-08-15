import style from './Input.module.css';
const InputSearch = (props) => {
  return (
    <div className={`relative ${props.styleContainer}`}>
      <input
        className={`${style['input-search']} ${props.styleInput}`}
        onChange={props.onChange}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        id={props.id}
        type={props.type}
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        min={props.min}
        max={props.max}
      />
      <img className="absolute top-2 right-4 h-6" src="/assets/icon/search.png" alt="icon-search" />
      {props.children}
    </div>
  );
};

export default InputSearch;
