/* eslint-disable @next/next/no-img-element */
import { Navbar, Footer } from '../../components/module';
import { useRouter } from 'next/router';
import { useState } from 'react';
const AddVehicle = (props) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    
  })
  return (
    <>
      <Navbar auth={true} />
      <section id="add-vehicle" className="container mt-margin-navbar-1">
        <div className="w-full flex flex-row mb-14 cursor-pointer" onClick={() => router.back()}>
          <img className="h-8 w-5" src="/assets/icon/black-arrow-back.png" alt="arrow-back" />
          <p className="text-2xl font-bold ml-8 font-Nunito">Add new item</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-12">
          <div className="col-span-1"></div>
          <div className="col-span-1"></div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AddVehicle;
