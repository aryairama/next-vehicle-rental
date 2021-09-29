import style from '../../styles/auth.module.css';
import { InputAuth } from '../../components/base';
import { Footer } from '../../components/module';
import { useRouter } from 'next/router';
import { checkAuth } from '../../components/hoc/AuthRoute';
import SimpleReactValidator from 'simple-react-validator';
import { useRef, useState } from 'react';
import { register } from '../../redux/action/userAction';
import { useDispatch } from 'react-redux';

const SignUp = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const validator = useRef(new SimpleReactValidator({ className: 'text-white text-sm' }));
  const [regisUser, setRegisUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  const onRegisUserChange = (e) => {
    setRegisUser((oldValud) => {
      return { ...oldValud, [e.target.name]: e.target.value };
    });
  };
  return (
    <>
      <div className={style['auth-wrapper']}>
        <div className={style['auth-content']}>
          <div className={style['container-content']}>
            <div className="w-full md:w-2/5 flex flex-col">
              <p className={style['text-banner']}>Le’ts Explore The World</p>
              <p className={style['question-account']}>Do you have account ?</p>
              <button
                onClick={() => router.push('/auth/login')}
                className="btn-secondary p-4 rounded-lg text-2xl font-bold mt-10"
              >
                Login
              </button>
            </div>
            <div className="w-full md:w-1/5 block md:flex md:justify-center">
              <img src="/assets/icon/line.png" className="hidden md:block self-center" alt="line-saparator" />
              <hr className="block md:hidden border-1 my-9" />
            </div>
            <div className="w-full md:w-2/5 flex flex-col flex-wrap">
              <InputAuth
                value={regisUser.name}
                onChange={onRegisUserChange}
                name="name"
                onFocus={() => validator.current.showMessageFor('name')}
                styleContainer="md:mt-9"
                placeholder="Name"
              >
                {validator.current.message('name', regisUser.name, 'required|min:3|max:255')}
              </InputAuth>
              <InputAuth
                value={regisUser.email}
                onChange={onRegisUserChange}
                name="email"
                onFocus={() => validator.current.showMessageFor('email')}
                placeholder="Email"
              >
                {validator.current.message('email', regisUser.email, 'required|email')}
              </InputAuth>
              <InputAuth
                value={regisUser.password}
                onChange={onRegisUserChange}
                onFocus={() => validator.current.showMessageFor('password')}
                name="password"
                type="password"
                placeholder="Password"
              >
                {validator.current.message('password', regisUser.password, 'required|min:8|max:255')}
              </InputAuth>
              <button
                disabled={validator.current.allValid() ? false : true}
                onClick={() => dispatch(register(regisUser, router))}
                className="btn-primary p-4 rounded-lg text-2xl font-bold disabled:bg-secondary disabled:text-primary"
              >
                Sign Up
              </button>
              <button className="btn-white p-4 rounded-lg text-2xl font-bold mt-6 flex flex-row justify-center">
                <img src="/assets/icon/google.png" alt="icon-google" />
                <div className="ml-3">Sign Up with Google</div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export const getServerSideProps = checkAuth((context, redux) => ({ props: {} }));
export default SignUp;
