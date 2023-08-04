import React from 'react'
import HeaderDetail from '../../../components/wisata/HeaderDetail'
import imgkekarberkolom from '../../../assets/Kekar Berkolom2.jpg'
import { KekarBerkolom1 } from '../../../hooks/StateAuth'
import Judul from '../../../components/wisata/Judul'

const KekarBerkolom = () => {
    const datakekarberkolom = KekarBerkolom1.useState(s => s.kekarberkolom)
    return (
        <div>
            <HeaderDetail judul={'Kekar Berkolom'} link={"/Geodiversity"}/>
            <Judul name={'Kekar Berkolom'}/>
            <div className='flex justify-center items-center'>
                <div className='w-screen max-w-7xl px-2 py-4'>
                    <div className=" w-full items-center justify-center border-solid border-4 border-blue-500 rounded-3xl">            
                        <img src={imgkekarberkolom} alt="" className='w-screen md:h-130 rounded-2xl ' />
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center px-3 mb-20'>
                <div className='w-screen md:px-5'>
                {datakekarberkolom.map((item) => {
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

export default KekarBerkolom
