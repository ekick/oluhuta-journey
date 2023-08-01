import React from 'react'
import BG from "../../assets/bg-oluhuta.png"; 
import { NavLink } from 'react-router-dom';
const Login= () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
      <div className='bg-gray-700 hidden sm:block'>
        <img className='w-full h-full dark:opacity-75' src={BG} alt="gambar"/>
      </div>

      <div className='bg-gray-100 flex flex-col justify-center'>
        <form className='max-w-[400px] w-full mx-auto bg-cyan-900 p-8 px-8 rounded-lg'>
          <h2 className='text-4xl text-cyan-200 font-bold text-center'>SIGN IN</h2>
          <div className='flex flex-col text-gray-200 py-2'>
            <label className='text-white'>Username</label>
            <input className='rounded-lg bg-cyan-700 mt-2 p-2 focus:border-blue-500 focus:bg-cyan-800 focus:outline-none' type='text'/>
          </div>
          <div className='flex flex-col text-gray-200 py-2'>
            <label className='text-white'>Password</label>
            <input className='rounded-lg bg-cyan-700 mt-2 p-2 focus:border-blue-500 focus:bg-cyan-800 focus:outline-none' type='password'/>
          </div>
          <div className='flex justify-between text-gray-400 py-2'>
            <p className='text-white'>Lupa Password</p>
            <a href="/pages/register" className="text-white">
                Registrasi
            </a>
          </div>
          <button className='w-full my-5 py-2 bg-blue-500 text-white'>Masuk</button>
        </form>
      </div>

    </div>
    
  )
}

export default Login;