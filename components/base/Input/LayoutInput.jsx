import style from './InputAll.module.css';
const LayoutInputRadio = (props) => {
  return (
    <div
      className={`${props.type === 'inline' ? style['inline-layout-radio'] : style['block-layout-radio']} ${
        props.styleContainer
      }`}
    >
      {props.children}
    </div>
  );
};

LayoutInputRadio.defaultProps = {
  type: 'inline',
};

export default LayoutInputRadio;
