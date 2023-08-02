import React from 'react'
import logo from '../../assets/Logo.png'
import LogoUMKM from '../../assets/UMKM.png'

const ProfileWisata = () => {
  return (
    <div className='bg-gradient-to-t from-gray-100 to-sky-400 sm:grid-cols-2 w-full h-full mb-20'>
    <div className='p-5 flex flex-col justify-center'>
        <form className='max-w-[400px] w-full mx-auto bg-blue-500 p-5 px-8 rounded-lg'>
          <h2 className='text-4xl text-white font-bold text-center'>Profile</h2>
          <div className='flex flex-col text-gray-200'>
            <img src={logo} alt='' className='h-200 w-200'/>
            <p className='text-white text-3xl text-center'>Reza Asw</p>
            <p className='text-white text-lg text-center'>Bagus@gmail.com</p>
          </div>

            <div class="grid grid-cols-2">
                <a href="#" className='bg-sky-400 pr-5 text-center gap-2 rounded-lg p-3 m-3'>Pembelian</a>
                <a href="#" className='bg-sky-400 pr-5 text-center gap-2 rounded-lg p-3 m-3'>Penyewaan</a>
            </div>
                

        </form>
      </div>
    </div>
  )
}

export default ProfileWisata