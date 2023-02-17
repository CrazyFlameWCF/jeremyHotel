import { useState, useEffect } from 'react';

const Modal = ({selectedReservation, setIsModalOpen}) => {
  console.log(selectedReservation)


  return (
    <section className='absolute w-screen h-screen bg-gray-400 top-0 z-50 bg-opacity-70 flex flex-row justify-center items-center'>
      {selectedReservation &&
        <div className='flex flex-col w-1/2 h-1/2 bg-white justify-center items-center'>
          <p>Reservation Detail:</p>
          <p>Name : {selectedReservation.name}</p>
          <p>Phone : {selectedReservation.phone}</p>
          <p>Email : {selectedReservation.email}</p>
          <p>Check-in : {selectedReservation.checkindate}</p>
          <p>Check-out : {selectedReservation.checkoutdate}</p>
          <p>Room Type: {selectedReservation.roomtype}</p>
          <p>Adult: {selectedReservation.adult}</p>
          <p>Children: {selectedReservation.kid}</p>
          <div className="flex flex-row">
            <button className="flex w-24 h-6 bg-blue-700 font-bold text-white rounded-md hover:bg-blue-200 hover:text-blue-600 justify-center items-center"onClick={(e) => setIsModalOpen(false)}>Confirm</button>
            <button className="flex w-24 h-6 bg-blue-700 font-bold text-white rounded-md hover:bg-blue-200 hover:text-blue-600 justify-center items-center"onClick={(e) => setIsModalOpen(false)}>Deny</button>
            <button className="flex w-24 h-6 bg-blue-700 font-bold text-white rounded-md hover:bg-blue-200 hover:text-blue-600 justify-center items-center"onClick={(e) => setIsModalOpen(false)}>back</button>
          </div>
        </div>
      
      }
    </section>
  );
}
export default Modal;