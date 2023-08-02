import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'

const ProfilWisata = () => {
    return (
        <div>
            <div className='rounded-b-2xl flex w-full md:h-20 h-12 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-600'>
                <div className='flex justify-center items-center p-2'>
                    <NavLink to={"/Beranda"}>
                    <BiArrowBack size={35} style={{ color: 'white' }} className='mr-4 ml-2 text-[var(--primary-dark)]' />
                    </NavLink>
                <h1 className='font-cde md:text-4xl text-xl font-bold text-white'>Profil Pengunjung</h1>
                </div>
            </div>
        </div>
    )
}

export default ProfilWisata
