const InputAuth = (props) => {
  return (
    <div className={`mb-6 ${props.styleContainer}`}>
      <input
        onChange={props.onChange}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        id={props.id}
        type={props.type}
        name={props.name}
        value={props.value}
        className={`w-full bg-whitetransparant text-white px-10 py-4 rounded-lg text-2xl outline-none placeholder-white ${props.styleInput}`}
        placeholder={props.placeholder}
        min={props.min}
        max={props.max}
      />
      {props.children}
    </div>
  );
};

export default InputAuth;
