/* eslint-disable @next/next/no-img-element */
import { SelectOption } from '../../components/base';
import { useRouter } from 'next/router';
import style from '../../styles/payment.module.css';
import { PrivateRoute, authPrivateRoute } from '../../components/hoc/PrivateRoute';

const Payment = () => {
  const router = useRouter();
  const payment = [
    {
      label: 'Select payment methods',
      value: '',
    },
    { label: 'Cash', value: 'cash' },
    { label: 'Transfer', value: 'transfer' },
  ];
  return (
    <>
      <section className="mt-margin-navbar-1 mb-16 container">
        <div className="w-full flex flex-row mb-14 cursor-pointer" onClick={() => router.back()}>
          <img className="h-8 w-5" src="/assets/icon/black-arrow-back.png" alt="arrow-back" />
          <p className="text-2xl font-bold ml-8 font-Nunito">Approve Payment</p>
        </div>
        <div className={style['template-payment']}>
          <div className={style['preview-img']}>
            <img className="rounded-xl h-96 w-full bg-contain" src="/assets/img/bikes/5.jpg" alt="preview-vehicle" />
          </div>
          <div className={style['description-payment']}>
            <p className={style['title-vehicle']}>Fixie - Gray Only lorem</p>
            <p className={style['vehicle-location']}>Yogyakarta</p>
            <p className={style['text-prepayment']}>No prepayment</p>
            <p className={style['text-booking-code']}>#FG1209878YZS</p>
            <button className={`${style['btn-copy-booking-code']} btn-primary`}>Copy booking code</button>
          </div>
        </div>
        <div className={`${style['template-order-details']} mt-10 `}>
          <div className={style['detail-order-section-1']}>
            <p className={style.quantity}>Quantity : 2 bikes</p>
            <div className={style['order-details']}>
              <p>Order Details : </p>
              <ul>
                <li>1 bike : Rp. 78.000</li>
                <li>1 bike : Rp. 78.000</li>
              </ul>
              <p className={style['subtotal']}>Totals : 156000</p>
            </div>
          </div>
          <div className={style['detail-order-section-2']}>
            <div className={style['reservation-date']}>
              <p className="mr-5">Reservation Date : </p>
              <p className={style['text-date']}>Jan 18 - 20 2021</p>
            </div>
            <div className={style.identity}>
              <p>Identity : </p>
              <ul>
                <li>Samantha Doe (+6290987682)</li>
                <li>samanthadoe@mail.com</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-3 md:gap-10 w-full justify-center items-center">
          <div className="flex flex-row font-bold font-Nunito text-lg w-full md:w-1/2 items-center">
            <p className="w-1/4">Payment code : </p>
            <div className="w-3/4 border rounded-lg border-grey-1 p-4 flex flex-row">
              <p className="w-3/4">#FG1209878YZS</p>
              <button className="btn-secondary rounded-lg w-1/4">Copy</button>
            </div>
          </div>
          <SelectOption
            options={payment}
            styleContainer="w-full md:w-1/3 !mb-0"
            styleInput="!text-grey-1 border border-grey-1"
            styleOption="!text-black !bg-white"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-3 md:gap-10 w-full mt-10 justify-center">
          <button className="btn-primary py-5 rounded-lg font-Nunito text-xl font-bold w-full md:w-1/2">
            Finish payment
          </button>
        </div>
      </section>
    </>
  );
};

export const getServerSideProps = authPrivateRoute(['user'], (context, redux) => ({ props: {} }));
export default PrivateRoute(Payment);
