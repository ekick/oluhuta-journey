import React from 'react'
import galery5 from"../image/galery5.jpg"
import galery6 from"../image/galery6.jpg"
import galery7 from"../image/galery7.jpeg"


const Activities = () => {
  return (
    <div className='max-w-[1140px] m-auto w-full md:flex mt-[-75px]'>
        <div className='relative p-4'>
            <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[50%] text-white text-2xl font-bold'>Resort</h3>
            <img
                className='w-100 h-100 object-cover relative border-4 border-white shadow-lg'
             src={galery5} alt="/" />
        </div>
        <div className='relative p-4'>
            <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[50%] text-white text-2xl font-bold'>Resort</h3>
            <img
                className='w-100 h-100 object-cover relative border-4 border-white shadow-lg'
             src={galery6} alt="/" />
        </div>
        <div className='relative p-4'>
            <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[50%] text-white text-2xl font-bold'>Resort</h3>
            <img
                className= 'object-cover relative border-4 border-white shadow-lg'
             src={galery7} alt="/" />
        </div>
    </div>
  )
}

export default Activities
