import { useSelector } from 'react-redux';

const Loader = (props) => {
  const { show, bg } = useSelector((state) => state.loader);
  return (
    <div
      style={{ zIndex: '100' }}
      className={`${
        props.show ? (props.show === true ? 'flex' : 'hidden') : show ? 'flex' : 'hidden'
      } fixed w-full h-full right-0 left-0 top-0 bottom-0 flex justify-center items-center ${props.bg ? props.bg : bg}`}
    >
      <img src="/assets/icon/loader.svg" alt="icon-loader" className="h-48 w-48" />
    </div>
  );
};

export default Loader;
