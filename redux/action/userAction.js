import { default as axios } from '../../configs/axiosConfig';
import swal from 'sweetalert';

export const login = (formData, history) => async (dispatch) => {
  try {
    dispatch({ type: 'SET_SHOW', payload: { show: true, bg: 'bg-blacktransparant' } });
    const { data } = await (await axios.post('/users/login', formData)).data;
    dispatch({ type: 'LOGIN', payload: data });
    swal('Success', 'Login successful', 'success');
    history.back();
  } catch (error) {
    swal('Failed', error?.response?.data?.message, 'error');
    console.log(error);
  }
  dispatch({ type: 'SET_SHOW', payload: { show: false, bg: 'bg-blacktransparant' } });
};

export const logout = (history) => async (dispatch, getState) => {
  try {
    dispatch({ type: 'SET_SHOW', payload: { show: true, bg: 'bg-blacktransparant' } });
    await axios.delete('/users/logout');
    dispatch({ type: 'LOGOUT', payload: {} });
    dispatch({ type: 'ADD_RESERVATION', payload: {} });
    history.push('/auth/login');
  } catch (error) {
    swal('Error', 'Logout failed', 'error');
  }
  dispatch({ type: 'SET_SHOW', payload: { show: false, bg: 'bg-blacktransparant' } });
};

export const register = (formData, history) => async (dispatch) => {
  try {
    dispatch({ type: 'SET_SHOW', payload: { show: true, bg: 'bg-blacktransparant' } });
    await axios.post('/users/register', formData);
    swal('Registration is successful', 'Please check your email for email verification!', 'success');
    history.push('/auth/login');
  } catch (error) {
    if (error.response?.data?.statusCode === 422) {
      swal('Failed', error?.response?.data?.error[0].msg, 'error');
    } else {
      swal('Error', 'Registration failed', 'error');
      console.log(error);
    }
  }
  dispatch({ type: 'SET_SHOW', payload: { show: false, bg: 'bg-blacktransparant' } });
};

export const getProfile = () => async (dispatch) => {
  try {
    dispatch({ type: 'SET_SHOW', payload: { show: true, bg: 'bg-white' } });
    const { data } = await (await axios.get('/users/profile')).data;
    dispatch({ type: 'PROFILE', payload: data });
  } catch (error) {
    dispatch({ type: 'LOGOUT', payload: {} });
    dispatch({ type: 'ADD_RESERVATION', payload: {} });
  }
  dispatch({ type: 'SET_SHOW', payload: { show: false, bg: 'bg-white' } });
};

export const updateProfile = (formData) => async (dispatch, getState) => {
  try {
    dispatch({ type: 'SET_SHOW', payload: { show: true, bg: 'bg-blacktransparant' } });
    const dataUpdate = new FormData();
    dataUpdate.append('email', formData.email);
    if (formData.profile_img) {
      dataUpdate.append('profile_img', formData.profile_img);
    }
    dataUpdate.append('name', formData.name);
    dataUpdate.append('gender', formData.gender);
    dataUpdate.append('phone_number', formData.phone_number);
    dataUpdate.append('address', formData.address);
    dataUpdate.append('date_of_birth', formData.date_of_birth);
    const { data } = await (await axios.post(`/users/${getState().user.user.user_id}`, dataUpdate)).data;
    dispatch({ type: 'PROFILE', payload: { ...getState().user.user, ...data } });
    swal('Success', 'Successfully changed profile', 'success');
  } catch (error) {
    if (error.response?.data?.statusCode === 422) {
      swal('Failed', error?.response?.data?.error[0].msg, 'error');
    } else {
      swal('Error', 'Update profile failed', 'error');
      console.log(error);
    }
  }
  dispatch({ type: 'SET_SHOW', payload: { show: false, bg: 'bg-blacktransparant' } });
};
