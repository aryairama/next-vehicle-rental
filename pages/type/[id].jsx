import { Navbar, Footer, CardTemplate, CardContainer, CardImgOverlay, CardTextOverlay } from '../../components/module';
import { InputSearch } from '../../components/base';
const VehicleByType = (props) => {
  return (
    <>
      <Navbar
        auth={true}
        menu={
          <li className="li-menu">
            <InputSearch />
          </li>
        }
      />
      <section id="cars" className="container mt-margin-navbar-1 mb-16">
        <div className="flex flex-col flex-wrap w-full">
          <p className="font-Playfair_Display font-bold text-2xl md:text-4xl">All Cars</p>
          <p className="font-Nunito text-grey-1 text-center text-2xl">Click item to see details and reservation</p>
        </div>
        <CardTemplate>
          <CardContainer>
            <CardImgOverlay src="/assets/img/cars/1.png" />
            <CardTextOverlay>
              <p className="truncate font-semibold text-base">Van</p>
              <p className="truncate text-grey-1">Yogyakarta</p>
            </CardTextOverlay>
          </CardContainer>
          <CardContainer>
            <CardImgOverlay src="/assets/img/cars/2.png" />
            <CardTextOverlay>
              <p className="truncate font-semibold text-base">Lamborghini</p>
              <p className="truncate text-grey-1">South Jakarta</p>
            </CardTextOverlay>
          </CardContainer>
          <CardContainer>
            <CardImgOverlay src="/assets/img/cars/3.png" />
            <CardTextOverlay>
              <p className="truncate font-semibold text-base">Jeep</p>
              <p className="truncate text-grey-1">Malang</p>
            </CardTextOverlay>
          </CardContainer>
          <CardContainer>
            <CardImgOverlay src="/assets/img/cars/4.png" />
            <CardTextOverlay>
              <p className="truncate font-semibold text-base">White Jeep</p>
              <p className="truncate text-grey-1">Kalimantan</p>
            </CardTextOverlay>
          </CardContainer>
          <CardContainer>
            <CardImgOverlay src="/assets/img/cars/5.jpg" />
            <CardTextOverlay>
              <p className="truncate font-semibold text-base">Bugatti Veyron </p>
              <p className="truncate text-grey-1">Trenggalek</p>
            </CardTextOverlay>
          </CardContainer>
          <CardContainer>
            <CardImgOverlay src="/assets/img/cars/5.jpg" />
            <CardTextOverlay>
              <p className="truncate font-semibold text-base">Van</p>
              <p className="truncate text-grey-1">Yogyakarta</p>
            </CardTextOverlay>
          </CardContainer>
          <CardContainer>
            <CardImgOverlay src="/assets/img/cars/4.png" />
            <CardTextOverlay>
              <p className="truncate font-semibold text-base">Lamborghini</p>
              <p className="truncate text-grey-1">South Jakarta</p>
            </CardTextOverlay>
          </CardContainer>
          <CardContainer>
            <CardImgOverlay src="/assets/img/cars/3.png" />
            <CardTextOverlay>
              <p className="truncate font-semibold text-base">Jeep</p>
              <p className="truncate text-grey-1">Malang</p>
            </CardTextOverlay>
          </CardContainer>
          <CardContainer>
            <CardImgOverlay src="/assets/img/cars/2.png" />
            <CardTextOverlay>
              <p className="truncate font-semibold text-base">White Jeep</p>
              <p className="truncate text-grey-1">Kalimantan</p>
            </CardTextOverlay>
          </CardContainer>
          <CardContainer>
            <CardImgOverlay src="/assets/img/cars/1.png" />
            <CardTextOverlay>
              <p className="truncate font-semibold text-base">Bugatti Veyron </p>
              <p className="truncate text-grey-1">Trenggalek</p>
            </CardTextOverlay>
          </CardContainer>
          <CardContainer>
            <CardImgOverlay src="/assets/img/cars/1.png" />
            <CardTextOverlay>
              <p className="truncate font-semibold text-base">Van</p>
              <p className="truncate text-grey-1">Yogyakarta</p>
            </CardTextOverlay>
          </CardContainer>
          <CardContainer>
            <CardImgOverlay src="/assets/img/cars/2.png" />
            <CardTextOverlay>
              <p className="truncate font-semibold text-base">Lamborghini</p>
              <p className="truncate text-grey-1">South Jakarta</p>
            </CardTextOverlay>
          </CardContainer>
          <CardContainer>
            <CardImgOverlay src="/assets/img/cars/3.png" />
            <CardTextOverlay>
              <p className="truncate font-semibold text-base">Jeep</p>
              <p className="truncate text-grey-1">Malang</p>
            </CardTextOverlay>
          </CardContainer>
          <CardContainer>
            <CardImgOverlay src="/assets/img/cars/4.png" />
            <CardTextOverlay>
              <p className="truncate font-semibold text-base">White Jeep</p>
              <p className="truncate text-grey-1">Kalimantan</p>
            </CardTextOverlay>
          </CardContainer>
          <CardContainer>
            <CardImgOverlay src="/assets/img/cars/5.jpg" />
            <CardTextOverlay>
              <p className="truncate font-semibold text-base">Bugatti Veyron </p>
              <p className="truncate text-grey-1">Trenggalek</p>
            </CardTextOverlay>
          </CardContainer>
        </CardTemplate>
        <p className="text-center text-grey-1 my-16 font-Nunito text-2xl">There is no vehicle left</p>
      </section>
      <Footer />
    </>
  );
};

export default VehicleByType;
