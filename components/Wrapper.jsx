/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { getProfile } from '../redux/action/userAction';
import { useDispatch } from 'react-redux';

const Wrapper = (props) => {
  const dispatch = useDispatch();
  useEffect(async () => {
    await dispatch(getProfile());
  }, []);
  return <>{props.children}</>;
};

export default Wrapper;
