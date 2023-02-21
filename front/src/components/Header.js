import React from 'react';
import { MdHome, MdPersonPin, MdPersonAdd, MdEmail } from 'react-icons/md';


const Header = (props) => {
  return (
    <div  className="flex flex-row border-b-2 border-b-gray-200 w-full">
      <nav className="flex flex-row p-2">
            
              <div>
                <a href='/'>
                <img src="https://www.hilton.com/modules/assets/svgs/logos/shop/WW.svg" />
                </a>
              </div>
              <div className="flex flex-row list-none pt-4">
                <li className="font-bold px-2 hover:text-gray-500"><a href='/location' className='inline-flex items-center'>Location</a></li>
                <li className="font-bold px-2 hover:text-gray-500"><a href='/contact' className='inline-flex items-center'>Reservation</a></li>
                <li className="font-bold px-2 hover:text-gray-500"><a href='/register'>Register</a></li>
              </div>
            
            <div className="flex justify-items-end pt-4">
              <ul>
                <li className="font-bold hover:text-gray-500"><a href='/login' className='inline-flex items-center'>Employee <MdPersonPin /></a></li>
                
              </ul>
            </div>
          

        
      </nav>

    </div>
  );
}
export default Header;