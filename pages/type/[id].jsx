/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import { Navbar, Footer, CardTemplate, CardContainer, CardImgOverlay, CardTextOverlay } from '../../components/module';
import { InputSearch, buttonItemRender, localePagination } from '../../components/base';
import { useRouter } from 'next/router';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import { useState, useEffect } from 'react';
import PublicRoute from '../../components/hoc/PublicRoute';

const VehicleByType = (props) => {
  const router = useRouter();
  const { id } = router.query;
  const [page, setPage] = useState(1);
  const [vehicles, setVehicles] = useState(props.vehicles);
  const [order, setOrder] = useState(false);
  useEffect(async () => {
    const updateVehicles = await (
      await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/vehicles/type/${id}?page=${page}&limit=20&order=${order ? 'ASC' : 'DESC'}`
      )
    ).json();
    setVehicles(updateVehicles);
  }, [page, order]);
  return (
    <>
      <section id="cars" className="container mt-margin-navbar-1 mb-16">
        <div className="flex flex-col flex-wrap w-full">
          <p className="font-Playfair_Display font-bold text-2xl md:text-4xl flex">
            {props?.type?.type_name}{' '}
            <img
              onClick={() => setOrder(!order)}
              className="ml-4"
              src={order ? '/assets/icon/sort-up.svg' : '/assets/icon/sort-down.svg'}
              alt="sort"
            />
          </p>
          <p className="font-Nunito text-grey-1 text-center text-2xl">Click item to see details and reservation</p>
        </div>
        <CardTemplate>
          {vehicles?.data?.map((vehicle, index) => (
            <CardContainer
              styleCard="cursor-pointer"
              onClick={() => router.push(`/vehicle/${vehicle.vehicle_id}`)}
              key={index}
            >
              <CardImgOverlay src={`${process.env.NEXT_PUBLIC_API_URL}/${vehicle.vehicle_image}`} />
              <CardTextOverlay>
                <p className="truncate font-semibold text-base">{vehicle.vehicles_name}</p>
                <p className="truncate text-grey-1">{vehicle.location_name}</p>
              </CardTextOverlay>
            </CardContainer>
          ))}
        </CardTemplate>
        <div className="flex flex-row w-full mt-10">
          {vehicles?.pagination && (
            <Pagination
              current={page}
              total={vehicles.pagination.countData}
              pageSize={vehicles.pagination.limit ? vehicles.pagination.limit : 1}
              itemRender={buttonItemRender}
              onChange={(current, pageSize) => setPage(current)}
              locale={localePagination}
            />
          )}
        </div>
      </section>
    </>
  );
};

export async function getServerSideProps(context) {
  try {
    const type = await (
      await (await fetch(`${process.env.NEXT_PUBLIC_API_URL}/types/${context.params.id}`)).json()
    ).data;
    const vehicles = await (
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/vehicles/type/${context.params.id}?page=1&limit=20`)
    ).json();

    return {
      props: { vehicles, type },
    };
  } catch (error) {
    return {
      props: { vehicles: [], type: {} },
    };
  }
}

export default PublicRoute(VehicleByType);
