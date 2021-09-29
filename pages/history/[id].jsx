/* eslint-disable react-hooks/exhaustive-deps */
import { PrivateRoute } from '../../components/hoc/PrivateRoute';
import { default as axios } from '../../configs/axiosConfig';
import { SelectOption } from '../../components/base';
import { useRouter } from 'next/router';
import style from '../../styles/payment.module.css';
import { useState, useEffect } from 'react';
import { updateReservation } from '../../redux/action/reservationAction';
import moment from 'moment';
import { useDispatch } from 'react-redux';

const DetailReservation = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [status, setStatus] = useState('approved');
  const [resevationData, setResevationData] = useState({});
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  useEffect(async () => {
    try {
      const { data } = await (await axios.get(`/reservations/${router.query.id}`)).data;
      if (Object.keys(data).length < 1) {
        router.push('/history');
      }
      setResevationData((old) => ({ ...old, ...data }));
    } catch (error) {
      router.push('/history');
    }
  }, [router.query.id]);
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
  return (
    <>
      <section className="mt-margin-navbar-1 mb-16 container">
        {/* <p>{JSON.stringify(props.resevationData)}</p> */}
        <div className="w-full flex flex-row mb-14 cursor-pointer" onClick={() => router.back()}>
          <img className="h-8 w-5" src="/assets/icon/black-arrow-back.png" alt="arrow-back" />
          <p className="text-2xl font-bold ml-8 font-Nunito">History</p>
        </div>
        <div className={style['template-payment']}>
          <div className={style['preview-img']}>
            {resevationData?.vehicle_image && (
              <img
                className="rounded-xl h-96 w-full object-contain"
                src={`${process.env.NEXT_PUBLIC_API_URL}/${resevationData?.vehicle_image}`}
                alt="preview-vehicle"
              />
            )}
          </div>
          <div className={style['description-payment']}>
            <p className={style['title-vehicle']}>{resevationData?.vehicles_name}</p>
            <p className={style['vehicle-location']}>{resevationData?.location_name}</p>
            <p className={style['text-prepayment']}>No prepayment</p>
            <p className={style['text-booking-code']}>{resevationData?.invoice_number}</p>
            <button className={`${style['btn-copy-booking-code']} btn-primary`}>Copy booking code</button>
          </div>
        </div>
        <div className={`${style['template-order-details']} mt-10 `}>
          <div className={style['detail-order-section-1']}>
            <p className={style.quantity}>Quantity : {resevationData?.quantity} Vehicle</p>
            <div className={style['order-details']}>
              <p>Order Details : </p>
              <ul>
                {vehicle_detail(resevationData?.quantity, resevationData?.vehicle_price, resevationData?.long_borrowed)}
              </ul>
              <p className={style['subtotal']}>Totals : {resevationData?.cost}</p>
            </div>
          </div>
          <div className={style['detail-order-section-2']}>
            <div className={style['reservation-date']}>
              <p className="mr-5">Reservation Date : </p>
              <p className={style['text-date']}>{moment(resevationData?.start_date).format('L')}</p>
            </div>
            <div className={style.identity}>
              <p>Identity : </p>
              <ul>
                <li>
                  {resevationData?.name} ({resevationData?.phone_number})
                </li>
                <li>{resevationData?.email}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-3 md:gap-10 w-full justify-center items-center font-bold font-Nunito text-lg">
          <div className="flex flex-row w-full md:w-1/2 items-center">
            <p className="w-1/4">Payment code : </p>
            <div className="w-3/4 border rounded-lg border-grey-1 p-4 flex flex-row">
              <p className="w-3/4">{resevationData?.invoice_number}</p>
              <button className="btn-secondary rounded-lg w-1/4">Copy</button>
            </div>
          </div>
          <div className="w-full md:w-1/3 border rounded-lg border-grey-1 p-4 text-center">
            Pay with {resevationData?.payment}
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-3 md:gap-10 w-full mt-10 justify-center">
          {props.user?.roles === 'user' && resevationData?.status === 'pending' && (
            <button
              onClick={() => dispatch(updateReservation('canceled', router.query.id, router))}
              className="btn-primary py-5 rounded-lg font-Nunito text-xl font-bold w-full md:w-1/2"
            >
              Cancel
            </button>
          )}
          {props.user?.roles === 'user' && resevationData?.status === 'approved' && (
            <button
              onClick={() => dispatch(updateReservation('returned', router.query.id, router))}
              className="btn-primary py-5 rounded-lg font-Nunito text-xl font-bold w-full md:w-1/2"
            >
              Return Vehicle
            </button>
          )}
          {props.user?.roles === 'admin' && (
            <>
              <SelectOption
                styleArrow="!top-8"
                name="status"
                styleContainer="!m-0 w-full md:w-2/5"
                styleInput="!text-black !text-xl !bg-primary !py-5 !text-center"
                styleOption="!text-black !bg-white"
                value={status}
                onChange={statusHandler}
                options={[
                  { label: 'Approved', value: 'approved' },
                  { label: 'Canceled', value: 'canceled' },
                  { label: 'Returned', value: 'returned' },
                  { label: 'Pending', value: 'pending' },
                ]}
              ></SelectOption>
              <button
                onClick={() => dispatch(updateReservation(status, router.query.id, router))}
                className="btn-secondary py-5 rounded-lg font-Nunito text-xl font-bold w-full md:w-2/5"
              >
                Update
              </button>
            </>
          )}
        </div>
      </section>
    </>
  );
};

// export async function getServerSideProps(context) {
//   try {
//     console.log(context.req.headers.cookie);
//     const { data: resevationData } = await (
//       await axios.get(`/reservations/${context.params.id}`, {
//         withCredentials: true,
//         headers: { Cookie: context.req.headers.cookie },
//       })
//     ).data;
//     return {
//       props: {
//         resevationData: resevationData || {},
//       },
//     };
//   } catch (error) {
//     console.log(error);
//     if (error?.response?.data?.statusCode === 404) {
//       return {
//         redirect: {
//           destination: '/history',
//           permanent: false,
//         },
//       };
//     }
//     return {
//       props: { resevationData: {} },
//     };
//   }
// }

export default PrivateRoute(DetailReservation, ['admin', 'user']);
