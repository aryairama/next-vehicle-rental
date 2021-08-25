/* eslint-disable @next/next/no-img-element */
import { InputCount } from '../../components/base';
import { useRouter } from 'next/router';
import style from '../../styles/vehicle.module.css';
import { useState } from 'react';
import PublicRoute from '../../components/hoc/PublicRoute';
import { useDispatch } from 'react-redux';

const VehicleDetail = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [reservation, setReservation] = useState({
    stock: 1,
  });
  const [showImgGallery, setShowImgGallery] = useState(props.vehicle.vehicle_images[0].vehicle_image);
  return (
    <>
      <section className="mt-margin-navbar-1 mb-16 container">
        <div className="w-full flex flex-row mb-14 cursor-pointer" onClick={() => router.back()}>
          <img className="h-8 w-5" src="/assets/icon/black-arrow-back.png" alt="arrow-back" />
          <p className="text-2xl font-bold ml-8 font-Nunito">Detail</p>
        </div>
        <div className={style['template-description']}>
          <div className="preview-img">
            <img
              className="rounded-xl h-96 w-full object-contain"
              src={`${process.env.NEXT_PUBLIC_API_URL}/${showImgGallery}`}
              alt="preview-vehicle"
            />
            <div className={style['vehicle-gallery']}>
              {props?.vehicle?.vehicle_images?.map((previewImg, index) => (
                <img
                  key={index}
                  className="rounded-md w-40 h-20 mx-2 object-contain"
                  onClick={() => setShowImgGallery(previewImg.vehicle_image)}
                  src={`${process.env.NEXT_PUBLIC_API_URL}/${previewImg.vehicle_image}`}
                  alt="preview-vehicle"
                />
              ))}
            </div>
          </div>
          <div className="description-product">
            <p className="font-Playfair_Display text-4xl md:text-5xl font-bold break-all">
              {props?.vehicle?.vehicles_name}
            </p>
            <p className="font-Playfair_Display text-2xl text-grey-1 mt-2">{props?.vehicle?.location_name}</p>
            <p className="font-Nunito text-xl mt-6 font-bold text-green-1">{props?.vehicle?.status}</p>
            <p className="font-Nunito text-xl mt-2 text-red-700 font-light">No prepayment</p>
            <p className="text-grey-1 mt-3">{props?.vehicle?.description} </p>
            <p className="font-Playfair_Display text-2xl md:text-3xl font-bold mt-6">{`Rp.${props?.vehicle?.price}/day`}</p>
            <InputCount
              name="stock"
              max={props.vehicle.stock}
              onClick={setReservation}
              value={reservation.stock}
              styleContainer="w-full sm:w-1/2"
            />
          </div>
        </div>
        {props.user?.roles === 'admin' ? (
          <div className="flex flex-col md:flex-row gap-3 md:gap-10 w-full mt-10 justify-center">
            <button className="btn-secondary w-full md:w-1/3 py-5 rounded-lg font-Nunito text-xl font-bold">
              Add to home page
            </button>
            <button
              className="btn-primary w-full md:w-1/3 py-5 rounded-lg font-Nunito text-xl font-bold"
              onClick={() => router.push(`/vehicle/update/${router.query.id}`)}
            >
              Edit item
            </button>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row gap-3 md:gap-10 w-full mt-10 justify-center">
            <button className="btn-secondary px-20 py-5 rounded-lg font-Nunito text-xl font-bold">Chat Admin</button>
            <button
              className="btn-primary px-20 py-5 rounded-lg font-Nunito text-xl font-bold"
              onClick={() => {
                if (props.auth) {
                  dispatch({
                    type: 'ADD_RESERVATION',
                    payload: { ...props.vehicle, reservation_stock: reservation.stock },
                  });
                  router.push('/reservation');
                } else {
                  router.push('/auth/login');
                }
              }}
            >
              Reservation
            </button>
            <button className="btn-secondary px-20 py-5 rounded-lg font-Nunito text-xl font-bold flex items-center justify-center">
              <img src="/assets/icon/love.png" className="h-8 mr-5" alt="icon-love" />
              <p>Like</p>
            </button>
          </div>
        )}
      </section>
    </>
  );
};

export async function getServerSideProps(context) {
  const vehicle = await (
    await (await fetch(`${process.env.NEXT_PUBLIC_API_URL}/vehicles/${context.params.id}`)).json()
  )?.data;
  if (!vehicle) {
    return {
      notFound: true,
    };
  }
  return {
    props: { vehicle },
  };
}

export default PublicRoute(VehicleDetail);
