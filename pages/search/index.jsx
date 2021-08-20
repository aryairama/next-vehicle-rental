/* eslint-disable react-hooks/exhaustive-deps */
import { Navbar, Footer, CardContainer, CardImgOverlay, CardTemplate, CardTextOverlay } from '../../components/module';
import { InputSearch, buttonItemRender, localePagination, SelectOption } from '../../components/base';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
const Search = (props) => {
  const router = useRouter();
  const [vehicles, setVehicles] = useState({ ...props.vehicles });
  const [page, setPage] = useState(1);
  const [order, setOrder] = useState(false);
  const onSearchHandler = (e) => {
    router.push({ pathname: '/search', query: { ...router.query, [e.target.name]: e.target.value } }, undefined, {
      shallow: true,
    });
  };
  useEffect(async () => {
    const vehicles = await (
      await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/vehicles?search=${router.query.search || ''}&type_name=${
          router.query.type || ''
        }&location_name=${router.query.location || ''}&page=${page}&limit=20&order=${order ? 'ASC' : 'DESC'}`
      )
    ).json();
    setVehicles({ ...vehicles });
  }, [router.query?.search, router.query?.type, router.query?.location, page, order]);
  return (
    <>
      <Navbar auth={true} />
      <section id="search" className="mt-margin-navbar-1 container">
        <InputSearch
          query={true}
          placeholder="Search vehicle (ex, cars, cars name)"
          name="search"
          value={router.query.search}
          onChange={onSearchHandler}
        />
        <div className="flex flex-row flex-wrap w-full">
          <SelectOption
            name="location"
            value={router.query.location}
            onChange={onSearchHandler}
            type="select"
            styleArrow="!top-5"
            styleContainer="!w-1/4 !my-2 mr-2"
            styleInput="!text-black-1 !text-base !bg-white !pl-7 !py-2 border border-gray-300"
            styleOption="!text-white !bg-white"
            options={[
              {
                value: '',
                label: 'Location',
              },
              ...props.locations,
            ]}
          />
          <SelectOption
            name="type"
            value={router.query.type}
            onChange={onSearchHandler}
            type="select"
            styleArrow="!top-5"
            styleContainer="!w-1/4 !my-2"
            styleInput="!text-black-1 !text-base !bg-white !pl-7 !py-2 border border-gray-300"
            styleOption="!text-white !bg-white"
            options={[
              {
                value: '',
                label: 'Type',
              },
              ...props.types,
            ]}
          />
        </div>
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
  let locations = await (
    await (await fetch(`${process.env.NEXT_PUBLIC_API_URL}/locations?pagination=off`)).json()
  ).data;
  locations = locations.map((location) => {
    return {
      label: location.location_name,
      value: location.location_name,
    };
  });
  let types = await (await (await fetch(`${process.env.NEXT_PUBLIC_API_URL}/types?pagination=off`)).json()).data;
  types = types.map((type) => {
    return {
      label: type.type_name,
      value: type.type_name,
    };
  });
  const vehicles = await (
    await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/vehicles?search=${query.search || ''}&type_name=${
        query.type || ''
      }&location_name=${query.location || ''}`
    )
  ).json();
  return {
    props: { vehicles, locations, types },
  };
}

export default Search;
