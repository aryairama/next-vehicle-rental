import style from '../../styles/auth.module.css';
import { InputAuth } from '../../components/base';
import { Footer } from '../../components/module';
const Login = () => {
  return (
    <>
      <div className={style['auth-wrapper']}>
        <div className={style['auth-content']}>
          <div className={style['container-content']}>
            <div className="w-full md:w-2/5 flex flex-col">
              <p className={style['text-banner']}>Le’ts Explore The World</p>
              <p className={style['question-account']}>Don’t have account?</p>
              <button className="btn-secondary p-4 rounded-lg text-2xl font-bold mt-10">Sign Up</button>
            </div>
            <div className="w-full md:w-1/5">
              <hr className="block md:hidden border-1 my-9" />
            </div>
            <div className="w-full md:w-2/5 flex flex-col flex-wrap">
              <InputAuth styleContainer="md:mt-9" placeholder="Email" />
              <InputAuth placeholder="Password" />
              <p className="-mt-3 text-white underline font-normal">Forgot password?</p>
              <button className="btn-primary p-4 rounded-lg text-2xl font-bold mt-10">Login</button>
              <button className="btn-white p-4 rounded-lg text-2xl font-bold mt-6 flex flex-row justify-center">
                <img src="/assets/icon/google.png" alt="icon-google" />
                <div className="ml-3">Login with Google</div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Login;
