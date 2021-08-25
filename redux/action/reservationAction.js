import { default as axios } from '../../configs/axiosConfig';

export const addResrrvation = (data, history) => async (dispatch, getState) => {
  try {
    const {
      reservation: { reservation },
    } = getState();
    const reservationData = {
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
    history.push('/type');
  } catch (error) {
    console.log(error);
  }
};
