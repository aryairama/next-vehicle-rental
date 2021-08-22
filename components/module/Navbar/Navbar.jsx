import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import logo from '../../../public/assets/icon/logo.png';
import listIcon from '../../../public/assets/icon/list.svg';
import { useState } from 'react';
import { Dropdown, DropdownItem } from '../../base';
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/action/userAction';
const Navbar = (props) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const router = useRouter();
  const formatUrl = ([first, ...last]) => {
    return first.toUpperCase() + last.join('');
  };
  return (
    <>
      <Head>
        {router.route.split('/')[1] === '' && <title>Vehicle Rental | Home</title>}
        {router.route.split('/')[1] !== '' && <title>Vehicle Rental | {formatUrl(router.route.split('/')[1])}</title>}
        <link rel="icon" href="/assets/icon/logo.png" />
      </Head>
      <div className="navbar">
        <div className="navbar-container container">
          <div className="navbar-menu-left">
            <Image src={logo} width="41px" height="41px" alt="icon-logo" />
          </div>
          <div className="block md:hidden">
            <button onClick={() => setShow(!show)} className="border border-black rounded-md py-1 px-3">
              <Image src={listIcon} alt="icon-list" />
            </button>
          </div>
          <div className={`navbar-menu-right ${show ? 'show-navbar' : ''}`}>
            <ul className="navbar-menu">
              <li className={`li-menu ${router.pathname === '/' ? 'active' : ''}`}>
                <Link href="/">
                  <a className="li-menu-a">Home</a>
                </Link>
              </li>
              <li className={`li-menu ${router.pathname === '/type' ? 'active' : ''}`}>
                <Link href="/type">
                  <a className="li-menu-a">Vehicle Type</a>
                </Link>
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
              {props.auth === false && (
                <>
                  <li className="li-menu">
                    <button onClick={() => router.push('/auth/login')} className="btn btn-outline-primary">
                      Login
                    </button>
                  </li>
                  <li className="li-menu">
                    <button onClick={() => router.push('/auth/register')} className="btn btn-outline-primary">
                      Register
                    </button>
                  </li>
                </>
              )}
              {props.menu}
              {props.auth && (
                <>
                  <li className="li-menu">
                    <img className=" h-6 w-8" src="/assets/icon/mail.png" alt="" />
                  </li>
                  <li className="li-menu">
                    <Dropdown
                      type="img"
                      src={
                        props?.user?.profile_img
                          ? `${process.env.NEXT_PUBLIC_API_URL}/${props.user.profile_img}`
                          : '/assets/img/profile/1.png'
                      }
                      styleImg="rounded-full h-8 w-8"
                    >
                      <DropdownItem>
                        <Link href="/profile">
                          <a className="text-sm font-bold mr-6">Edit Profile</a>
                        </Link>
                        <img src="/assets/icon/arrow-right.png" className="h-3 w-2" alt="arrow-right" />
                      </DropdownItem>
                      <DropdownItem>
                        <p className="text-sm font-bold mr-6">Help</p>
                        <img src="/assets/icon/arrow-right.png" className="h-3 w-2" alt="arrow-right" />
                      </DropdownItem>
                      <DropdownItem onClick={() => dispatch(logout(router))}>
                        <p className="text-sm font-bold mr-6">Logout</p>
                        <img src="/assets/icon/arrow-right.png" className="h-3 w-2" alt="arrow-right" />
                      </DropdownItem>
                    </Dropdown>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
