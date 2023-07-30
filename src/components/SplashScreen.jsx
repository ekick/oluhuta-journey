import React from 'react'
import logo from '../image/Logo.png'


const SplashScreen = () => {

    return (
            <div className='bg-no-repeat bg-cover md:bg-center bg-image-splash-bg w-screen h-screen flex justify-center flex-col'>
                <div className='w-full h-2/4 flex justify-around flex-col'>
                    <img src={logo} alt="" className='self-center object-scale-down h-2/5 w-2/5'/>
                    <p className='text-2xl md:text-5xl font-serif font-bold text-center -mt-20 md:-mt-10'>Oluhuta Journey</p>
                </div>
            </div>
    )
};

export default SplashScreen;