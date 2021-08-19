/* eslint-disable @next/next/no-img-element */
import { Navbar, Footer } from '../../components/module';
import { Input, InputAuth, SelectOption, InputCount } from '../../components/base';
import { useRouter } from 'next/router';
import { useState } from 'react';
import style from '../../styles/vehicle.module.css';
import {addVehicle } from '../../configs/ConsumeApi/Vehicle'
const AddVehicle = (props) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    location_id: '',
    type_id: '',
    vehicles_name: '',
    price: '',
    status: '',
    stock: 0,
    description: '',
    vehicle_image: '',
  });
  const handlerInputChange = (e) => {
    setFormData((oldValue) => {
      return { ...oldValue, [e.target.name]: e.target.value };
    });
  };
  return (
    <>
      <Navbar auth={true} />
      <section id="add-vehicle" className="container mt-margin-navbar-1">
        <div className="w-full flex flex-row mb-14 cursor-pointer" onClick={() => router.back()}>
          <img className="h-8 w-5" src="/assets/icon/black-arrow-back.png" alt="arrow-back" />
          <p className="text-2xl font-bold ml-8 font-Nunito">Add new item</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-12">
          <div className="col-span-1">
            <input
              type="file"
              className="hidden"
              multiple
              id="vehicle_image"
              onChange={(e) =>
                setFormData((oldValue) => {
                  return { ...oldValue, vehicle_image: [...e.target.files] };
                })
              }
            />
            {formData.vehicle_image && (
              <label htmlFor="vehicle_image">
                <img
                  className="rounded-xl h-96 w-full object-contain"
                  src={URL.createObjectURL(formData.vehicle_image[0])}
                  alt="preview-vehicle"
                />
              </label>
            )}
            {!formData.vehicle_image && (
              <label
                htmlFor="vehicle_image"
                className="flex flex-row justify-center items-center bg-gray-200 rounded-xl h-96 w-full"
              >
                <img src="/assets/icon/icon_camera.png" className="w-28 h-20" alt="icon-plus=img" />
              </label>
            )}
            <div className={style['vehicle-gallery']}>
              {Array.isArray(formData.vehicle_image) &&
                formData.vehicle_image.map((previewImg, index) => (
                  <>
                    {index > 0 && (
                      <label key={index} htmlFor="vehicle_image">
                        <img
                          className="rounded-md w-40 h-20 mx-2 object-contain"
                          src={URL.createObjectURL(previewImg)}
                          alt="preview-vehicle"
                        />
                      </label>
                    )}
                  </>
                ))}
              {!Array.isArray(formData.vehicle_image) && (
                <>
                  <label htmlFor="vehicle_image">
                    <img
                      className="rounded-md w-40 h-20 mx-2 p-3 object-contain bg-gray-200"
                      src={`/assets/icon/icon_camera.png`}
                      alt="preview-vehicle"
                    />
                  </label>
                  <label htmlFor="vehicle_image">
                    <img
                      className="rounded-md w-40 h-20 mx-2 p-3 object-contain bg-gray-200"
                      src={`/assets/icon/icon_camera.png`}
                      alt="preview-vehicle"
                    />
                  </label>
                </>
              )}
            </div>
          </div>
          <div className="col-span-1">
            <Input
              placeholder="Name (max up to 50 words)"
              name="vehicles_name"
              value={formData.vehicles_name}
              onChange={handlerInputChange}
            />
            <SelectOption
              defaultValue={formData.status}
              onChange={handlerInputChange}
              name="location_id"
              styleInput="!text-black !text-xl !pl-0 !border-black !rounded-none border-b"
              styleOption="!text-black !bg-white"
              options={[...props.locations, { label: 'Location', value: '' }]}
            />
            <Input
              placeholder="Description (max up to 150 words)"
              name="description"
              value={formData.description}
              onChange={handlerInputChange}
            />
            <label className="font-bold">Price :</label>
            <InputAuth
              type="number"
              name="price"
              onChange={handlerInputChange}
              styleInput="!text-black !text-xl !bg-gray-200 mt-3 !placeholder-gray-500"
              placeholder="Type the price"
            />
            <label className="font-bold">Status :</label>
            <SelectOption
              defaultValue={formData.status}
              onChange={handlerInputChange}
              name="status"
              styleContainer="mt-3"
              styleInput="!text-black !text-xl !bg-gray-200"
              styleOption="!text-black !bg-white"
              options={[
                { label: 'Select status booking', value: '' },
                { label: 'FullBooked', label: 'FullBooked' },
                { label: 'Available', label: 'Available' },
              ]}
            />
            <InputCount onClick={setFormData} value={formData.stock} styleContainer="!mt-0" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-3 md:gap-10 w-full mt-10 justify-center">
          <SelectOption
            defaultValue={formData.type_id}
            onChange={handlerInputChange}
            name="type_id"
            styleContainer="!m-0 w-full md:w-1/3"
            styleInput="!text-primary !text-xl !bg-secondary !py-5 !text-center"
            styleOption="!text-black !bg-white"
            options={[...props.types, { label: 'Add item to', value: '' }]}
          />
          <button onClick={()=> addVehicle(formData,router)} className="btn-primary py-5 rounded-lg font-Nunito text-xl font-bold w-full md:w-1/3">Save</button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export async function getServerSideProps(context) {
  let locations = await (
    await (await fetch(`${process.env.NEXT_PUBLIC_API_URL}/locations?pagination=off`)).json()
  ).data;
  locations = locations.map((location) => {
    return {
      label: location.location_name,
      value: location.location_id,
    };
  });
  let types = await (await (await fetch(`${process.env.NEXT_PUBLIC_API_URL}/types?pagination=off`)).json()).data;
  types = types.map((type) => {
    return {
      label: type.type_name,
      value: type.type_id,
    };
  });
  return {
    props: { locations, types },
  };
}

export default AddVehicle;
