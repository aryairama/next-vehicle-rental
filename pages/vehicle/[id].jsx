import { Navbar, Footer } from '../../components/module';
import { InputCount } from '../../components/base';
import { useRouter } from 'next/router';
import style from '../../styles/vehicle.module.css';
import { useState } from 'react';
const VehicleDetail = () => {
  const router = useRouter();
  const [count, setCount] = useState(1);
  return (
    <>
      <Navbar auth={true} />
      <section className="mt-margin-navbar-1 mb-16 container">
        <div className="w-full flex flex-row mb-14 cursor-pointer" onClick={() => router.back()}>
          <img className="h-8 w-5" src="/assets/icon/black-arrow-back.png" alt="arrow-back" />
          <p className="text-2xl font-bold ml-8 font-Nunito">Detail</p>
        </div>
        <div className={style['template-description']}>
          <div className="preview-img">
            <img className="rounded-xl" src="/assets/img/bikes/5.jpg" alt="preview-vehicle" />
            <div className={style['vehicle-gallery']}>
              <img className="rounded-md w-40 h-20 mx-2" src="/assets/img/bikes/5.jpg" alt="preview-vehicle" />
              <img className="rounded-md w-40 h-20 mx-2" src="/assets/img/bikes/5.jpg" alt="preview-vehicle" />
              <img className="rounded-md w-40 h-20 mx-2" src="/assets/img/bikes/5.jpg" alt="preview-vehicle" />
              <img className="rounded-md w-40 h-20 mx-2" src="/assets/img/bikes/5.jpg" alt="preview-vehicle" />
            </div>
          </div>
          <div className="description-product">
            <p className="font-Playfair_Display text-4xl md:text-5xl font-bold break-all">Fixie - Gray Only</p>
            <p className="font-Playfair_Display text-2xl text-grey-1 mt-2">Yogyakarta</p>
            <p className="font-Nunito text-xl mt-6 font-bold text-green-1">Available</p>
            <p className="font-Nunito text-xl mt-2 text-red-700 font-light">No prepayment</p>
            <p className="text-grey-1 mt-3">Capacity : 1 person </p>
            <p className="text-grey-1">Type : Bike </p>
            <p className="text-grey-1">Reservation before 2 PM</p>
            <p className="font-Playfair_Display text-2xl md:text-3xl font-bold mt-6">Rp.78.000/day</p>
            <InputCount value={count} styleContainer="w-full sm:w-1/2" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-3 md:gap-10 w-full mt-10 justify-center">
          <button className="btn-secondary px-20 py-5 rounded-lg font-Nunito text-xl font-bold">Chat Admin</button>
          <button
            className="btn-primary px-20 py-5 rounded-lg font-Nunito text-xl font-bold"
            onClick={() => router.push('/reservation')}
          >
            Reservation
          </button>
          <button className="btn-secondary px-20 py-5 rounded-lg font-Nunito text-xl font-bold flex items-center justify-center">
            <img src="/assets/icon/love.png" className="h-8 mr-5" alt="icon-love" />
            <p>Like</p>
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default VehicleDetail;
