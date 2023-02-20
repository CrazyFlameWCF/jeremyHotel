import { useState, useEffect } from 'react';
import moment from 'moment';
import axios from 'axios';

const Modal = ({selectedReservation, setIsModalOpen, callUseEffect, setCallUseEffect}) => {
  console.log(selectedReservation)

  const confirmReservationAPI = (e, id) => {
    // 1. define an object to submit to Backend = state = 'confirmed'

    let sendingData = {
      status: 'confirmed'
    };

    // 2. see if the reqeust has been made successfully
    // 3. call useEffect again
    // 4. close modal
    const requestToAPI = async (data) => {
      let reqeust = await axios.put(`${process.env.REACT_APP_SERVER_URL}/reservation/confirmReservation/${id}`, data)
      if(reqeust.data.success) {
        setCallUseEffect(!callUseEffect);
        setIsModalOpen(false)
      }
    }
    requestToAPI(sendingData)
    }

    const tempText = (string) => {
      return <p>this is {string} reservation</p>
    }
    
    
    return (
      <section className='absolute w-screen h-screen bg-gray-400 top-0 z-50 bg-opacity-70 flex flex-row justify-center items-center'>
      {selectedReservation &&
        <div className='flex flex-col w-1/2 p-16 bg-white justify-center items-start border-black border-4 rounded-md'>
          {tempText(selectedReservation.status)}
          <p className="font-bold pb-4 text-blue-700">Reservation Detail:</p>
          <p className="pb-2">Name : {selectedReservation.name}</p>
          <p className="pb-2">Phone : {selectedReservation.phone}</p>
          <p className="pb-2">Email : {selectedReservation.email}</p>
          <p className="pb-2">Check-in : {moment(selectedReservation.checkindate).format('LLL')}</p>
          <p className="pb-2">Check-out : {moment(selectedReservation.checkoutdate).format('LLL')}</p>
          <p className="pb-2">Room Type: {selectedReservation.roomtype}</p>
          <p className="pb-2">Adult: {selectedReservation.adult}</p>
          <p className="pb-4">Children: {selectedReservation.kid}</p>
          <div className="flex flex-row">
            <button className="flex w-24 h-6 bg-blue-700 font-bold text-white rounded-md hover:bg-blue-200 hover:text-blue-600 justify-center items-center"onClick={(e) => confirmReservationAPI(e, selectedReservation._id)}>Confirm</button>
            
            <button className="flex w-24 h-6 pl-2 bg-blue-700 font-bold text-white rounded-md hover:bg-blue-200 hover:text-blue-600 justify-center items-center"onClick={(e) => setIsModalOpen(false)}>Deny</button>
            
            <button className="flex w-24 h-6 bg-blue-700 font-bold text-white rounded-md hover:bg-blue-200 hover:text-blue-600 justify-center items-center"onClick={(e) => setIsModalOpen(false)}>back</button>
          </div>
          
        </div>}

      
    </section>
  );
}

export default Modal;