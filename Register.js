import React, { useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './RegisterValidation';




const Register = () => {
const nav=useNavigate();
  const[value,setvalues]=useState({
    Username:'',
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
  const display= ((error.Username==="") && (error.Password ==="")&& (error.Email ==="") && (error.Password ===""));

  const next = () => {
    {
      display &&
    nav('/');
    }
  };

  return (
    <div>
      <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <form action='' onSubmit={handleclick} type="submit">
          <h1 className='d-flex justify-content-center align-items-center'>Register</h1>
          <div className='mb-3'>
            <label htmlFor='Username'><strong>Username</strong></label>
            <input type="text" placeholder='Enter Your Username' onChange={handleInputs}  name="Username" className='form-control rounded-0'/>
            {error.Username &&<span className='text-danger'>{error.Username}</span>}
          </div>
          <div className='mb-3'>
            <label htmlFor='email'><strong>Email</strong></label>
            <input type="email" placeholder='Enter Your Email' onChange={handleInputs}   name="Email" className='form-control rounded-0'/>
            {error.Email &&<span className='text-danger'>{error.Email}</span>}
          </div>
          <div className='mb-3'>
            <label htmlFor='password'><strong>password</strong></label>
            <input type="password" placeholder='Enter Your password'  onChange={handleInputs}    name="Password" className='form-control rounded-0'/>
            {error.Password &&<span className='text-danger'>{error.Password}</span>}
          </div>
          <div className=' d-flex justify-content-center align-text-center mb-1'>
        <button type="submit" onClick={next} className='btn btn-success border   w-100 mb-2'>submit</button>
          
          </div>
          <Link to="/" className='btn btn-defalut  border bg-white  w-100'><strong>Login</strong></Link>
          
        </form>

      </div>
      </div>
    </div>
  )
}

export default Register