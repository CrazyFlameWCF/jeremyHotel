import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = (props) => {
  const [ formData, setFormData ] = useState({
    email: '',
    password: '',
    username: '',
    address: '',
    contact: '',
  })

  let navigate = useNavigate();

  let { email, password, username, address, contact } = formData;

  const changeHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const registerButtonHandler = (e) => {
    e.preventDefault();
    console.log('button clicked')

    // validate
    const validator = (username, email, password) => {
      if (username === '' || email === '' || password === '') {
        return false
      } else {
        return true
      }
    }

    // sending data
    const registerToApi = async (data) => {
      if(validator(username, email, password)) {
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/register`, data)

        if(!!response.data.success) {
          sessionStorage.setItem('authToken', response.data.token)//????????
          sessionStorage.setItem('userId', response.data.user._id)//????????
          navigate('/')//?????????
        }

        console.log(response)
      }
    }

    registerToApi(formData)
  }

  useEffect(() => {
   if(!!sessionStorage.authToken) {
    navigate('/')
   }
  },[])

  return (
    <section className="flex flex-col items-center p-10 ">
      <div className="pt-4 mb-4 border-2 border-gray-300 px-36 py-24 ">

      <p className='text-2xl text-blue-800 font-bold pb-4 pt-8'>Register Page</p>
      <form onSubmit={registerButtonHandler} className='flex flex-col'>
        <label htmlFor='email' className='mb-2 font-bold'>
          email:
        </label>
        <input type='email' name='email' onChange={changeHandler} className='border px-4 py-2 border-gray-200 rounded-md mb-2'/>
        <label htmlFor='password' className='mb-2 font-bold'>
          password :
        </label>
        <input type='password' name='password' onChange={changeHandler} className='border px-4 py-2 border-gray-200 rounded-md mb-2'/>
        <label htmlFor='username' className='mb-2 font-bold'>
          username :
        </label>
        <input type='text' name='username' onChange={changeHandler} className='border px-4 py-2 border-gray-200 rounded-md mb-2' />
        <label htmlFor='address' className='mb-2 font-bold'>
          address :
        </label>
        <input type='text' name='address' onChange={changeHandler} className='border px-4 py-2 border-gray-200 rounded-md mb-2' />
        <label htmlFor='contact' className='mb-2 font-bold'>
          contact :
        </label>
        <input type='text' name='contact' onChange={changeHandler} className='border px-4 py-2 border-gray-200 rounded-md mb-2' />
        <button type='submit' className="truncate px-4 py-2 w-full bg-blue-800 font-bold text-white rounded-md hover:bg-blue-900 mt-4">Register</button>
      </form>
      </div>
    </section>
  );
  }
export default Register;