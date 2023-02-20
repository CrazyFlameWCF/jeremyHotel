import React from 'react';
import { MdHome, MdPersonPin, MdPersonAdd, MdEmail } from 'react-icons/md';


const Header = (props) => {
  return (
    <nav className="flex flex-row">
          <div className="flex flex-row items-cente border-b border-b-gray-200 w-full h-20 px-5 py-1">
          <div>
            <a href='/'>
            <img src="https://www.hilton.com/modules/assets/svgs/logos/shop/WW.svg" className='p-2' />
            </a>
            </div>
            <div className="flex flex-row list-none pt-4">
              <li className="font-bold px-2 py-1 hover:text-gray-500"><a href='/location' className='inline-flex items-center'>Location</a></li>
              <li className="font-bold px-2 py-1 hover:text-gray-500"><a href='/contact' className='inline-flex items-center'>Reservation</a></li>
              <li className="font-bold px-2 py-1 hover:text-gray-500"><a href='/reservation' className='inline-flex items-center'>Employee</a></li>
              
              {/* <li className="font-bold px-2 py-1 hover:text-gray-500"><a href='/choosehotel' className='inline-flex items-center'>Choose</a></li> */}
              {/* <li className="font-bold px-2 py-1 hover:text-gray-500"><a href='/demo' className='inline-flex items-center'>Demo</a></li> */}
              
            </div>
          </div>
        
          <ul className="flex flex-row pt-4 w-1/2">
            {/* <li className="font-bold px-2 py-1"><a href='/register' className='inline-flex items-center'>Join</a></li> */}
            <li className="font-bold px-2 py-1 flex flex-row items-cente border-b border-b-gray-200"><a href='/login' className='inline-flex items-center'>Sign In <MdPersonPin /></a></li>
            {/* <li className="font-bold px-2 py-1"><a href='/employee' className='inline-flex items-center'>Employee</a></li> */}
            
          </ul>
        

      
    </nav>
  );
}
export default Header;