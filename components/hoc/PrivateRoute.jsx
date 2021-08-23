import { Navbar, Footer } from '../module';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { InputSearch } from '../base';

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
export default PrivateRoute;
