import React from 'react'
import backgroundsyarat from '../../assets/back.jpg'
import { NavLink } from 'react-router-dom'

const SyaratDanKetentuan = () => {
    return (
        <div>
        <img className='w-full h-screen' src={backgroundsyarat} alt='/' />
            <div className='w-screen px-5 h-screen absolute top-0 flex flex-col justify-around'>
                <div className='md:px-30 w-full'>
                    <div className="left-0 z-50 w-full h-full bg-white rounded-2xl px-1 border-gray-200 border-y py-5">
                        <h1 className="text-center font-cde md:text-3xl font-semibold text-base md:mb-6 mb-3">Syarat dan Ketentuan Sebelum Melakukan Perjalanan</h1>
                            <label className="text-justify font-cde md:text-lg text-sm">
                                <input type="checkbox"  className="mr-2 ml-2"/>
                                    Jumlah orang berkunjung minimal 5 orang, maksimal 10 orang. Jika kurang dari 5 orang atau lebih dari 10 tuliskan di kolom ini
                                <div className="relative w-36 h-fit flex">
                                    <input type="text" id="floating_filled" className=" rounded-lg p-2 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder ="Jumlah Orang" />
                                    <h1 className='p-3 font-cde md:text-lg text-sm'>Orang</h1>
                                </div>
                            </label>
                            <label className="text-justify font-cde md:text-lg text-sm">
                                <input type="checkbox"  className="mr-2 ml-2 mt-5"/>
                                    Jika anda membawa anak silahkan tuliskan jumlah dan usia anak anda
                                <div className="relative w-68 h-fit flex">
                                    <input type="text" id="floating_filled" className=" rounded-lg p-2 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder ="Jumlah Anak" />
                                    <h1 className='p-3 font-cde md:text-lg text-sm'>Anak</h1>
                                    <input type="text" id="floating_filled" className=" rounded-lg p-2 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder ="Usia" />
                                    <h1 className='p-3 font-cde md:text-lg text-sm'>Anak</h1>
                                </div>
                            </label>
                            <label className="text-justify font-cde md:text-lg text-sm">
                                <input type="checkbox"  className="mr-2 ml-2 mt-5" />
                                    Jika ada pengunjung berusia lanjut silahkan tuliskan jumlah dan usia pengunjung
                                <div className="relative w-72 h-fit flex">
                                    <input type="text" id="floating_filled" className=" rounded-lg p-2 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder ="Jumlah Orang" />
                                    <h1 className='p-3 font-cde md:text-lg text-sm'>Orang</h1>
                                    <input type="text" id="floating_filled" className=" rounded-lg p-2 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder ="Usia" />
                                    <h1 className='p-3 font-cde md:text-lg text-sm'>Tahun</h1>
                                </div>
                            </label>
                            <label className="text-justify font-cde md:text-lg text-sm">
                                <input type="checkbox"  className="mr-2 ml-2 mt-5"/>
                                    Berjanjilah akan membuang sampah kembali. Jika melanggar akan dikenakkan denda 
                            </label>
                    </div>
                </div>
                <div className="max-w-md w-full self-center">
                    <NavLink to="/Beranda">
                        <button type="button" className="w-full inline-flex flex-col items-center justify-center px-5 border-gray-200 border-x bg-blue-700 bg-opacity-30 hover:bg-gray-50 dark:hover:bg-gray-800 group dark:border-gray-600 rounded-xl text-black font-cde font-bold md:text-4xl text-xl">
                        Yuk Kita Mulai
                        </button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default SyaratDanKetentuan
