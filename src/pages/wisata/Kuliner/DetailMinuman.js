import React from 'react'
import { useState } from 'react'
import { FaPlus,FaMinus} from 'react-icons/fa'
import HeaderDetail from '../../../components/wisata/HeaderDetail'
import { useParams } from 'react-router-dom'
import { Minuman1 } from '../../../hooks/StateWisata'

const DetailMinuman = ( ) => {    
    let {DetailMinumanID} = useParams();
    const dataminuman = Minuman1.useState(s => s.minuman)
    const filterData = dataminuman.filter((item) => item.id == DetailMinumanID);
    const DrinkDetail = filterData[0]
    const [JumlahMinuman, setJumlahMinuman] = useState(0);
    const totalHarga = JumlahMinuman * DrinkDetail.harga;

    const handleIncrement = () => {
        setJumlahMinuman(JumlahMinuman + 1);
    };

    const handleDecrement = () => {
        if (JumlahMinuman > 0) {
        setJumlahMinuman(JumlahMinuman - 1);
        }
    };
    return (
        <div>
            <HeaderDetail judul={'Detail Minuman'} link={"/Kuliner/Minuman"}/>
            
            <div className='flex justify-center items-center'>
                <div className='w-screen max-w-7xl px-2 py-4'>
                    <div className=" w-full items-center justify-center border-solid border-4 border-blue-500 rounded-3xl">            
                        <img src={DrinkDetail.image} alt="" className='w-screen md:h-128 object-cover rounded-2xl ' />
                    </div>
                </div>
            </div>
            <div>
                <p className='text-center md:text-6xl text-xl font-cde font-bold md:p-5 p-0 md:mt-0 mt-3'>
                {DrinkDetail.name}
                </p>
            </div>
            <div>
                <p className='text-center md:text-4xl text-base font-cde font-bold md:mt-0 mt-3'>
                Harga Rp. {DrinkDetail.harga}
                </p>
            </div>
            <div>
                <p className='text-center md:text-4xl text-base font-cde font-bold mt-3'>
                Jumlah
                </p>
            </div>
            <div className='flex justify-center items-center mt-3'>
                <div className='flex items-center'>
                    <FaMinus size={30} style={{color: 'black'}} onClick={handleDecrement} className='cursor-pointer' />
                </div>
                <div className='flex items-center px-5'>
                    <h2>{JumlahMinuman}</h2>
                </div>
                <div className='flex items-center'>
                    <FaPlus size={30} style={{color: 'black'}} onClick={handleIncrement} className='cursor-pointer' />
                </div>
            </div>
            <div className="flex justify-center items-center w-full md:mt-1 mt-8 md:mb-20 mb-0 px-3">
                <button type="button" className="w-fit inline-flex flex-col items-center justify-center px-5 border-gray-200 border-x bg-blue-700 bg-opacity-30 hover:bg-gray-50 dark:hover:bg-gray-800 group dark:border-gray-600 rounded-xl text-black font-cde md:text-4xl text-base">
                Tambahkan Ke Keranjang Rp. {totalHarga}
                </button>
            </div>
        </div>
    )
}

export default DetailMinuman
