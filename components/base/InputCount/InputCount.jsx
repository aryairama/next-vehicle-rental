const InputCount = (props) => {
  return (
    <div className={`flex flex-row flex-wrap justify-between mt-16 ${props.styleContainer}`}>
      <button className="btn-primary p-5 rounded-lg">
        <img src="/assets/icon/black-plus.png" alt="icon-plus" />
      </button>
      <input
        readOnly
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
        className={`outline-none text-center text-4xl font-Nunito font-bold w-1/4 ${props.styleInput}`}
      />
      <button className=" bg-gray-200 p-5 rounded-lg shadow-lg">
        <img src="/assets/icon/black-min.png" alt="icon-min" />
      </button>
    </div>
  );
};

export default InputCount;
