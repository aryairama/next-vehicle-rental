/* eslint-disable @next/next/no-img-element */
import { InputCount, SelectOption, InputAuth } from '../../components/base';
import { useRouter } from 'next/router';
import style from '../../styles/vehicle.module.css';
import { useState } from 'react';
import { PrivateRoute, authPrivateRoute } from '../../components/hoc/PrivateRoute';

const Reservation = () => {
  const router = useRouter();
  const [count, setCount] = useState(1);
  const longReservation = [
    { label: '1day', value: '1day' },
    { label: '2day', value: '2day' },
    { label: '3day', value: '3day' },
    { label: '4day', value: '4day' },
    { label: '5day', value: '5day' },
    { label: '6day', value: '6day' },
    { label: '7day', value: '7day' },
  ];
  return (
    <>
      <section className="mt-margin-navbar-1 mb-16 container">
        <div className="w-full flex flex-row mb-14 cursor-pointer" onClick={() => router.back()}>
          <img className="h-8 w-5" src="/assets/icon/black-arrow-back.png" alt="arrow-back" />
          <p className="text-2xl font-bold ml-8 font-Nunito">Reservation</p>
        </div>
        <div className={style['template-description']}>
          <div className="preview-img">
            <img className="rounded-xl h-96 w-full bg-contain" src="/assets/img/bikes/5.jpg" alt="preview-vehicle" />
          </div>
          <div className="description-product">
            <p className="font-Playfair_Display text-4xl md:text-5xl font-bold">Fixie - Gray Only lorem</p>
            <p className="font-Playfair_Display text-2xl text-grey-1 mt-2">Yogyakarta</p>
            <p className="font-Nunito text-xl mt-2 text-red-700 font-light">No prepayment</p>
            <InputCount value={count} styleContainer="w-full sm:w-1/2 !mt-5" />
            <p className="font-Nunito text-xl my-5 font-bold">Reservation Date :</p>
            <div className="flex flex-col md:flex-row gap-0 md:gap-6">
              <InputAuth
                type="date"
                min={`${new Date().toISOString().slice(0, 10)}`}
                styleContainer="w-full md:w-1/2"
                styleInput="!text-grey-1 !bg-gray-200"
                styleOption="!text-white"
                placeholder="Date"
              />
              <SelectOption
                styleContainer="w-full md:w-1/2"
                styleInput="!text-grey-1 !bg-gray-200 "
                styleOption="!text-white"
                options={longReservation}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-3 md:gap-10 w-full mt-10 justify-center">
          <button
            className="btn-primary px-20 py-5 rounded-lg font-Nunito text-xl font-bold"
            onClick={() => router.push('/payment')}
          >
            Pay now : Rp. 178.000
          </button>
        </div>
      </section>
    </>
  );
};

export const getServerSideProps = authPrivateRoute(['member'], (context, redux) => ({ props: {} }));
export default PrivateRoute(Reservation);
