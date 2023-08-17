import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Register from './Register'
import Validation from './LoginValidation';
import SucessLogin from './SucessLogin';

function Login() {
  const nav=useNavigate();
  
  const[value,setvalues]=useState({
    Email:'',
    Password:''
  });
  const[error, seterror]=useState({});

    const handleInputs=(e)=>
  {
    setvalues((p)=>({...p,[e.target.name]:e.target.value}));
   
  }
  const handleclick=(e)=>
  {
    e.preventDefault();
    
   seterror(Validation(value));
  }
  const display= ((error.Email === "" && error.Password === ""));
  
  const next = (e) => {
    {
      display && nav('/SucessLogin');
    }
  };
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <form action='' onSubmit={handleclick}>
          <h1 className='d-flex justify-content-center align-items-center'>Sign in</h1>
          <div className='mb-3'>
            <label htmlFor='email'><strong>Email</strong></label>
            <input type="email" placeholder='Enter Your Email'  onChange={handleInputs} name="Email" className='form-control rounded-0'/>
            {error.Email &&<span className='text-danger'>{error.Email}</span>}
          </div>
          <div className='mb-3'>
            <label htmlFor='password'><strong>password</strong></label>
            <input type="password" placeholder='Enter Your password' onChange={handleInputs}  name="Password"  className='form-control rounded-0'/>
            {error.Password &&<span className='text-danger'>{error.Password}</span>}
          </div>
          <button className='btn btn-success w-100 mb-2' type="submit" onClick={next}>
           <strong>Login</strong>
          </button>
          <div className=' d-flex align-items-center justify-content-center'>
          <p >Don't have Account please <strong>Register!</strong> </p></div>
          <Link to="/Register" className='btn btn-defalut border  bg-white w-100'><strong>Register</strong></Link>
        </form>

      </div>
      </div>
  )
}

export default Login