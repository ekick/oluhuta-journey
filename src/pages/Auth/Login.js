import React from 'react'
import BG from "../../assets/bg-oluhuta.png"; 
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { updateUser, UserState } from '../../hooks/StateAuth';

const Login= () => {
  const userData = UserState.useState((s) => s.user)

  const [valueInput, setValueInput] = useState({
    username: "",
    password: ""
  })
  const navigate = useNavigate()

  const toastNotify = (message) => toast(message)

  useEffect(() => {
    // jika data pada pullstate tidak ada atau undefined, maka nilai false
    if (userData.role === 'pengunjung') {
      navigate("/Beranda");
    } else if (userData.role === 'admin') {
      navigate("/pages/culturdiversity");
    }
  }, [userData, navigate])

  const handleSubmitAuth = async (event) => {
    event.preventDefault();
    let user = valueInput.username;
    let pass = valueInput.pass;

    if (!/^[A-Za-z0-9]*$/.test(user)) {
      toastNotify("NIK mengandung karakter bukan angka!");
      return false;
    }
    if (pass.length < 8) {
      toastNotify("Password kurang dari 8 digit");
      return false;
    }
    
    await updateUser({user, pass}).then((role) => {
      if (!role) {
        return toastNotify("Terjadi kesalahan pada server");
      }
      if (role === 'pengunjung') {
        navigate("/Beranda");
      } else if (role === 'admin') {
        navigate("/pages/culturdiversity");
      }
    });
  }

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
      {/* <ToastContainer autoClose={5000} /> */}
      <div className='bg-gray-700 hidden sm:block'>
        <img className='w-full h-full dark:opacity-75' src={BG} alt="gambar"/>
      </div>

      <div className='bg-gray-100 flex flex-col justify-center'>
        <form className='max-w-[400px] w-full mx-auto bg-cyan-900 p-8 px-8 rounded-lg' onSubmit={handleSubmitAuth}>
          <h2 className='text-4xl text-cyan-200 font-bold text-center'>SIGN IN</h2>
          <div className='flex flex-col text-gray-200 py-2'>
            <label className='text-white'>Username</label>
            <input 
              className='rounded-lg bg-cyan-700 mt-2 p-2 focus:border-blue-500 focus:bg-cyan-800 focus:outline-none' 
              type='text'
              onChange={(e) => setValueInput({...valueInput, username : e.target.value})}
              required
            />
          </div>
          <div className='flex flex-col text-gray-200 py-2'>
            <label className='text-white'>Password</label>
            <input 
              className='rounded-lg bg-cyan-700 mt-2 p-2 focus:border-blue-500 focus:bg-cyan-800 focus:outline-none' 
              type='password'
              onChange={(e) => setValueInput({...valueInput, password : e.target.value})}
              required
            />
          </div>
          <div className='flex justify-between text-gray-400 py-2'>
            <a href="/register" className="text-white">
                Registrasi
            </a>
          </div>
          <button type='submit' className='w-full my-5 py-2 bg-blue-500 text-white'>Masuk</button>
        </form>
      </div>

    </div>
    
  )
}

export default Login;