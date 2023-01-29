import { MdHome, MdLogin, MdPersonAdd, MdEmail } from 'react-icons/md';

const Header = (props) => {
  return (
    <nav>
      <ul className="flex flex-row">
        <li className="mr-2 px-2 py-1"><a href='/' className='inline-flex items-center'><MdHome />Home</a></li>
        <li className="mr-2 px-2 py-1"><a href='/login' className='inline-flex items-center'><MdLogin />Login</a></li>
        <li className="mr-2 px-2 py-1"><a href='/register' className='inline-flex items-center'><MdPersonAdd />Register</a></li>
        <li className="mr-2 px-2 py-1"><a href='/contact' className='inline-flex items-center'><MdEmail />Contact</a></li>
      </ul>
    </nav>
  );
}
export default Header;