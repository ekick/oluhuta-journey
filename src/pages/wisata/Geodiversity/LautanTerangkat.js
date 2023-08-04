import React from 'react'
import HeaderDetail from '../../../components/wisata/HeaderDetail'
import Judul from '../../../components/wisata/Judul'
import imglautanterangkat from '../../../assets/Lautan Terangkat1.jpg'
import { LautanTerangkat1 } from '../../../hooks/StateAuth'

const LautanTerangkat = () => {
    const datalautanterangkat = LautanTerangkat1.useState(s => s.lautanterangkat)
    return (
        <div>
            <HeaderDetail judul={'Lautan Terangkat'} link={"/Geodiversity"}/>
            <Judul name={'Lautan Terangkat'}/>
            <div className='flex justify-center items-center'>
                <div className='w-screen max-w-7xl px-2 py-4'>
                    <div className=" w-full items-center justify-center border-solid border-4 border-blue-500 rounded-3xl">            
                        <img src={imglautanterangkat} alt="" className='w-screen md:h-130 rounded-2xl ' />
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center px-3 mb-20'>
                <div className='w-screen md:px-5'>
                {datalautanterangkat.map((item) => {
                    return(
                    <p className='text-justify font-cde'>
                        {item.title}
                        <br></br>
                    </p>
                    )}
                    )}
                </div>
            </div>
        </div>
    )
}

export default LautanTerangkat
