import style from '../../styles/auth.module.css';
import { InputAuth } from '../../components/base';
import { Footer } from '../../components/module';
import { useRouter } from 'next/router';
const ForgotPassword = () => {
  const router = useRouter();
  return (
    <>
      <div className={style['auth-wrapper2']}>
        <div className={style['auth-content']}>
          <div className={style['container-content']}>
            <div className="w-full flex flex-col">
              <div className={style['navigation-back']} onClick={() => router.back()}>
                <img src="/assets/icon/arrow-back.png" alt="arrow-back" />
                <p className="text-2xl font-bold text-white ml-10">Back</p>
              </div>
              <p className={style['text-caption']}>Do’t worry, we got your back!</p>
            </div>
            <div className={style['container-forgotpassword']}>
              <InputAuth styleInput="text-center" placeholder="Enter your email adress" />
              <button className="btn-primary p-4 rounded-lg text-2xl font-bold ">Send Link</button>
              <p className="font-Nunito text-xl text-white mt-10 text-center">
                You will receive a link to reset your password. If you haven’t received any link, click Resend Link
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ForgotPassword;
