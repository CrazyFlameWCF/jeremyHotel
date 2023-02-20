import axios from 'axios';
import { useState, useEffect } from 'react';
import Modal from './Modal';
import moment from 'moment';

const Reservation = (props) => {

  const [ allReservations, setAllReservations ] = useState([]);
  const [ newReservations, setNewReservations ] = useState();
  const [ currentReservations, setCurrentReservations ] = useState();
  const [ isModalOpen, setIsModalOpen ] = useState(false);
  const [ selectedReservation, setSelectedReservation ] = useState();
  const [ callUseEffect, setCallUseEffect ] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const requestToAPI = async () => {
      if (isMounted) {
        let request = await axios.get(`${process.env.REACT_APP_SERVER_URL}/reservation/viewall`)
        if (request.data.success) {
          setAllReservations(request.data.reservations)
          let tempArryNew = []
          let tempArryCurrent = []
          request.data.reservations.forEach(reservation => {
            if (reservation.status === 'new') {
              tempArryNew.push(reservation)
            }
            if (reservation.status === 'confirmed') {
              tempArryCurrent.push(reservation)
            }
          })
          setNewReservations(tempArryNew)
          setCurrentReservations(tempArryCurrent)
        }
      }
    }

    
    return () => {
      requestToAPI();
      isMounted = false;
    }

  },[callUseEffect])

  // Handler
  const reservationiClickHandler = (e, id) => {
    e.preventDefault();
    let foundReservation = allReservations.find(reservation => reservation._id === id)
    console.log(foundReservation, id)
    setSelectedReservation(foundReservation)
    setIsModalOpen(true)
  }


  return (
    <>
    {/* each div supposed to have 2buttons and hover */}
    <div className="pt-4 border-b-4 border-gray-500">
      <h3 className="font-bold text-lg">New Reservation</h3>
    </div>
      <div className="grid grid-cols-3 p-8">
      {newReservations && newReservations.map((data, index) => 
        <div 
          className="flex flex-col border-4 p-4 m-2 border-blue-400 rounded-md bg-blue-200 hover:bg-blue-500 gap-2" 
          key={index}
          onClick={(e) => reservationiClickHandler(e, data._id)}
        >
          <p className="font-bold">{data.name}</p>
          <p className="text-red-700">{data.location}</p>
          <p className='text-xs'>{moment(data.checkindate).format('LLL')}</p>
        </div>)}
        
      </div>
    <div className="pt-4 border-b-4 border-gray-500">
      <h3 className="font-bold text-lg">Current Reservation</h3>
    </div>
    <div>
      <div className="grid grid-cols-3 p-8">
        {!!currentReservations && currentReservations.map((data, index) => 
          <div 
            className="flex flex-col border-4 p-4 m-2 border-blue-400 rounded-md bg-blue-200 hover:bg-blue-500 gap-2" 
            key={index}
            onClick={(e) => reservationiClickHandler(e, data._id)}
          >
            <p className="font-bold">{data.name}</p>
            <p className="text-red-700">{data.location}</p>
            <p className='text-xs'>{moment(data.checkindate).format('LLL')}</p>
          </div>)
        }
      </div>
    </div>
    <div className="pt-4 border-b-4 border-gray-500">
    <h3 className="font-bold text-lg">Finished Reservation</h3>
    </div>
    <div>
        Finished Reservations shown
    </div>
    { isModalOpen && <Modal selectedReservation={selectedReservation} setIsModalOpen={setIsModalOpen} callUseEffect={callUseEffect} setCallUseEffect={setCallUseEffect} /> }
    

    </>


  );
}
export default Reservation