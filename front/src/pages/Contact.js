import axios from 'axios';
import { useState } from 'react';
import { HotelData } from './Data/HotelDatas';
import { RoomData } from './Data/RoomData';
import { Link } from "react-router-dom";

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
    <div className="flex flex-col flex-wrap">
      <div className="flex flex-col flex-wrap bg-gray-300 w-full h-12 hover:bg-gray-700 hover:text-white" onClick={(e) => settingState(e, 'section1')}>
        <p className="font-extrabold text-xl">Location Selection</p>
      </div>
        {isSectionOpen === 'section1' ?
          <div className="flex flex-col flex-wrap w-full h-24 ">
            <p className='font-bold'>Choose Location</p>
            <select name='location' value={location} onChange={changeHandler}>
              <option className='border border-gray-500 w-4'>Click here</option>
                {HotelData.map((data) => {
                  return <option  value={data.text} key={data.id}>{data.text}</option>
                })}
            </select>
            <button className="w-12 h-6 bg-blue-700 font-bold text-white rounded-md hover:bg-blue-200 hover:text-blue-600" onClick={() => setIsSectionOpen('section2')}>Next</button>
            
          </div>
          :
          null
        }

      <div className="flex flex-col flex-wrap bg-gray-300 w-full h-12 hover:bg-gray-700 hover:text-white" onClick={(e) => settingState(e, 'section2')}>
        <p className="font-extrabold text-xl">Check in-out</p>
      </div>
        {isSectionOpen === 'section2' ?
          <div className="w-full h-36">
            <p>Check-in Date</p>
            <input type="date" id='checkindate' name='checkindate' value={checkindate} onChange={changeHandler}></input>
            <p>Check-out Date</p>
            <input type="date" id='checkoutdate' name='checkoutdate' value={checkoutdate} onChange={changeHandler}></input>
            <button className="w-12 h-6 bg-blue-700 font-bold text-white rounded-md hover:bg-blue-200 hover:text-blue-600" onClick={() => setIsSectionOpen('section3')}>Next</button>
          </div>
          :
          null
        }
      <div className="flex flex-col flex-wrap bg-gray-300 w-full h-12 hover:bg-gray-700 hover:text-white" onClick={(e) => settingState(e, 'section3')}>
        <p className="font-extrabold text-xl">Room Reservations Detail</p>
      </div>
        {isSectionOpen === 'section3'?
          <div className="w-full h-60">
            <p>Customer Detail</p>
            <p>Room Options:</p>
            <select name='roomtype' value={roomtype} onChange={changeHandler}>
              <option> Select Room Type </option>
                {RoomData.map((data) => {
                  return <option value={data.name} key={data.roomid}>{data.name}</option>
                })}
            </select>
            <p>Adult</p>
            <input type="text" id='adult' name='adult' value={adult} onChange={changeHandler}></input>
            <p>Kids</p>
            <input type="text" id='kid' name='kid' value={kid} onChange={changeHandler}></input>
            <button className="w-12 h-6 bg-blue-700 font-bold text-white rounded-md hover:bg-blue-200 hover:text-blue-600" onClick={() => setIsSectionOpen('section4')}>Next</button>
            
          </div>
          :
          null
        }
      <div className="flex flex-col flex-wrap bg-gray-300 w-full h-12 hover:bg-gray-700 hover:text-white" onClick={(e) => settingState(e, 'section4')}>
        <p className="font-extrabold text-xl">Personal Information</p>
      </div>
        {isSectionOpen === 'section4'?
          <div className="w-full h-48">
            <p>Personal Information Detail</p>
              <p>Name: </p>
              <input type="text" id="name" name='name' value={name} placeholder="First Name Last Name" onChange={changeHandler}></input>
              <p>Phone number: </p>
              <input type="text" id="phone" name='phone' value={phone} placeholder="xxx-xxx-xxxx" onChange={changeHandler}></input>
              <p>Email: </p>
              <input type="email" id="email" name='email' value={email} placeholder="xxxxx@xxxxx.xxx" onChange={changeHandler}></input>
              <button className="w-24 h-6 bg-blue-700 font-bold text-white rounded-md hover:bg-blue-200 hover:text-blue-600" onClick={() => setIsSectionOpen('sectionFinal')}>Confirm</button>
          </div>
          :
          null
        }
        <div className="flex flex-col flex-wrap bg-gray-300 w-full h-12 hover:bg-gray-700 hover:text-white" onClick={(e) => settingState(e, 'sectionFinal')}>
          <p className="font-extrabold text-xl">Confirmation</p>
        </div>
        {isSectionOpen === 'sectionFinal'?
          <div className="w-full h-36">
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