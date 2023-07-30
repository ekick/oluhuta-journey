import React from "react";
import {AiFillPhone, AiOutlineClockCircle} from 'react-icons/ai'
import {BsChatSquareDots} from 'react-icons/bs'
import logo from '../image/Logo.png'

const TopBar = () => {
    return (
        <div className='flex justify-between items-center px-4 py-2'>
            <div className='flex items-center'>
                <img src={logo} alt="" className="w-12 h-12 mr-2" />
                <h1 className='text-xl font-bold text-gray-700'>Oluhuta Journey</h1>
            </div>
                <div className='flex'>
                    <div className='hidden md:flex items-center px-6'>
                        <AiOutlineClockCircle size={20} className='mr-2 text-[var(--primary-dark)]' />
                        <p className='text-sm text-gray-700'>07.00PM - 17.00PM</p>
                    </div>
                    <div className='hidden md:flex items-center px-6'>
                        <AiFillPhone size={20} className='mr-2 text-[var(--primary-dark)]' />
                        <p className='text-sm text-gray-700'>0812 - 3456 - 7890</p>
                    </div>
                        <button>Login</button>
                </div>
        </div>
    )
}

export default TopBar