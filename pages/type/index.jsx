/* eslint-disable @next/next/no-img-element */
import { Navbar, Footer, CardTemplate, CardContainer, CardImgOverlay, CardTextOverlay } from '../../components/module';
import { InputSearch } from '../../components/base';
import { useRouter } from 'next/router';
import PublicRoute from '../../components/hoc/PublicRoute';
const Index = (props) => {
  const router = useRouter();
  return (
    <>
      <section id="search" className="mt-margin-navbar-1 container">
        <InputSearch placeholder="Search vehicle (ex, cars, cars name)" />
      </section>
      {props?.types?.map((type, index) => (
        <section key={index} id="populer-in-town" className="container mt-16">
          <div className="flex flex-row flex-wrap w-full justify-between">
            <p className="font-Playfair_Display font-bold text-2xl md:text-4xl w-1/2">{type.type_name}</p>
            <div
              className="flex flex-row w-1/2 justify-end items-center gap-2 cursor-pointer"
              onClick={() => router.push(`/type/${type.type_id}`)}
            >
              <p className="font-Nunito text-orange text-base">View all</p>
              <img className="h-3 w-2" src="/assets/icon/right-arrow-orange.png" alt="arrow" />
            </div>
          </div>
          <CardTemplate>
            {type.vehicles.map((vehicle, index) => (
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
        </section>
      ))}
      <section id="populer-in-town" className="container mt-16">
        <div className="flex flex-row flex-wrap w-full justify-between">
          <p className="font-Playfair_Display font-bold text-2xl md:text-4xl w-1/2">Popular in town</p>
          <div className="flex flex-row w-1/2 justify-end items-center gap-2">
            <p className="font-Nunito text-orange text-base">View all</p>
            <img className="h-3 w-2" src="/assets/icon/right-arrow-orange.png" alt="arrow" />
          </div>
        </div>
        <CardTemplate>
          <CardContainer>
            <CardImgOverlay src="/assets/img/populer/1.png" />
            <CardTextOverlay>
              <p className="truncate font-semibold text-base">Merapi</p>
              <p className="truncate text-grey-1">Yogyakarta</p>
            </CardTextOverlay>
          </CardContainer>
          <CardContainer>
            <CardImgOverlay src="/assets/img/populer/2.png" />
            <CardTextOverlay>
              <p className="truncate font-semibold text-base">Merapi</p>
              <p className="truncate text-grey-1">Yogyakarta</p>
            </CardTextOverlay>
          </CardContainer>
          <CardContainer>
            <CardImgOverlay src="/assets/img/populer/3.png" />
            <CardTextOverlay>
              <p className="truncate font-semibold text-base">Merapi</p>
              <p className="truncate text-grey-1">Yogyakarta</p>
            </CardTextOverlay>
          </CardContainer>
          <CardContainer>
            <CardImgOverlay src="/assets/img/populer/4.png" />
            <CardTextOverlay>
              <p className="truncate font-semibold text-base">Merapi</p>
              <p className="truncate text-grey-1">Yogyakarta</p>
            </CardTextOverlay>
          </CardContainer>
          <CardContainer>
            <CardImgOverlay src="/assets/img/populer/1.png" />
            <CardTextOverlay>
              <p className="truncate font-semibold text-base">Merapi</p>
              <p className="truncate text-grey-1">Yogyakarta</p>
            </CardTextOverlay>
          </CardContainer>
        </CardTemplate>
      </section>
    </>
  );
};

export async function getServerSideProps(context) {
  try {
    const types = await (await (await fetch(`${process.env.NEXT_PUBLIC_API_URL}/types`)).json()).data;
    await Promise.all(
      types.map(async (type, index) => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/vehicles/type/${type.type_id}`);
        const todo = await response.json();
        types[index].vehicles = todo.data;
      })
    );
    return {
      props: { types },
    };
  } catch (error) {
    return {
      props: { types: [] },
    };
  }
}

export default PublicRoute(Index);
