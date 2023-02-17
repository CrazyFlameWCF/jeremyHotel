import axios from 'axios';
import { useState, useEffect } from 'react';
import Modal from './Modal';
import moment from 'moment';

const Reservation = (props) => {

  const [ allReservations, setAllReservations ] = useState([]);
  const [ newReservations, setNewReservations ] = useState([]);
  const [ isModalOpen, setIsModalOpen ] = useState(true);
  const [ selectedReservation, setSelectedReservation ] = useState();

  useEffect(() => {
    let isMounted = true;

    const reqeustToAPI = async () => {
      if (isMounted) {
        let request = await axios.get(`${process.env.REACT_APP_SERVER_URL}/reservation/viewall`)
        if (request.data.success) {
          setAllReservations(request.data.reservations)
          request.data.reservations.forEach(reservation => {
            if (reservation.status === 'new') {
              setNewReservations(reservation)
            }
          })

        }
      }
    }

    
    return () => {
      reqeustToAPI();
      isMounted = false;
    }

  },[])

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
      {allReservations.map((data, index) =>
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
        Current Reservations shown
      </div>
    <div className="pt-4 border-b-4 border-gray-500">
    <h3 className="font-bold text-lg">Finished Reservation</h3>
    </div>
    <div>
        Finished Reservations shown
    </div>
    { isModalOpen && <Modal selectedReservation={selectedReservation} setIsModalOpen={setIsModalOpen} /> }
    

    </>


  );
}
export default Reservation