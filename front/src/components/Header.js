import React from 'react';
import { MdHome, MdPersonPin, MdPersonAdd, MdEmail } from 'react-icons/md';


const Header = (props) => {
  return (
      <div className="flex flex-row border-b-gray-500 w-full">
      <nav>
        <div className="flex flex-row">
          <ul>
            <img src="https://www.hilton.com/modules/assets/svgs/logos/shop/WW.svg" className='p-2' />
              
            <li className="font-bold mr-2 px-2 py-1"><a href='/' className='inline-flex items-center'><MdHome />Home</a></li>
            <li className="font-bold mr-2 px-2 py-1"><a href='/location' className='inline-flex items-center'>Location</a></li>
            <li className="font-bold mr-2 px-2 py-1"><a href='/contact' className='inline-flex items-center'>Contact</a></li>
          </ul>
        </div>
        <div className="flex flex-row">
          <ul>
            <li className="font-bold mr-2 px-2 py-1"><a href='/register' className='inline-flex items-center'>Join</a></li>
            <li className="font-bold mr-2 px-2 py-1"><a href='/login' className='inline-flex items-center'>Sign In <MdPersonPin /></a></li>
            <li className="font-bold mr-2 px-2 py-1"><a href='/employee' className='inline-flex items-center'>Employee</a></li>
          </ul>
        </div>

      </nav>
      </div>
  );
}
export default Header;