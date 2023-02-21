import axios from 'axios';
import { useState } from 'react';
import { HotelData } from './Data/HotelDatas';
import { RoomData } from './Data/RoomData';
import { Link } from "react-router-dom";
import { BiCaretDown } from "react-icons/bi"

const Contact = (props) => {
  const [ isSectionOpen, setIsSectionOpen ] = useState('');

  const [ submitForm, setSubmitForm] = useState({
    name: '',
    email: '',
    checkindate: '',
    checkoutdate: '',
    phone: '',
    location: '',
    adult: '',
    kid: '',
    roomtype: '',
    status: 'new',
  });

  let { name, email, checkindate, checkoutdate, phone, location, adult, kid, roomtype, status } = submitForm;

  const settingState = (e, string) =>{
    setIsSectionOpen(string)
  }
  

  const buttonHandler = async (e, string) => {
      setIsSectionOpen(string)
  }
  
  const changeHandler = (e) => {
    setSubmitForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
    console.log(e)
  }
  const submitHandler = (e) => {
    // e.preventDefault();
    console.log(submitForm)

    // let sendingData = {
    //   name: submitForm.name,
    //   phone: submitForm.phone,
    //   email: submitForm.email,
    //   location: submitForm.location
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

    <div className="border-2 rounded-md w-full border-gray-200 px-8 py-10 flex flex-col items-center">
      <div className="pb-3">
        <img src="https://www.hilton.com/modules/assets/svgs/logos/shop/WW.svg" className='p-2' />
      </div>
    <p className="font-bold text-blue-800 text-xl pb-3">Welcome to Hilton Hotel!</p>
    <p className="font-bold">Please, provide us information below,</p>
    <p className="font-bold">click each section allows you to verify your information</p>
    </div>
    <div className="flex flex-col flex-wrap">
      <div className="flex flex-row bg-gray-300 w-full h-12 pl-4 hover:bg-gray-700 hover:text-white" onClick={(e) => settingState(e, 'section1')}>
        <p className="font-extrabold text-xl">Location Selection </p>
          <BiCaretDown className="w-4 h-4"/>
      </div>
        {isSectionOpen === 'section1' ?
          <div className="flex flex-col flex-wrap w-full h-24">
            <p className='font-bold pl-4'>Choose Location</p>
            <div className="pl-2">
            <select name='location' value={location} onChange={changeHandler} >
              <option className='border-gray-500 w-8 border-2 pl-2'>Click here</option>
                {HotelData.map((data) => {
                  return <option  value={data.text} key={data.id}>{data.text}</option>
                })}
            </select>
            </div>
            <div className="pl-2">
            <button className="w-16 h-6 bg-blue-700 font-bold text-white rounded-md hover:bg-blue-200 hover:text-blue-600" onClick={() => setIsSectionOpen('section2')}>Next</button>
            </div>
            
          </div>
          :
          null
        }

      <div className="flex flex-row flex-wrap bg-gray-300 w-full h-12 hover:bg-gray-700 hover:text-white" onClick={(e) => settingState(e, 'section2')}>
        <p className="font-extrabold text-xl pl-4">Check In-Out</p>
        <BiCaretDown className="w-4 h-4"/>
      </div>
        {isSectionOpen === 'section2' ?
          <div className="w-full h-36 pl-4 pt-4">
            <p className="font-bold">Check-in Date</p>
            <input type="date" id='checkindate' name='checkindate' value={checkindate} onChange={changeHandler}></input>
            <p className="font-bold">Check-out Date</p>
            <input type="date" id='checkoutdate' name='checkoutdate' value={checkoutdate} onChange={changeHandler}></input>
            <button className="w-12 h-6 bg-blue-700 font-bold text-white rounded-md hover:bg-blue-200 hover:text-blue-600" onClick={() => setIsSectionOpen('section3')}>Next</button>
          </div>
          :
          null
        }
      <div className="flex flex-row flex-wrap bg-gray-300 w-full h-12 hover:bg-gray-700 hover:text-white pl-4" onClick={(e) => settingState(e, 'section3')}>
        <p className="font-extrabold text-xl">Room Reservations Detail</p>
        <BiCaretDown className="w-4 h-4"/>
      </div>
        {isSectionOpen === 'section3'?
          <div className="w-full h-60 pl-4">
            <p className="font-bold pb-2 pt-3">Room Options:</p>
            <select name='roomtype' value={roomtype} onChange={changeHandler}>
              <option> Select Room Type </option>
                {RoomData.map((data) => {
                  return <option value={data.name} key={data.roomid}>{data.name}</option>
                })}
            </select>
            <p className="font-bold pb-2">Adult:</p>
            <input type="text" id='adult' name='adult' value={adult} onChange={changeHandler}></input>
            <p className="font-bold pb-2">Dependants:</p>
            <input type="text" id='kid' name='kid' value={kid} onChange={changeHandler}></input>
            <div className="pt-3">
              <button className="w-12 h-6 bg-blue-700 font-bold text-white rounded-md hover:bg-blue-200 hover:text-blue-600" onClick={() => setIsSectionOpen('section4')}>Next</button>
            </div>
            
          </div>
          :
          null
        }
      <div className="flex flex-row flex-wrap bg-gray-300 w-full h-12 hover:bg-gray-700 hover:text-white pl-4" onClick={(e) => settingState(e, 'section4')}>
        <p className="font-extrabold text-xl">Personal Information</p>
        <BiCaretDown className="w-4 h-4"/>
      </div>
        {isSectionOpen === 'section4'?
          <div className="w-full h-48 pl-4 pt-2">
              <p className="font-bold">Name: </p>
              <input type="text" id="name" name='name' value={name} placeholder="First Name Last Name" onChange={changeHandler}></input>
              <p className="font-bold">Phone number: </p>
              <input type="text" id="phone" name='phone' value={phone} placeholder="xxx-xxx-xxxx" onChange={changeHandler}></input>
              <p className="font-bold">Email: </p>
              <input type="email" id="email" name='email' value={email} placeholder="xxxxx@xxxxx.xxx" onChange={changeHandler}></input>
              <div className="pt-2 pb-8">
                <button className="w-24 h-6 bg-blue-700 font-bold text-white rounded-md hover:bg-blue-200 hover:text-blue-600" onClick={() => setIsSectionOpen('sectionFinal')}>Confirm</button>
              </div>
          </div>
          :
          null
        }
        <div className="flex flex-row flex-wrap bg-gray-300 w-full h-12 hover:bg-gray-700 hover:text-white" onClick={(e) => settingState(e, 'sectionFinal')}>
          <p className="font-extrabold text-xl pl-4">Confirmation</p>
          <BiCaretDown className="w-4 h-4"/>
        </div>
        
          {isSectionOpen === 'sectionFinal'?
            <div className="w-2/3 pl-4 pb-2 pt-4">
              <p className='font-bold pl-4 pb-2'>Detail of Reservation</p>
              <p className='font-bold pl-4 pb-2'>Location : {submitForm.location} </p>
              <p className='font-bold pl-4 pb-2'>Name : {submitForm.name} </p>
              <p className='font-bold pl-4 pb-2'>E-mail : {submitForm.email} </p>
              <p className='font-bold pl-4 pb-2'>Check-In Date : {submitForm.checkindate} </p>
              <p className='font-bold pl-4 pb-2'>Check-Out Date : {submitForm.checkoutdate} </p>
              <p className='font-bold pl-4 pb-2'>Contact : {submitForm.phone} </p>
              <p className='font-bold pl-4 pb-2'>Number of Adults : {submitForm.adult} </p>
              <p className='font-bold pl-4 pb-2'>Number of Kids : {submitForm.kid}</p>
              <p className='font-bold pl-4 pb-4'>Type of Rooms : {submitForm.roomtype}</p>
              
              <div className="flex justify-center items-center w-48 h-6 bg-blue-700 font-bold text-white rounded-md hover:bg-blue-200 hover:text-blue-600">
                  <Link to="/confirmation" state={submitForm}>
                    Confirm Reservation
                  </Link>
              </div>
              
            </div>
            :
            null
          }

        </div>

    </>
  );
}
export default Contact;