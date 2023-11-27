import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  const [formData,setFormData]=useState({});
  const handleChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.id]:e.target.value
    })
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const res=await fetch('/api/auth/signup',{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(formData)
    });
    console.log(`res is ${res}`);
    const data=await res.json();
  }

  return (
    <div className='p-33 max-w-lg max-auto text-center'>
      <h1 className='text-3xl text-center font-semibold my-7'>
        SignUp
      </h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 '>
        <input className='border p-3 rounded-lg' type='text' placeholder='username' id='username'  onChange={handleChange}/>
        <input className='border p-3 rounded-lg' type='email' placeholder='email' id='email' onChange={handleChange}/>
        <input className='border p-3 rounded-lg' type='password' placeholder='password' id='password' onChange={handleChange}/>
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-90 disabled:80'>sign up</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account</p>
        <Link to={'/sign-in'}>
          <span className='text-blue-700'>Sign in</span>
        </Link>
      </div>
    </div>

  )
}
