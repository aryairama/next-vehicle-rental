/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { getProfile } from '../redux/action/userAction';
import { useDispatch, useSelector } from 'react-redux';

const Wrapper = (props) => {
  const { auth } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(async () => {
    if (auth) {
      await dispatch(getProfile());
    }
  }, []);
  return <>{props.children}</>;
};

export default Wrapper;
