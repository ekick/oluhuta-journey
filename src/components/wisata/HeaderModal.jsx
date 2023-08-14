import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'

const HeaderModal = ( {judul} ) => {
    return (
        <div className='flex justify-center items-center p-2'>
            <h1 className='font-cde md:text-3xl text-xl font-bold text-black'>{judul}</h1>
            
        </div>
    )
}

export default HeaderModal
