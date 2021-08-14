import Style from './Footer.module.css';
const Footer = () => {
  return (
    <div className="bg-white-1">
      <div className={Style['footer-container']}>
        <div className={Style['footer-section-1']}>
          <img src="/assets/icon/logo.png" alt="logo" />
          <p className={Style['footer-about']}>
            Plan and book your perfect trip with expert advice, travel tips for vehicle information from us
          </p>
          <p className={Style['footer-copyright']}>©2020 Vehicle Rental Center. All rights reserved</p>
        </div>
        <div className={Style['footer-section-2']}>
          <div className="font-Mulish col-span-1">
            <p className="font-bold text-lg text-secondary">Destinations</p>
            <ul className="text-grey-1 mt-3">
              <li className="py-1">
                <a href="">Bali</a>
              </li>
              <li className="py-1">
                <a href="">Yogyakarta</a>
              </li>
              <li className="py-1">
                <a href="">Jakarta</a>
              </li>
              <li className="py-1">
                <a href="">Kalimantan</a>
              </li>
              <li className="py-1">
                <a href="">Malang</a>
              </li>
            </ul>
          </div>
          <div className="font-Mulish col-span-1">
            <p className="font-bold text-lg text-secondary">Vehicle</p>
            <ul className="text-grey-1 mt-3">
              <li className="py-1">
                <a href="">Bike</a>
              </li>
              <li className="py-1">
                <a href="">Cars</a>
              </li>
              <li className="py-1">
                <a href="">Motorbike</a>
              </li>
              <li className="py-1">
                <a href="">Return Times</a>
              </li>
              <li className="py-1">
                <a href="">FAQs</a>
              </li>
            </ul>
          </div>
          <div className="font-Mulish col-span-1">
            <p className="font-bold text-lg text-secondary">Interests</p>
            <ul className="text-grey-1 mt-3">
              <li className="py-1">
                <a href="">Adventure Travel</a>
              </li>
              <li className="py-1">
                <a href="">Art And Culture</a>
              </li>
              <li className="py-1">
                <a href="">Wildlife And Nature</a>
              </li>
              <li className="py-1">
                <a href="">Family Holidays</a>
              </li>
              <li className="py-1">
                <a href="">Culinary Trip</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={Style['footer-sosmed']}>
        <hr className=" border-gray-300 border m-5" />
        <ul className="w-full self-center text-center py-4">
          <li>
            <a href="">
              <img src="/assets/icon/twitter.png" alt="icon-sosmed" />
            </a>
          </li>
          <li>
            <a href="">
              <img src="/assets/icon/fb.png" alt="icon-sosmed" />
            </a>
          </li>
          <li>
            <a href="">
              <img src="/assets/icon/ig.png" alt="icon-sosmed" />
            </a>
          </li>
          <li>
            <a href="">
              <img src="/assets/icon/linked.png" alt="icon-sosmed" />
            </a>
          </li>
          <li>
            <a href="">
              <img src="/assets/icon/yt.png" alt="icon-sosmed" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
