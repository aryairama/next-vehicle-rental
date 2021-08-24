import {
  CardContainer,
  CardImgOverlay,
  CardTextOverlay,
  CardTemplate,
  TestimonialsTemplate,
} from '../components/module';
import { useRouter } from 'next/router';
import { SelectOption } from '../components/base';
import style from '../styles/home.module.css';
import { useState } from 'react';
import PublicRoute from '../components/hoc/PublicRoute';
const Home = (props) => {
  const router = useRouter();
  const [search, setSearch] = useState({
    location: '',
    type: '',
  });
  const onSearchHandler = (e) => {
    setSearch((oldValue) => {
      return { ...oldValue, [e.target.name]: e.target.value };
    });
  };
  return (
    <>
      <div className={style['home-wrapper']}>
        <div className={style['home-content']}>
          <div className={style['container-content']}>
            <div className="w-full md:w-1/2 flex flex-col">
              <p className={style['text-banner']}>Explore and Travel</p>
              <p className={style['search-label']}>Vehicle Finder</p>
              <hr className="w-10 border mt-1" />
              <div className="w-full input-from flex-row flex gap-6 mt-10">
                <div className="w-full md:w-1/2 flex flex-col flex-wrap">
                  <SelectOption
                    name="location"
                    value={search.location}
                    onChange={onSearchHandler}
                    type="select"
                    styleInput="!text-black-1 !bg-white !opacity-40 !py-3"
                    styleOption="!text-white !bg-white !opacity-40"
                    options={[
                      {
                        value: '',
                        label: 'Location',
                      },
                      ...props.locations,
                    ]}
                  />
                </div>
                <div className="w-full md:w-1/2 flex flex-col flex-wrap">
                  <SelectOption
                    name="type"
                    value={search.type}
                    onChange={onSearchHandler}
                    type="select"
                    styleInput="!text-black-1 !bg-white !opacity-40 !py-3"
                    styleOption="!text-white !bg-white !opacity-40"
                    options={[
                      {
                        value: '',
                        label: 'Type',
                      },
                      ...props.types,
                    ]}
                  />
                </div>
              </div>
              <button
                onClick={() =>
                  router.push({ pathname: '/search', query: { location: search.location, type: search.type } })
                }
                className="btn-primary p-3 rounded-lg text-xl font-bold mt-3 w-full md:w-2/5"
              >
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
      <section id="populer-in-town" className="container mt-16">
        <div className="flex flex-row flex-wrap w-full justify-between">
          <p className="font-Playfair_Display font-bold text-2xl md:text-4xl w-1/2">Popular in town</p>
          <div
            className="flex flex-row w-1/2 justify-end items-center gap-2 cursor-pointer"
            onClick={() => router.push(`/type/${6}`)}
          >
            <p className="font-Nunito text-orange text-base">View all</p>
            <img className="h-3 w-2" src="/assets/icon/right-arrow-orange.png" alt="arrow" />
          </div>
        </div>
        <CardTemplate>
          {props.populerInTown.map((populer, index) => (
            <CardContainer
              styleCard="cursor-pointer"
              onClick={() => router.push(`/vehicle/${populer.vehicle_id}`)}
              key={index}
            >
              <CardImgOverlay src={`${process.env.NEXT_PUBLIC_API_URL}/${populer.vehicle_image}`} />
              <CardTextOverlay>
                <p className="truncate font-semibold text-base">{populer.vehicles_name}</p>
                <p className="truncate text-grey-1">{populer.location_name}</p>
              </CardTextOverlay>
            </CardContainer>
          ))}
        </CardTemplate>
        {props.populerInTown.length === 0 && (
          <p className="text-black-1 font-Playfair_Display text-center font-bold text-lg my-6">
            Populer vehicle not found
          </p>
        )}
        <div
          className={`flex flex-row flex-wrap w-full justify-center mt-12 ${
            props.user?.roles === 'admin' ? 'block' : 'hidden'
          }`}
        >
          <button
            onClick={() => router.push('/vehicle/add')}
            className="btn-secondary py-4 rounded-lg font-Nunito text-xl font-bold w-full md:w-1/2"
          >
            Add new item
          </button>
        </div>
      </section>
      <section id="testimonials" className="container mt-16">
        <div className="flex flex-row flex-wrap w-full justify-between">
          <p className="font-Playfair_Display font-bold text-2xl md:text-4xl">Testimonials</p>
        </div>
        <TestimonialsTemplate></TestimonialsTemplate>
      </section>
    </>
  );
};

export default PublicRoute(Home);

export async function getServerSideProps(context) {
  try {
    let { data: locations } = await (await fetch(`${process.env.NEXT_PUBLIC_API_URL}/locations?pagination=off`)).json();
    locations = locations.map((location) => {
      return {
        label: location.location_name,
        value: location.location_name,
      };
    });
    let { data: types } = await (await fetch(`${process.env.NEXT_PUBLIC_API_URL}/types?pagination=off`)).json();
    types = types.map((type) => {
      return {
        label: type.type_name,
        value: type.type_name,
      };
    });
    const { data: populerInTown } = await (await fetch(`${process.env.NEXT_PUBLIC_API_URL}/vehicles/type/${6}`)).json();
    return {
      props: { locations, types, populerInTown },
    };
  } catch (error) {
    console.log(error);
    return {
      props: { locations: [], types: [] },
    };
  }
}
