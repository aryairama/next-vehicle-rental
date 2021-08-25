/* eslint-disable @next/next/no-img-element */
import { SelectOption } from '../../components/base';
import { useRouter } from 'next/router';
import style from '../../styles/payment.module.css';
import { PrivateRoute } from '../../components/hoc/PrivateRoute';
import { initializeStore } from '../../redux/store';
import { parseCookieRedux } from '../../components/hoc/AuthRoute';
import { nanoid } from 'nanoid';
import { useState, useRef } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import { useDispatch } from 'react-redux';
import { addResrrvation } from '../../redux/action/reservationAction';

const Payment = (props) => {
  const dispatch = useDispatch();
  const validator = useRef(new SimpleReactValidator({ className: 'text-red-600 text-sm' }));
  const router = useRouter();
  const [paymentCode, setPaymentCode] = useState(`#${nanoid(12)}`);
  const [paymentType, setPaymentType] = useState('');
  const payment = [
    {
      label: 'Select payment methods',
      value: '',
    },
    { label: 'Cash', value: 'cash' },
    { label: 'Transfer', value: 'transfer' },
  ];
  const vehicle_detail = (quantity, price, long_borrowed) => {
    const detail = [];
    for (let i = 0; i < parseInt(quantity, 10); i++) {
      detail.push(
        <li key={i}>
          1 Vehicle : Rp.{price * parseInt(long_borrowed, 10)}/{long_borrowed}day
        </li>
      );
    }
    return detail;
  };
  const paymentTypeHandler = (e) => {
    setPaymentType(e.target.value);
  };
  return (
    <>
      <section className="mt-margin-navbar-1 mb-16 container">
        <div className="w-full flex flex-row mb-14 cursor-pointer" onClick={() => router.back()}>
          <img className="h-8 w-5" src="/assets/icon/black-arrow-back.png" alt="arrow-back" />
          <p className="text-2xl font-bold ml-8 font-Nunito">Approve Payment</p>
        </div>
        <div className={style['template-payment']}>
          <div className={style['preview-img']}>
            <img
              className="rounded-xl h-96 w-full object-contain"
              src={`${process.env.NEXT_PUBLIC_API_URL}/${props.reservation?.vehicle_images[0].vehicle_image}`}
              alt="preview-vehicle"
            />
          </div>
          <div className={style['description-payment']}>
            <p className={style['title-vehicle']}>{props.reservation?.vehicles_name}</p>
            <p className={style['vehicle-location']}>{props.reservation?.location_name}</p>
            <p className={style['text-prepayment']}>No prepayment</p>
            <p className={style['text-booking-code']}>{paymentCode}</p>
            <button className={`${style['btn-copy-booking-code']} btn-primary`}>Copy booking code</button>
          </div>
        </div>
        <div className={`${style['template-order-details']} mt-10 `}>
          <div className={style['detail-order-section-1']}>
            <p className={style.quantity}>Quantity : {props.reservation?.reservation_stock} Vehicle</p>
            <div className={style['order-details']}>
              <p>Order Details : </p>
              <ul>
                {vehicle_detail(
                  props.reservation?.reservation_stock,
                  props.reservation?.price,
                  props.reservation.reservation_long_reservation
                )}
              </ul>
              <p className={style['subtotal']}>Totals : {props.reservation?.reservation_total_price}</p>
            </div>
          </div>
          <div className={style['detail-order-section-2']}>
            <div className={style['reservation-date']}>
              <p className="mr-5">Reservation Date : </p>
              <p className={style['text-date']}>{props.reservation?.reservation_start_date}</p>
            </div>
            <div className={style.identity}>
              <p>Identity : </p>
              <ul>
                <li>
                  {props.user?.name} ({props.user?.phone_number})
                </li>
                <li>{props.user?.email}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-3 md:gap-10 w-full justify-center items-center">
          <div className="flex flex-row font-bold font-Nunito text-lg w-full md:w-1/2 items-center">
            <p className="w-1/4">Payment code : </p>
            <div className="w-3/4 border rounded-lg border-grey-1 p-4 flex flex-row">
              <p className="w-3/4">{paymentCode}</p>
              <button className="btn-secondary rounded-lg w-1/4">Copy</button>
            </div>
          </div>
          <SelectOption
            name="payment"
            options={payment}
            styleContainer="w-full md:w-1/3 !mb-0"
            styleInput="!text-grey-1 border border-grey-1"
            styleOption="!text-black !bg-white"
            onBlur={() => validator.current.showMessageFor('payment')}
            value={paymentType}
            onChange={paymentTypeHandler}
          >
            {validator.current.message('payment', paymentType, 'required')}
          </SelectOption>
        </div>
        <div className="flex flex-col md:flex-row gap-3 md:gap-10 w-full mt-10 justify-center">
          <button
            onClick={() =>
              dispatch(
                addResrrvation({ reservationPaymentCode: paymentCode, reservationPaymentType: paymentType }, router)
              )
            }
            disabled={validator.current.allValid() ? false : true}
            className="btn-primary py-5 rounded-lg font-Nunito text-xl font-bold w-full md:w-1/2 disabled:bg-gray-200"
          >
            Finish payment
          </button>
        </div>
      </section>
    </>
  );
};

export default PrivateRoute(Payment, ['user']);
export const getServerSideProps = async ({ req, res }) => {
  const redux = initializeStore(parseCookieRedux(req.cookies.vehicleRental));
  const { reservation } = redux.getState().reservation;
  const lenggthReservation = Object.keys(reservation).length;
  if (lenggthReservation < 1) {
    return {
      redirect: {
        destination: '/type',
        permanent: false,
      },
    };
  } else if (
    !reservation.reservation_long_reservation ||
    !reservation.reservation_start_date ||
    !reservation.reservation_total_price ||
    !reservation.reservation_stock
  ) {
    return {
      redirect: {
        destination: '/type',
        permanent: false,
      },
    };
  }
  return { props: { reservation: redux.getState().reservation.reservation } };
};
