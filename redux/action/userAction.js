import { default as axios } from '../../configs/axiosConfig';
import swal from 'sweetalert';

export const login = (formData, history) => async (dispatch) => {
  try {
    const { data } = await (await axios.post('/users/login', formData)).data;
    dispatch({ type: 'LOGIN', payload: data });
    swal('Success', 'Login successful', 'success');
    history.push('/');
  } catch (error) {
    swal('Failed', error?.response?.data?.message, 'error');
    console.log(error);
  }
};

export const logout = (history) => async (dispatch, getState) => {
  try {
    await axios.delete('/users/logout');
    dispatch({ type: 'LOGOUT', payload: {} });
    dispatch({ type: 'ADD_RESERVATION', payload: {} });
    history.push('/auth/login');
  } catch (error) {
    swal('Error', 'Logout failed', 'error');
  }
};
