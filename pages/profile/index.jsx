import { LayoutInput, InputCheck, Input } from '../../components/base';
import Image from 'next/image';
import { PrivateRoute, authPrivateRoute } from '../../components/hoc/PrivateRoute';

const Profile = () => {
  return (
    <>
      <section id="profile" className="mt-margin-navbar-1 container mb-16">
        <p className="font-Nunito text-2xl font-bold">Profile</p>
        <div className="flex flex-col flex-wrap items-center mt-12">
          <Image
            src="/assets/img/profile/2.png"
            className="rounded-full"
            width="130px"
            height="130px"
            alt="img-profile"
          />
          <p className="font-bold font-Playfair_Display text-2xl mt-5 mb-1">Samantha Doe</p>
          <p className="font-Nunito text-md text-grey-1">samanthadoe@mail.com</p>
          <p className="font-Nunito text-md text-grey-1">+62833467823</p>
          <p className="font-Nunito text-md text-grey-1">Has been active since 2013</p>
          <LayoutInput type="inline" styleContainer="mt-5">
            <InputCheck inputCheckContainer="mr-20" id="male" type="radio" value="male" label="Male" name="gender" />
            <InputCheck id="female" type="radio" value="female" label="Female" name="gender" />
          </LayoutInput>
          <div className="flex flex-col md:flex-row self-start md:gap-20 w-full mt-5">
            <div className="w-full md:w-1/2">
              <p className="font-Nunito text-black-1 font-bold my-5">Contacts</p>
              <Input placeholder="Email" label="Email adress :" />
              <Input placeholder="Adress" label="Adress :" />
              <Input placeholder="Mobile Number" label="Mobile Number :" />
            </div>
            <div className="w-full md:w-1/2">
              <p className="font-Nunito text-black-1 font-bold my-5">Identity</p>
              <Input placeholder="Display name" label="Display name :" />
              <Input type="date" label="DD/MM/YY" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-3 md:gap-10 w-full mt-10 justify-center">
            <button className="btn-primary px-20 py-5 rounded-lg font-Nunito text-xl font-bold">Save Change</button>
            <button className="btn-secondary px-20 py-5 rounded-lg font-Nunito text-xl font-bold">Edit Password</button>
            <button className="btn-gray px-20 py-5 rounded-lg font-Nunito text-xl font-bold ">Cancel</button>
          </div>
        </div>
      </section>
    </>
  );
};

export const getServerSideProps = authPrivateRoute(['member','admin'], (context, redux) => ({ props: {} }));
export default PrivateRoute(Profile);
