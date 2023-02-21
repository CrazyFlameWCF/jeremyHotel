import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {

  const [ formData, setFormData ] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })

  let navigate = useNavigate();

  let { email, password } = formData;

  const changeHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const loginButtonHandler = async (e) => {
    e.preventDefault();

    if(email === '' || password === '') {
      return 
    }

    let request = await axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/login`, formData)

    if(!!request.data.success) {
      sessionStorage.setItem('authToken', request.data.token)
      sessionStorage.setItem('userId', request.data.user._id)
      navigate('/reservation')
    }

    console.log(request.data)
  }

  useEffect(() => {
    if (!!sessionStorage.authToken) {
      navigate('/reservation')
    }
  },[])

  return (
    <section className="flex flex-col items-center p-10">
    <div className="border-2 rounded-md w-full border-gray-200 px-8 py-10 flex flex-col items-center">
      <div className="w-full flex flex-col items-center pb-4 border-b border-gray-200">
        
        <p className="mt-4"><span className="text-blue-800 font-bold text-2xl">Employee Login</span></p>
      
      </div>
      <div className="pt-4 mb-4">
      <form onSubmit={loginButtonHandler} className='flex flex-col'>
        <label htmlFor='email' className='mb-2 font-bold'>
          Email :
        </label>
        <input type='email' name='email' onChange={changeHandler} className='border px-4 py-2 border-gray-200 rounded-md mb-2'/>
        <label htmlFor='password' className='mb-2 font-bold'>
          Password :
        </label>
        <input type='password' name='password' onChange={changeHandler} className='border px-4 py-2 border-gray-200 rounded-md mb-2' />
        <label htmlFor='password' className='mb-2 font-bold'>
          Confirm Password : 
        </label>
        <input type='password' name='confirmPassword' onChange={changeHandler} className='border px-4 py-2 border-gray-200 rounded-md mb-2' />
        <button type='submit' className="truncate px-4 py-2 w-full bg-blue-800 font-bold text-white rounded-md hover:bg-blue-200 hover:text-blue-700 mt-4">LOGIN</button>
      </form>
      </div>
    </div>

  </section>
    
  );
}
export default Login;