/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { InputCount, SelectOption, InputAuth } from '../../components/base';
import { useRouter } from 'next/router';
import style from '../../styles/vehicle.module.css';
import { useState } from 'react';
import { PrivateRoute } from '../../components/hoc/PrivateRoute';
import { initializeStore } from '../../redux/store';
import { parseCookieRedux } from '../../components/hoc/AuthRoute';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import SimpleReactValidator from 'simple-react-validator';

const Reservation = (props) => {
  const validator = useRef(new SimpleReactValidator({ className: 'text-red-600 text-sm' }));
  const dispatch = useDispatch();
  const router = useRouter();
  const [reservation, setReservation] = useState({
    reservation_stock: props.reservation.reservation_stock,
    reservation_total_price: parseInt(props.reservation.price, 10) * props.reservation.stock * 1,
    reservation_start_date: props.reservation.reservation_start_date ? props.reservation.reservation_start_date : '',
    reservation_long_reservation: props.reservation.reservation_long_reservation
      ? props.reservation.reservation_long_reservation
      : '',
  });
  const longReservation = [
    { label: 'Duration', value: '' },
    { label: '1day', value: 1 },
    { label: '2day', value: 2 },
    { label: '3day', value: 3 },
    { label: '4day', value: 4 },
    { label: '5day', value: 5 },
    { label: '6day', value: 6 },
    { label: '7day', value: 7 },
  ];
  useEffect(() => {
    setReservation((oldValue) => {
      return {
        ...oldValue,
        reservation_total_price:
          parseInt(props.reservation.price, 10) *
          reservation.reservation_stock *
          (reservation.reservation_long_reservation ? parseInt(reservation.reservation_long_reservation, 10) : 1),
      };
    });
  }, [reservation.reservation_stock, reservation.reservation_long_reservation]);
  const reservationHandler = (e) => {
    setReservation((oldValue) => {
      return { ...oldValue, [e.target.name]: e.target.value };
    });
  };
  return (
    <>
      <section className="mt-margin-navbar-1 mb-16 container">
        <div className="w-full flex flex-row mb-14 cursor-pointer" onClick={() => router.back()}>
          <img className="h-8 w-5" src="/assets/icon/black-arrow-back.png" alt="arrow-back" />
          <p className="text-2xl font-bold ml-8 font-Nunito">Reservation</p>
        </div>
        <div className={style['template-description']}>
          <div className="preview-img">
            <img
              className="rounded-xl h-96 w-full object-contain"
              src={`${process.env.NEXT_PUBLIC_API_URL}/${props.reservation?.vehicle_images[0].vehicle_image}`}
              alt="preview-vehicle"
            />
          </div>
          <div className="description-product">
            <p className="font-Playfair_Display text-4xl md:text-5xl font-bold">{props.reservation?.vehicles_name}</p>
            <p className="font-Playfair_Display text-2xl text-grey-1 mt-2">{props.reservation?.location_name}</p>
            <p className="font-Nunito text-xl mt-2 text-red-700 font-light">No prepayment</p>
            <InputCount
              name="reservation_stock"
              max={props.reservation?.stock}
              onClick={setReservation}
              value={reservation.reservation_stock}
              styleContainer="w-full sm:w-1/2 !mt-5"
            />
            <p className="font-Nunito text-xl my-5 font-bold">Reservation Date :</p>
            <div className="flex flex-col md:flex-row gap-0 md:gap-6">
              <InputAuth
                name="reservation_start_date"
                type="date"
                min={`${new Date().toISOString().slice(0, 10)}`}
                styleContainer="w-full md:w-1/2"
                styleInput="!text-grey-1 !bg-gray-200"
                styleOption="!text-white"
                placeholder="Date"
                value={reservation.reservation_start_date}
                onChange={reservationHandler}
                onFocus={() => validator.current.showMessageFor('reservation_start_date')}
                onBlur={() => validator.current.showMessageFor('reservation_start_date')}
              >
                {validator.current.message('reservation_start_date', reservation.reservation_start_date, 'required')}
              </InputAuth>
              <SelectOption
                name="reservation_long_reservation"
                styleContainer="w-full md:w-1/2"
                styleInput="!text-grey-1 !bg-gray-200 "
                styleOption="!text-white"
                options={longReservation}
                value={reservation.reservation_long_reservation}
                onChange={reservationHandler}
                onBlur={() => validator.current.showMessageFor('reservation_long_reservation')}
              >
                {validator.current.message(
                  'reservation_long_reservation',
                  reservation.reservation_long_reservation,
                  'required'
                )}
              </SelectOption>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-3 md:gap-10 w-full mt-10 justify-center">
          <button
            disabled={validator.current.allValid() ? false : true}
            className="btn-primary px-20 py-5 rounded-lg font-Nunito text-xl font-bold disabled:bg-gray-200"
            onClick={() => {
              router.push('/payment');
              dispatch({ type: 'ADD_RESERVATION', payload: { ...props.reservation, ...reservation } });
            }}
          >
            Pay now : {reservation.reservation_total_price}
          </button>
        </div>
      </section>
    </>
  );
};

export default PrivateRoute(Reservation, ['user']);
export const getServerSideProps = async ({ req, res }) => {
  const redux = initializeStore(parseCookieRedux(req.cookies.vehicleRental));
  if (Object.keys(redux.getState().reservation.reservation).length < 1) {
    return {
      redirect: {
        destination: '/type',
        permanent: false,
      },
    };
  }
  return { props: { reservation: redux.getState().reservation.reservation } };
};
