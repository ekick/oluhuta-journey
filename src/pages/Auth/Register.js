import React from 'react'
import BG from "../../assets/bg-oluhuta.png"; 
const Register= () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
      <div className='bg-gray-700 hidden sm:block'>
        <img className='w-full h-full dark:opacity-75' src={BG} alt="gambar"/>
      </div>

      <div className='bg-cyan-600 flex flex-col justify-center'>
        <form className='max-w-[400px] w-full mx-auto bg-cyan-900 p-8 m-8 px-8 rounded-lg'>
          <h2 className='text-4xl dark:text-cyan font-bold text-center'>Registrasi Akun</h2>
          <div className='flex flex-col text-gray-200 py-2'>
            <label className='text-white'>Username</label>
            <input className='rounded-lg bg-cyan-700 mt-2 p-2 focus:border-blue-500 focus:bg-cyan-800 focus:outline-none' type='text'/>
          </div>
          <div className='flex flex-col text-gray-200 py-2'>
            <label className='text-white'>Email</label>
            <input className='rounded-lg bg-cyan-700 mt-2 p-2 focus:border-blue-500 focus:bg-cyan-800 focus:outline-none' type='text'/>
          </div>
          <div className='flex flex-col text-gray-200 py-2'>
            <label className='text-white'>No Handphone</label>
            <input className='rounded-lg bg-cyan-700 mt-2 p-2 focus:border-blue-500 focus:bg-cyan-800 focus:outline-none' type='text'/>
          </div>
          <div className='flex flex-col text-gray-200 py-2'>
            <label className='text-white'>Alamat</label>
            <input className='rounded-lg bg-cyan-700 mt-2 p-2 focus:border-blue-500 focus:bg-cyan-800 focus:outline-none' type='text'/>
          </div>
          <div className='flex flex-col text-gray-200 py-2'>
            <label className='text-white'>Password</label>
            <input className='rounded-lg bg-cyan-700 mt-2 p-2 focus:border-blue-500 focus:bg-cyan-800 focus:outline-none' type='password'/>
          </div>
          <div className='flex flex-col text-gray-200 py-2'>
            <label className='text-white'>Konfirmasi Password</label>
            <input className='rounded-lg bg-cyan-700 mt-2 p-2 focus:border-blue-500 focus:bg-cyan-800 focus:outline-none' type='password'/>
          </div>
          <div className='flex justify-between text-gray-400 py-2'>
            <p className='text-white'>Sudah Punya Akun?</p>
          </div>
          <button className='w-full my-5 py-2 bg-blue-500 text-white'>Daftar</button>
        </form>
      </div>
    </div>
    
  )
}

export default Register;