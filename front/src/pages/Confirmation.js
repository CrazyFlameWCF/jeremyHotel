import React from 'react'
import { Link } from "react-router-dom";
import { useLocation, useState } from "react-router-dom";
import axios from 'axios';

const Confirmation = (props) => {

  const location = useLocation();
  const submitForm = location.state;
  console.log(submitForm);

  
  
  const submitHandler = (e) => {
    // e.preventDefault();
    console.log(submitForm)
  
    // let sendingData = {
    //   name: submitForm.name,
    //   phone: submitForm.phone,
    //   email: submitForm.email,
    //   location: submitForm.location,
    //   checkindate: submitForm.checkindate,
    //   checkoutdate: submitForm.checkoutdate,
    //   roomtype: submitForm.roomtype,
    // }
  
    // send formSubmit to backEnd
    const requestToApi = async (data) => {
      let request = await axios.post(`${process.env.REACT_APP_SERVER_URL}/reservation/register`, data);
      console.log(request)
      // if success??? action
    }
  
    requestToApi(submitForm)
    console.log(requestToApi)
  }

  
  return (
    <>
    <div className="border-2 rounded-md w-2/3 border-gray-200 px-8 py-10 flex flex-col flex-wrap justify-center items-center">
    <div className="pb-3">
        <img src="https://www.hilton.com/modules/assets/svgs/logos/shop/WW.svg" className='p-2' />
      </div>
      
        <p className='font-bold'>Detail of Reservation</p>
        <p className='font-bold text-blue-700'>Location : </p>
        <p>{submitForm.location}</p>
        <p className='font-bold text-blue-700'>Name : </p>
        <p>{submitForm.name}</p>
        <p className='font-bold text-blue-700'>E-mail : </p>
        <p>{submitForm.email}</p>
        <p className='font-bold text-blue-700'>Check-In Date : </p>
        <p>{submitForm.checkindate}</p>
        <p className='font-bold text-blue-700'>Check-Out Date : </p>
        <p>{submitForm.checkoutdate}</p>
        <p className='font-bold text-blue-700'>Contact : </p>
        <p>{submitForm.phone}</p>
        <p className='font-bold text-blue-700'>Number of Adults : </p>
        <p>{submitForm.adult}</p>
        <p className='font-bold text-blue-700'>Number of Kids : </p>
        <p>{submitForm.kid}</p>
        <p className='font-bold text-blue-700'>Type of Rooms : </p>
        <p>{submitForm.roomtype}</p>
        
        <div className="flex flex-row pt-4">
          <div type='button' className="flex w-48 h-6 bg-blue-700 font-bold text-white rounded-md hover:bg-blue-200 hover:text-blue-600 justify-center items-center">
            <Link to="/contact" state={submitForm}>Back</Link>
          </div>
          <div className="flex w-48 h-6 bg-blue-700 font-bold text-white rounded-md hover:bg-blue-200 hover:text-blue-600 justify-center items-center">
            <Link to="/" onClick={() => submitHandler()}> Confirm Reservation </Link>
            
          </div>        
        </div>
      </div>
    </>
  );
}
export default Confirmation;