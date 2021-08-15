import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import logo from '../../../public/assets/icon/logo.png';
import listIcon from '../../../public/assets/icon/list.svg';
import { useState } from 'react';
const Navbar = (props) => {
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
            <Image src={logo} width="41px" height="41px" />
          </div>
          <div className="block md:hidden">
            <button onClick={() => setShow(!show)} className="border border-black rounded-md py-1 px-3">
              <Image src={listIcon} />
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
              {router.pathname === '/' ? (
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
              ) : (
                ''
              )}
              {props.menu}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
