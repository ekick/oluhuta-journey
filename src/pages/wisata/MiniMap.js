import React from 'react'
import minimap1 from '../../assets/PETA OLUHUTA GEOLOGY Coba (155X170CM).jpg'
import minimap2 from '../../assets/topografi (120X120CM).jpg'
import {BiArrowBack} from 'react-icons/bi'
import { NavLink } from "react-router-dom";

const MiniMap = () => {
    return (
    <div>
        <div className='rounded-b-2xl flex w-full md:h-20 h-12 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-600'>
            <div className='flex justify-center items-center p-2'>
                <NavLink to={"/Beranda"}>
                    <BiArrowBack size={35} style={{ color: 'white' }} className='mr-4 ml-2 text-[var(--primary-dark)]' />
                </NavLink>
            <h1 className='font-cde md:text-4xl text-xl font-bold text-white'>Mini Map</h1>
            </div>
        </div>
        <img className='mb-20 mt-3 md:w-full w-full md:h-screen h-screen border-solid border-4 border-blue-500 rounded-xl' src={minimap1} />
    </div>
    )
}

export default MiniMap
