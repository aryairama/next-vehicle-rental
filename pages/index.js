import {
  Navbar,
  Footer,
  CardContainer,
  CardImgOverlay,
  CardTextOverlay,
  CardTemplate,
  TestimonialsTemplate,
} from '../components/module';
import { SelectOption } from '../components/base';
import style from '../styles/home.module.css';
import authStyle from '../styles/auth.module.css';
export default function Home() {
  const location = [
    {
      value: '',
      label: 'Location',
    },
    {
      value: 'jakarta',
      label: 'Jakarta',
    },
    {
      value: 'malang',
      label: 'Malang',
    },
    {
      value: 'yogyakarta',
      label: 'Yogyakarta',
    },
  ];
  const type = [
    {
      value: '',
      label: 'Type',
    },
    {
      value: 'bike',
      label: 'Bike',
    },
    {
      value: 'cars',
      label: 'Cars',
    },
    {
      value: 'motorbike',
      label: 'Motorbike',
    },
  ];
  const payment = [
    {
      value: '',
      label: 'Payment',
    },
    {
      value: 'cash',
      label: 'Cash',
    },
    {
      value: 'transfer',
      label: 'Transfer',
    },
  ];
  return (
    <>
      <Navbar />
      <div className={style['home-wrapper']}>
        <div className={style['home-content']}>
          <div className={style['container-content']}>
            <div className="w-full md:w-1/2 flex flex-col">
              <p className={authStyle['text-banner']}>Explore and Travel</p>
              <p className={style['search-label']}>Vehicle Finder</p>
              <hr className="w-10 border mt-1" />
              <div className="w-full input-from flex-row flex gap-6 mt-10">
                <div className="w-full md:w-1/2 flex flex-col flex-wrap">
                  <SelectOption
                    type="select"
                    styleInput="!text-black-1 !bg-white !opacity-40 !py-3"
                    styleOption="!text-white !bg-white !opacity-40"
                    options={location}
                  />
                  <SelectOption
                    type="select"
                    styleInput="!text-black-1 !bg-white !opacity-40 !py-3"
                    styleOption="!text-white !bg-white !opacity-40"
                    options={payment}
                  />
                </div>
                <div className="w-full md:w-1/2 flex flex-col flex-wrap">
                  <SelectOption
                    type="select"
                    styleInput="!text-black-1 !bg-white !opacity-40 !py-3"
                    styleOption="!text-white !bg-white !opacity-40"
                    options={type}
                  />
                  <SelectOption
                    type="select"
                    styleInput="!text-black-1 !bg-white !opacity-40 !py-3"
                    styleOption="!text-white !bg-white !opacity-40"
                    options={[{ value: '', label: 'Date' }]}
                  />
                </div>
              </div>
              <button className="btn-primary p-3 rounded-lg text-xl font-bold mt-3 w-full md:w-2/5">Explore</button>
            </div>
          </div>
        </div>
      </div>
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
      <section id="testimonials" className="container mt-16">
        <div className="flex flex-row flex-wrap w-full justify-between">
          <p className="font-Playfair_Display font-bold text-2xl md:text-4xl">Testimonials</p>
        </div>
        <TestimonialsTemplate></TestimonialsTemplate>
      </section>
      <Footer />
    </>
  );
}
