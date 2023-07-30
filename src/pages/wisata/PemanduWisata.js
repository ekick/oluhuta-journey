import React from 'react'
import profil from '../../assets/profile.png'
import pemanduwisata from '../../assets/back.jpg'
import instagram from '../../assets/Sosial Media.png'
import telp from '../../assets/Contacr.png'
import posisi from '../../assets/Posisition.png'
import { NavLink } from 'react-router-dom'

const PemanduWisata = () => {
    const navPemandu = [
        {id: 1, title: 'Eza', image: profil, sosialmedia: instagram, ai: 'Akun Instagram', hp: '081234567890' , iconhp: telp, pos: 'Pemandu Sertifikat', iconpos: posisi, path: "/SyaratDanKetentuan" },
        {id: 2, title: 'Inon', image: profil, sosialmedia: instagram, ai: 'Akun Instagram', hp: '081234567890' , iconhp: telp, pos: 'Pemandu Lokal', iconpos: posisi, path: "/SyaratDanKetentuan" },
        {id: 3, title: 'Opik', image: profil, sosialmedia: instagram, ai: 'Akun Instagram', hp: '081234567890' , iconhp: telp, pos: 'Pemandu Biasa', iconpos: posisi, path: "/SyaratDanKetentuan"},
    ]
    return (
        <div>
            <img className='w-full h-screen' src={pemanduwisata} alt='/' />
            <div className='w-screen px-5 h-screen absolute top-0 flex flex-col justify-around'>
                <div className='flex justify-center items-center'>
                    <div className='w-screen max-w-7xl'>
                        <div className="left-0 z-50 w-full h-full bg-white rounded-2xl px-1 border-gray-200 border-y">
                            <div>
                                <p className="text-center font-semibold font-cde md:text-3xl text-base md:p-10 p-2">Pilih Pemandu Wisatamu</p>
                            </div>
                            <div className="md:grid grid-cols-3 mx-auto my-auto font-medium">
                            {navPemandu.map((item, index) => {
                            return(
                                <div className='mt-1 ml-1 mb-1 mr-1' key={index}>
                                    <NavLink to={item.path}>
                                    <button type="button" className="grid-rows-3 w-full inline-flex flex-col items-center justify-center px-5 border-gray-200 border-x bg-blue-700 bg-opacity-30 hover:bg-gray-50 dark:hover:bg-gray-800 group dark:border-gray-600 rounded-xl">            
                                        <img src={item.image} alt="/" className='md:mt-5 mt-1 md:w-28 w-14 md:h-28 h-14 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-500' /> 
                                            <span className="md:text-2xl text-base font-cde text-gray-100 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">{item.title}</span>
                                            <div className='w-full h-full flex  items-center justify-center md:p-5 p-1'>
                                                <img src={item.iconhp} alt="/" className='md:w-5 w-5 md:h-5 h-5 mr-2 group-hover:text-blue-600 dark:group-hover:text-blue-500' />
                                                <span className='text-sm text-black font-cde'>{item.hp}</span>
                                            </div>
                                            <div className='w-full h-full flex items-center justify-center md:p-5 p-1'>
                                                <img src={item.sosialmedia} alt="/" className='md:w-5 w-5 md:h-5 h-5 mr-2 group-hover:text-blue-600 dark:group-hover:text-blue-500' />
                                                <span className='text-sm text-black font-cde'>{item.ai}</span>
                                            </div>
                                            <div className='w-full h-full flex items-center justify-center md:p-5 p-1'>
                                                <img src={item.iconpos} alt="/" className='md:w-5 w-5 md:h-5 h-5 mr-2 group-hover:text-blue-600 dark:group-hover:text-blue-500' />
                                                <span className='text-sm text-black font-cde'>{item.pos}</span>
                                            </div>
                                    </button>
                                    </NavLink>
                                </div>
                            )}
                            )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PemanduWisata
