import swal from 'sweetalert';
import { default as axios } from '../axiosConfig';

export const addVehicle = (formData, history) => async (dispatch) => {
  dispatch({ type: 'SET_SHOW', payload: { show: true, bg: 'bg-blacktransparant' } });
  const dataAddVehicle = new FormData();
  dataAddVehicle.append('location_id', formData.location_id);
  dataAddVehicle.append('type_id', formData.type_id);
  dataAddVehicle.append('vehicles_name', formData.vehicles_name);
  dataAddVehicle.append('price', formData.price);
  dataAddVehicle.append('status', formData.status);
  dataAddVehicle.append('stock', formData.stock);
  dataAddVehicle.append('description', formData.description);
  for (let i = 0; i < formData.vehicle_image.length; i++) {
    dataAddVehicle.append('vehicle_image', formData.vehicle_image[i]);
  }
  try {
    await axios.post('/vehicles', dataAddVehicle);
    swal('Success', 'Successfully add vehicle', 'success');
    history.push('/type');
  } catch (error) {
    if (error?.response?.data?.statusCode === 422) {
      swal('error', error.response.data.error[0].msg, 'error');
    } else {
      console.log(error);
    }
  }
  dispatch({ type: 'SET_SHOW', payload: { show: false, bg: 'bg-blacktransparant' } });
};

export const deleteVehicle = (id, history) => async (dispatch) => {
  try {
    dispatch({ type: 'SET_SHOW', payload: { show: true, bg: 'bg-blacktransparant' } });
    await axios.delete(`/vehicles/${id}`);
    swal('Success', 'Successfully delete vehicle', 'success');
    history.push('/type');
  } catch (error) {
    console.log(error);
  }
  dispatch({ type: 'SET_SHOW', payload: { show: false, bg: 'bg-blacktransparant' } });
};

export const updateVehicle = (formData, history, id) => async (dispatch) => {
  dispatch({ type: 'SET_SHOW', payload: { show: true, bg: 'bg-blacktransparant' } });
  const dataAddVehicle = new FormData();
  dataAddVehicle.append('location_id', formData.location_id);
  dataAddVehicle.append('type_id', formData.type_id);
  dataAddVehicle.append('vehicles_name', formData.vehicles_name);
  dataAddVehicle.append('price', formData.price);
  dataAddVehicle.append('status', formData.status);
  dataAddVehicle.append('stock', formData.stock);
  dataAddVehicle.append('description', formData.description);
  for (let i = 0; i < formData.vehicle_image.length; i++) {
    dataAddVehicle.append('vehicle_image', formData.vehicle_image[i]);
  }
  for (let i = 0; i < formData.old_vehicle_image.length; i++) {
    dataAddVehicle.append('old_vehicle_image', formData.old_vehicle_image[i]);
  }
  try {
    await axios.put(`/vehicles/${id}`, dataAddVehicle);
    swal('Success', 'Successfully update vehicle', 'success');
    history.push('/type');
  } catch (error) {
    if (error?.response?.data?.statusCode === 422) {
      swal('error', error.response.data.error[0].msg, 'error');
    } else if (error?.response?.data?.statusCode === 404 || error?.response?.data?.statusCode === 403) {
      swal('error', error.response.data.message, 'error');
    } else {
      console.log(error);
    }
  }
  dispatch({ type: 'SET_SHOW', payload: { show: false, bg: 'bg-blacktransparant' } });
};
