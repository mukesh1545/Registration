import React from 'react'
import Login from './Login'

function SucessLogin( props) {
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100 w-80'>
      <div className='bg-white p-3 rounded w-25'>
          <h1 className='d-flex justify-content-center align-items-center mb-20' >Sign in</h1>
          <div className='mb-3 d-flex justify-content-center align-items-center' >
             <img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSERDa7tcztxoMFdjtVKBt1z1mLZTUUxXveFw&usqp=CAU" className='d-flex w-50 rounded'/>
             <span></span></div>
             <span className='text-success d-flex justify-content-center align-items-center mb-10'>You have successfully Login</span>

      </div>
      </div>
  )
}

export default SucessLogin