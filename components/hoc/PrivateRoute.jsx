/* eslint-disable react-hooks/exhaustive-deps */
import { Navbar, Footer } from '../module';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { InputSearch } from '../base';
import { useEffect } from 'react';

const PrivateRoute = (Component, roles = []) => {
  const Private = (props) => {
    const router = useRouter();
    const { user, auth } = useSelector((state) => state.user);
    useEffect(() => {
      let access = false;
      for (let i = 0; i < roles.length; i++) {
        if (user.roles === roles[i]) {
          access = true;
          break;
        } else if (user.roles !== roles[i]) {
          access = false;
        }
      }
      if (auth === false) {
        return router.push('/auth/login');
      } else if (!access) {
        return router.push('/');
      }
    }, []);
    return (
      <>
        {router.pathname === '/type/[id]' && auth ? (
          <Navbar
            auth={auth}
            user={user}
            menu={
              <li className="li-menu">
                <InputSearch />
              </li>
            }
          />
        ) : (
          <Navbar auth={auth} user={user} />
        )}
        <Component {...props} user={user} auth={auth} />
        <Footer />
      </>
    );
  };
  return Private;
};

export { PrivateRoute };
