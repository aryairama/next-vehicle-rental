/* eslint-disable react-hooks/exhaustive-deps */
import { Navbar, Footer, CardContainer, CardImgOverlay, CardTemplate, CardTextOverlay } from '../../components/module';
import { InputSearch, buttonItemRender, localePagination } from '../../components/base';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
const Search = (props) => {
  const router = useRouter();
  const [vehicles, setVehicles] = useState({ ...props.vehicles });
  const [page, setPage] = useState(1);
  const [order, setOrder] = useState(false);
  useEffect(async () => {
    const vehicles = await (
      await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/vehicles?search=${router.query.search || ''}&type_name=${
          router.query.type || ''
        }&location_name=${router.query.location || ''}&page=${page}&limit=20&order=${order ? 'ASC' : 'DESC'}`
      )
    ).json();
    setVehicles({ ...vehicles });
  }, [router.query?.search, page, order]);
  return (
    <>
      <Navbar auth={true} />
      <section id="search" className="mt-margin-navbar-1 container">
        <InputSearch placeholder="Search vehicle (ex, cars, cars name)" />
      </section>
      <section id="populer-in-town" className="container my-16">
        <div className="flex flex-row flex-wrap w-full justify-between">
          <p className="font-Playfair_Display font-bold text-2xl md:text-4xl flex w-full">
            Result Search
            <img
              onClick={() => setOrder(!order)}
              className="ml-4"
              src={order ? '/assets/icon/sort-up.svg' : '/assets/icon/sort-down.svg'}
              alt="sort"
            />
          </p>
        </div>
        <CardTemplate>
          {vehicles?.data?.map((vehicle, index) => (
            <CardContainer onClick={() => router.push(`/vehicle/${vehicle.vehicle_id}`)} key={index}>
              <CardImgOverlay src={`${process.env.NEXT_PUBLIC_API_URL}/${vehicle.vehicle_image}`} />
              <CardTextOverlay>
                <p className="truncate font-semibold text-base">{vehicle.vehicles_name}</p>
                <p className="truncate text-grey-1">{vehicle.location_name}</p>
              </CardTextOverlay>
            </CardContainer>
          ))}
        </CardTemplate>
        {vehicles.data.length === 0 && (
          <p className="text-black-1 font-Playfair_Display text-center font-bold text-lg">Vehicle not found</p>
        )}
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
      <Footer />
    </>
  );
};

export async function getServerSideProps({ query }) {
  const vehicles = await (
    await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/vehicles?search=${query.search || ''}&type_name=${
        query.type || ''
      }&location_name=${query.location || ''}`
    )
  ).json();
  return {
    props: { vehicles },
  };
}

export default Search;
