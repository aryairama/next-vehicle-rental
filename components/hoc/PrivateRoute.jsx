import { Navbar, Footer } from '../module';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { InputSearch } from '../base';
import { initializeStore } from '../../redux/store';
import { parseCookieRedux } from './AuthRoute';

const PrivateRoute = (Component) => {
  const Private = (props) => {
    const router = useRouter();
    const { user, auth } = useSelector((state) => state.user);
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

function authPrivateRoute(roles, gssp) {
  return async (context) => {
    const {
      req: { cookies },
      res,
    } = context;
    const redux = initializeStore(parseCookieRedux(cookies.vehicleRental));
    const {
      user: { auth, user },
    } = redux.getState();
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
      return {
        redirect: {
          destination: '/auth/login',
          permanent: false,
        },
      };
    } else if (!access) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }
    return await gssp(context, redux);
  };
}
export { PrivateRoute, authPrivateRoute };
