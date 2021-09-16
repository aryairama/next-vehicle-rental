/* eslint-disable @next/next/no-img-element */
import { CardTemplate, CardContainer, CardImgOverlay, CardTextOverlay } from '../../components/module';
import { InputSearch } from '../../components/base';
import { useRouter } from 'next/router';
import PublicRoute from '../../components/hoc/PublicRoute';
const Index = (props) => {
  const router = useRouter();
  return (
    <>
      <section id="search" className="mt-margin-navbar-1 container">
        <InputSearch placeholder="Search vehicle (ex, cars, cars name)" />
        <div className="mt-16">
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
        </div>
      </section>
      {props?.types?.map((type, index) => {
        if (type.vehicles.length > 0) {
          return (
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
          );
        }
      })}
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
    const { data: populerInTown } = await (
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/vehicles?fieldOrder=count_rental&limit=5&order=desc`)
    ).json();
    return {
      props: { types, populerInTown },
    };
  } catch (error) {
    return {
      props: { types: [], populerInTown: [] },
    };
  }
}

export default PublicRoute(Index);
