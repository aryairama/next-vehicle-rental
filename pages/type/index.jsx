import { Navbar, Footer, CardTemplate, CardContainer, CardImgOverlay, CardTextOverlay } from '../../components/module';
import { InputSearch } from '../../components/base';
const index = () => {
  return (
    <>
      <Navbar auth={true} />
      <section id="search" className="mt-margin-navbar-1 container">
        <InputSearch placeholder="Search vehicle (ex, cars, cars name)" />
      </section>
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
      <section id="cars" className="container mt-16">
        <div className="flex flex-row flex-wrap w-full justify-between">
          <p className="font-Playfair_Display font-bold text-2xl md:text-4xl w-1/2">Cars</p>
          <div className="flex flex-row w-1/2 justify-end items-center gap-2">
            <p className="font-Nunito text-orange text-base">View all</p>
            <img className="h-3 w-2" src="/assets/icon/right-arrow-orange.png" alt="arrow" />
          </div>
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
        </CardTemplate>
      </section>
      <section id="motorbikes" className="container mt-16">
        <div className="flex flex-row flex-wrap w-full justify-between">
          <p className="font-Playfair_Display font-bold text-2xl md:text-4xl w-1/2">Motorbike</p>
          <div className="flex flex-row w-1/2 justify-end items-center gap-2">
            <p className="font-Nunito text-orange text-base">View all</p>
            <img className="h-3 w-2" src="/assets/icon/right-arrow-orange.png" alt="arrow" />
          </div>
        </div>
        <CardTemplate>
          <CardContainer>
            <CardImgOverlay src="/assets/img/motorbikes/1.png" />
            <CardTextOverlay>
              <p className="truncate font-semibold text-base">Vespa</p>
              <p className="truncate text-grey-1">Yogyakarta</p>
            </CardTextOverlay>
          </CardContainer>
          <CardContainer>
            <CardImgOverlay src="/assets/img/motorbikes/2.png" />
            <CardTextOverlay>
              <p className="truncate font-semibold text-base">Honda KLX</p>
              <p className="truncate text-grey-1">Kalimantan</p>
            </CardTextOverlay>
          </CardContainer>
          <CardContainer>
            <CardImgOverlay src="/assets/img/motorbikes/3.png" />
            <CardTextOverlay>
              <p className="truncate font-semibold text-base">Honda</p>
              <p className="truncate text-grey-1">Malang</p>
            </CardTextOverlay>
          </CardContainer>
          <CardContainer>
            <CardImgOverlay src="/assets/img/motorbikes/4.png" />
            <CardTextOverlay>
              <p className="truncate font-semibold text-base">Matic Bike</p>
              <p className="truncate text-grey-1">Yogyakarta</p>
            </CardTextOverlay>
          </CardContainer>
          <CardContainer>
            <CardImgOverlay src="/assets/img/motorbikes/5.jpg" />
            <CardTextOverlay>
              <p className="truncate font-semibold text-base">Kawasaki Ninja </p>
              <p className="truncate text-grey-1">Trenggalek</p>
            </CardTextOverlay>
          </CardContainer>
        </CardTemplate>
      </section>
      <section id="bikes" className="container my-16">
        <div className="flex flex-row flex-wrap w-full justify-between">
          <p className="font-Playfair_Display font-bold text-2xl md:text-4xl w-1/2">Bike</p>
          <div className="flex flex-row w-1/2 justify-end items-center gap-2">
            <p className="font-Nunito text-orange text-base">View all</p>
            <img className="h-3 w-2" src="/assets/icon/right-arrow-orange.png" alt="arrow" />
          </div>
        </div>
        <CardTemplate>
          <CardContainer>
            <CardImgOverlay src="/assets/img/bikes/1.png" />
            <CardTextOverlay>
              <p className="truncate font-semibold text-base">Fixie</p>
              <p className="truncate text-grey-1">Yogyakarta</p>
            </CardTextOverlay>
          </CardContainer>
          <CardContainer>
            <CardImgOverlay src="/assets/img/bikes/2.png" />
            <CardTextOverlay>
              <p className="truncate font-semibold text-base">Sport Bike</p>
              <p className="truncate text-grey-1">Kalimantan</p>
            </CardTextOverlay>
          </CardContainer>
          <CardContainer>
            <CardImgOverlay src="/assets/img/bikes/3.png" />
            <CardTextOverlay>
              <p className="truncate font-semibold text-base">Onthel </p>
              <p className="truncate text-grey-1">Malang</p>
            </CardTextOverlay>
          </CardContainer>
          <CardContainer>
            <CardImgOverlay src="/assets/img/bikes/4.png" />
            <CardTextOverlay>
              <p className="truncate font-semibold text-base">Fixie Gray </p>
              <p className="truncate text-grey-1">Yogyakarta</p>
            </CardTextOverlay>
          </CardContainer>
          <CardContainer>
            <CardImgOverlay src="/assets/img/bikes/5.jpg" />
            <CardTextOverlay>
              <p className="truncate font-semibold text-base">Fixie Black </p>
              <p className="truncate text-grey-1">Trenggalek</p>
            </CardTextOverlay>
          </CardContainer>
        </CardTemplate>
      </section>
      <Footer />
    </>
  );
};

export default index;
