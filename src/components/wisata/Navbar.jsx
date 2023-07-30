import React from "react";
import {AiFillPhone, AiOutlineClockCircle} from 'react-icons/ai'
import {BsChatSquareDots} from 'react-icons/bs'
import logo from '../../assets/Logo.png'

const NavBar = () => {
    return (
        <div className='rounded-b-2xl flex justify-between items-start mt h-60 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-600'>
            <div className='flex items-center ml-3 mt-2'>
                <img src={logo} alt="" className="w-12 h-12" />
                <h1 className='text-xl font-bold text-black'>Oluhuta Journey</h1>
            </div>
                <div className='flex'>
                    <div className='hidden md:flex items-center mr-5 mt-2'>
                        <AiOutlineClockCircle size={20} className='mr-2 text-[var(--primary-dark)]' />
                        <p className='text-sm text-black'>07.00PM - 17.00PM</p>
                    </div>
                    <div className='hidden md:flex items-center mr-5 mt-2'>
                        <AiFillPhone size={20} className='mr-2 text-[var(--primary-dark)]' />
                        <p className='text-sm text-black'>0812 - 3456 - 7890</p>
                    </div>
                    <button className="mt-2 mr-2">
                    Login
                    </button>
                </div>
        </div>
    )
}

export default NavBar

