import { HotelData } from "./Data/HotelDatas";
import { useState } from 'react';

// const [ formData, setFormData ] = useState({
//   name: '',
//   phone: '',
//   email: '',

// })

const sectionShower = (page) => {
  if (page === 1) {
    <div className="bg-green-300 w-full h-24">
      <p>section 2</p>
    </div>
  }
  if (page === 2) {
    <div className="bg-blue-300 w-full h-24">
      <p>section 3</p>
    </div>
  }
  if (page === 3) {
    <div className="bg-red-300 w-full h-24">
      <p>section 4</p>
    </div>
  }
}


const ChooseHotel = (props) => {
  
  let page = 1

  return (
    <>
    <div>
      <p>Welcome!</p>
      <p>Please, provide us information about reservation</p>
    </div>

    <div>
      <form>
      
        <p>Name: </p>
        <input type="text" id="name" placeholder="First Name Last Name"></input>
        <p>Phone number: </p>
        <input type="text" id="phone" placeholder="xxx-xxx-xxxx"></input>
        <p>Email: </p>
        <input type="email" id="email" placeholder="xxxxx@xxxxx.xxx"></input>
        <p>Please, Choose a location that you wish to stay</p>
        <select>
          <option>Select Hotel</option>
            {HotelData.map((data) => {
              return <option value={data.text} key={data.id}>{data.text}</option>
            })}
        </select>
      
      </form>
      <button type='submit' className='border px-7 py-2 bg-blue-900 text-white font-bold rounded-md hover:bg-blue-400 hover:text-white'>Book Your Stay</button>

    </div>
    
    
    </>
  );
}
export default ChooseHotel;