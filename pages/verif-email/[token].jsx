import style from '../../styles/auth.module.css';
import { Footer } from '../../components/module';
import { useRouter } from 'next/router';
import { checkAuth } from '../../components/hoc/AuthRoute';
import { default as axios } from '../../configs/axiosConfig';

const VerifEmail = (props) => {
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
              <p className={`${style['text-caption']} !text-3xl md:!text-5xl`}>Verification email registration.</p>
            </div>
            <div className={style['container-forgotpassword']}>
              <p className="font-Playfair_Display text-white !text-3xl md:!text-5xl text-center -mt-20 mb-10">
                {props.verifEmail ? 'Success' : 'Failed'}
              </p>
              <button
                className="btn-primary p-4 rounded-lg text-2xl font-bold"
                onClick={() => {
                  if (props.verifEmail) {
                    router.push('/auth/login');
                  } else {
                    router.push('/auth/register');
                  }
                }}
              >
                {props.verifEmail ? 'Login' : 'Register'}
              </button>
              <p className="font-Nunito text-xl text-white mt-10 text-center">
                Registration email verification doesnt take long. if its finished you can continue renting a vehicle
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export const getServerSideProps = checkAuth(async (context, redux) => {
  let verifEmail = false;
  const headers = {
    headers: {
      Cookie: `tokenEmail=${context.params.token};`,
    },
  };
  try {
    const checkToken = await axios.post('/users/tokenverifemail', {}, headers);
    if (checkToken.data.statusCode === 200) {
      await axios.post('/users/verifemail', {}, headers);
      verifEmail = true;
    }
  } catch (error) {
    return {
      redirect: {
        destination: '/auth/register',
        permanent: false,
      },
    };
  }
  return {
    props: { verifEmail },
  };
});
export default VerifEmail;
