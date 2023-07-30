import React from "react";
import backhome from "../image/backhome.jpg";

const Hero = () => {
    return(
        <div className='w-full h-[90vh]'>
            
            <img 
                src={backhome} 
                alt='/' 
                className='w-full h-full object-cover'
            />
            <div className='max-w-[1140px] m-auto'>
                <div className='absolute top-[30%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
                    <h1 className='font-bold text-5xl'>Oluhuta Journey</h1>
                    {/* <h2 className='text-4xl py-4 italic'>With Weekway</h2> */}
                    <p className="mt-10 font-extrabold">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Ut qui explicabo laborum modi placeat ducimus non nihil. 
                     Minima dolorum cupiditate quae provident ratione eaque, 
                     ducimus modi reprehenderit dignissimos itaque vitae!</p>
                </div>
            </div>
        </div>
    )
}

export default Hero