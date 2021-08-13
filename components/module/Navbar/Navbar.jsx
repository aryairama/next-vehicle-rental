import Image from 'next/image';
import logo from '../../../assets/icon/logo.png';
import listIcon from '../../../assets/icon/list.svg'
import { useState } from 'react';
const Navbar = (props) => {
  const [show,setShow] = useState(false)
  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <div className="navbar-menu-left">
            <Image src={logo} width="41px" height="41px" />
          </div>
          <div className="block md:hidden">
            <button onClick={()=> setShow(!show)} className="border border-black rounded-md py-1 px-3">
              <Image src={listIcon} />
            </button>
          </div>
          <div className={`navbar-menu-right ${show ? 'show-navbar':''}`}>
            <ul className="navbar-menu">
              <li className="li-menu active">
                <a className="li-menu-a" href="">
                  Home
                </a>
              </li>
              <li className="li-menu">
                <a className="li-menu-a" href="">
                  Vehicle Type
                </a>
              </li>
              <li className="li-menu">
                <a className="li-menu-a" href="">
                  History
                </a>
              </li>
              <li className="li-menu">
                <a className="li-menu-a" href="">
                  About
                </a>
              </li>
              <li className="li-menu">
                <button className="btn btn-primary">Login</button>
              </li>
              <li className="li-menu">
                <button className="btn btn-primary">Register</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
