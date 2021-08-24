import { LayoutInput, InputCheck, Input } from '../../components/base';
import Image from 'next/image';
import { PrivateRoute } from '../../components/hoc/PrivateRoute';
import { useDispatch } from 'react-redux';
import { useState, useRef } from 'react';
import SimpleReactValidator from 'simple-react-validator';

const Profile = (props) => {
  const dispatch = useDispatch();
  const validator = useRef(new SimpleReactValidator({ className: 'text-red-600 text-sm' }));
  const initialState = {
    email: '',
    profile_img: '',
    name: '',
    gender: '',
    phone_number: '',
    address: '',
    date_of_birth: '',
  };
  const [updateProfile, setUpdateProfile] = useState(props.user ? { ...props.user, email: '' } : initialState);
  const onChangeUpdateProfile = (e) => {
    setUpdateProfile((oldValue) => {
      return { ...oldValue, [e.target.name]: e.target.value };
    });
  };
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
          <p className="font-bold font-Playfair_Display text-2xl mt-5 mb-1">{props.user?.name}</p>
          <p className="font-Nunito text-md text-grey-1">{props.user?.email}</p>
          <p className="font-Nunito text-md text-grey-1">{props.user?.phone_number}</p>
          <p className="font-Nunito text-md text-grey-1">
            Has been active since {new Date(props.user.created_at).getFullYear()}
          </p>
          <LayoutInput type="inline" styleContainer="mt-5">
            <InputCheck
              defaultChecked={updateProfile.gender ? updateProfile.gender : ''}
              inputCheckContainer="mr-20"
              id="male"
              type="radio"
              value="male"
              label="Male"
              name="gender"
              onChange={onChangeUpdateProfile}
              onBlur={() => validator.current.showMessageFor('gender')}
            />
            <InputCheck
              defaultChecked={updateProfile.gender ? updateProfile.gender : ''}
              id="female"
              type="radio"
              value="female"
              label="Female"
              name="gender"
              onChange={onChangeUpdateProfile}
              onBlur={() => validator.current.showMessageFor('gender')}
            />
          </LayoutInput>
          {validator.current.message('gender', updateProfile.gender, 'required|in:male,female')}
          <div className="flex flex-col md:flex-row self-start md:gap-20 w-full mt-5">
            <div className="w-full md:w-1/2">
              <p className="font-Nunito text-black-1 font-bold my-5">Contacts</p>
              <Input
                name="email"
                value={updateProfile.email}
                onChange={onChangeUpdateProfile}
                onFocus={() => validator.current.showMessageFor('email')}
                placeholder={props.user.email}
                label="Email adress :"
              >
                {validator.current.message('email', updateProfile.email, 'email')}
              </Input>
              <Input
                name="address"
                value={updateProfile.address ? updateProfile.address : ''}
                onChange={onChangeUpdateProfile}
                onFocus={() => validator.current.showMessageFor('address')}
                placeholder="Adress"
                label="Adress :"
              >
                {validator.current.message('address', updateProfile.address, 'required|min:10')}
              </Input>
              <Input
                name="phone_number"
                value={updateProfile.phone_number ? updateProfile.phone_number : ''}
                onChange={onChangeUpdateProfile}
                onFocus={() => validator.current.showMessageFor('phone_number')}
                placeholder="Mobile Number"
                label="Mobile Number :"
              >
                {validator.current.message(
                  'phone_number',
                  updateProfile.phone_number,
                  'required|min:10|max:15|numeric'
                )}
              </Input>
            </div>
            <div className="w-full md:w-1/2">
              <p className="font-Nunito text-black-1 font-bold my-5">Identity</p>
              <Input
                name="name"
                value={updateProfile.name ? updateProfile.name : ''}
                onChange={onChangeUpdateProfile}
                onFocus={() => validator.current.showMessageFor('name')}
                placeholder="Display name"
                label="Display name :"
              >
                {validator.current.message('name', updateProfile.name, 'required|min:3|max:255')}
              </Input>
              <Input
                name="date_of_birth"
                value={updateProfile.date_of_birth ? updateProfile.date_of_birth : ''}
                onChange={onChangeUpdateProfile}
                onBlur={() => validator.current.showMessageFor('date_of_birth')}
                type="date"
                label="DD/MM/YY"
              >
                {validator.current.message('date_of_birth', updateProfile.date_of_birth, 'required')}
              </Input>
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

export default PrivateRoute(Profile, ['user', 'admin']);
