import { default as axios } from '../../configs/axiosConfig';
import swal from 'sweetalert';

export const addResrrvation = (data, history) => async (dispatch, getState) => {
  try {
    const {
      reservation: { reservation },
    } = getState();
    const reservationData = {
      invoice_number: data.reservationPaymentCode,
      vehicle_id: reservation.vehicle_id,
      cost: reservation.reservation_total_price,
      start_date: reservation.reservation_start_date,
      long_borrowed: parseInt(reservation.reservation_long_reservation, 10),
      status: 'pending',
      payment: data.reservationPaymentType,
      quantity: reservation.reservation_stock,
    };
    await axios.post('/reservations', reservationData);
    dispatch({ type: 'CLEAR_RESERVATION', payload: {} });
    swal('Success', 'successfully added reservation data', 'success');
    history.push('/type');
  } catch (error) {
    swal('Error', 'Failed added reservation data', 'error');
    console.log(error);
  }
};

export const updateReservation = async (status, id, history) => {
  try {
    await axios.patch(`/reservations/${id}`, {
      status,
    });
    history.push('/history');
    swal('Success', 'successfully update reservation data', 'success');
  } catch (error) {
    swal('Error', 'Failed update reservation data', 'error');
    console.log(error);
  }
};
