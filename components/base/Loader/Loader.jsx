import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import style from './Loader.module.css';

const Loader = (props) => {
  const { show, bg } = useSelector((state) => state.loader);
  const [bgLoader, setBgLoader] = useState('loader-white');
  useEffect(() => {
    if (props.bg && props.bg === 'white') {
      setBgLoader('loader-white');
    } else if (bg === 'blacktransparant') {
      setBgLoader('loader-black-transparant');
    }
  }, [props.bg, bg]);
  return (
    <div
      style={{ zIndex: '100' }}
      className={`${props.show ? (props.show === true ? 'flex' : 'hidden') : show ? 'flex' : 'hidden'}  ${
        style[bgLoader]
      }`}
    >
      <img src="/assets/icon/loader.svg" alt="icon-loader" className="h-48 w-48" />
    </div>
  );
};

export default Loader;
