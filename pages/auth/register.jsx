import style from '../../styles/auth.module.css';
import { InputAuth } from '../../components/base';
import { Footer } from '../../components/module';
import { useRouter } from 'next/router';
const SignUp = () => {
  const router = useRouter();
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
              <InputAuth styleContainer="md:mt-9" placeholder="Name" />
              <InputAuth placeholder="Email" />
              <InputAuth placeholder="Password" />
              <button className="btn-primary p-4 rounded-lg text-2xl font-bold">Sign Up</button>
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

export default SignUp;
