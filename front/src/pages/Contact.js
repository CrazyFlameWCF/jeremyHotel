import { useState } from 'react';
import axios from 'axios';

const Contact = (props) => {

  const [ formSubmit, setFormSubmit] = useState({
    email: '',
    subject: '',
    message: '',
  });

  let { email, subject, message } = formSubmit;

  const changeHandler = (e) => {
    setFormSubmit((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }
  const submitHandler = (e) => {
    e.preventDefault();
    // console.log('clicked')
    
    // call axios 
    // send formSubmit to backEnd
    const requestToApi = async (data) => {
      let request = await axios.post(`${process.env.REACT_APP_SERVER_URL}/testEmail/test`, data);
      console.log(request)
    }

    requestToApi(formSubmit)

  }

  return (
    <>
    <p> Contact Page </p>
    <form className='flex flex-col p-5' onSubmit={submitHandler}>
      <div>
        <p>Email :</p>
        <input type='email' name='email' onChange={changeHandler} className='border px-2 py-1 border-gray-300 w-full'/>
      </div>
      <div>
        <p>Subject :</p>
        <input type='text' name='subject' onChange={changeHandler} className='border px-2 py-1 border-gray w-full'/>
      </div>
      <div>
        <p>Messeage :</p>
        <textarea name='message' onChange={changeHandler} className='border px-2 py-1 border-gray w-full' />
      </div>
      <button type='submit' className='border px-2 py-1 bg-green-500'>Submit</button>
    </form>
    </>
  );
}
export default Contact;