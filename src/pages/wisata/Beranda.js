import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import galery1 from '../../assets/galery5.jpg'
import galery2 from '../../assets/galery6.jpg'
import galery3 from '../../assets/galery7.jpeg'
import backhome from '../../assets/backhome.jpg'
import geodiversity from '../../assets/Geodiversity.png'
import biodiversity from '../../assets/Biodiveristy.png'
import culturaldiversity from '../../assets/Culturardiveristy.png'
import scan from '../../assets/Scan.png'
import kuliner from '../../assets/Kuliner.png'
import penyewaan from '../../assets/Penyewaan.png'
import ekonomi from '../../assets/Ekonomi.png'
import minimap from '../../assets/Mini Map.png'
import logo from '../../assets/Logo.png'
import '../../index.css'
import './Beranda.css';
import { NavLink } from "react-router-dom";
import {
        FaFacebookF,
        FaTwitter,
        FaGooglePlusG,
        FaInstagram,
            } from 'react-icons/fa'

const Beranda = () => {
    const navButton = [
        {id: 1, title: 'Geodiversity', path: '/Geodiversity', image: geodiversity},
        {id: 2, title: 'Biodiversity', path: '/Biodiversity', image: biodiversity},
        {id: 3, title: 'Culturaldiversity', path: '/Culturaldiversity', image: culturaldiversity},
        {id: 4, title: 'Scan', path: '/Scan', image: scan},
        {id: 5, title: 'Kuliner', path: '/Kuliner', image: kuliner},
        {id: 6, title: 'Penyewaan', path: '/Penyewaan', image: penyewaan},
        {id: 7, title: 'Ekonomi', path: '/Ekonomi', image: ekonomi},
        {id: 8, title: 'Mini Map', path: '/MiniMap', image: minimap},
    ]
        const ImageSlider = [
            {id: 1, title: 'Lima Kerangka Manusia Oluhuta' , image: galery1},
            {id: 2, title: 'Makam Manusia Oluhuta' , image: galery2},
            {id: 3, title: 'Peta Oluhuta' , image: galery3},
        ]
            const currentYear = new Date().getFullYear()

    return (
        <div>
            <div>
                <img className='w-screen md:h-96 h-60 rounded-b-2xl' src={backhome} alt='/' />
                <div className='w-screen h-screen absolute top-0 flex flex-col'>
                    <div>
                        <div className='flex justify-between w-fit p-3'>
                            <div className='flex md:mt-0 mt-3'>
                                <img className='md:w-40 w-20 md:h-40 h-20' src={logo} alt='' />                
                            </div>
                            <div className='items-center mt-3'>
                                <h1 className='md:text-6xl text-xl font-bold font-cde text-black'>Oluhuta Journey</h1>
                                <p className='text-white text-center md:mt-3 mt-0 md:text-4xl text-sm'>Jelajahi Destinasi Seru</p>
                                <p className='text-white text-center md:text-4xl text-sm'>di Oluhuta</p>
                            </div>
                        </div>
                            <div className='flex justify-center items-center'>
                                <div className='w-screen max-w-2xl p-2'>
                                    <div className="bg-white rounded-2xl px-1 border-gray-200 border-y">
                                        <div className="grid grid-cols-3 grid-row-3 font-medium">
                                        {navButton.map((item, index) => {
                                        return(
                                            <div className='mt-3 ml-3 mb-3 mr-3' key={index}>
                                            <NavLink to={item.path}>
                                                <div className=" w-full inline-flex flex-col items-center justify-center ">            
                                                    <img src={item.image} alt="" className='md:w-20 w-12 md:h-20 h-12 mb-2 ' /> 
                                                    <span className="md:text-xl text-sm text-black font-cde">{item.title}</span>
                                                </div>
                                            </NavLink>
                                            </div>
                                        )}
                                        )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=''>
                                <div className='flex justify-center items-center'>
                                    <div className='w-screen max-w-7xl'>
                                        <Carousel
                                        showArrows={true}
                                        infiniteLoop={true}
                                        autoPlay={true}
                                        interval={5000}
                                        showIndicators={false}
                                        showStatus={false}
                                        showThumbs={false}
                                        >
                                            {ImageSlider.map((item, index) => {
                                                return(
                                                    <div className='w-full md:h-130 h-52' key={index}>
                                                        <div className="slide">
                                                            <div className="image-container border-solid border-4 border-blue-500 rounded-xl">
                                                            <img className='rounded-xl ' src={item.image} alt="/" />
                                                            </div>
                                                            <div className="absolute top-[85%] bg-white w-fit h-fit rounded-xl px-5">
                                                            <p className='text-justify-center font-bold md:text-3xl text-sm'>{item.title}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                            )}
                                            )}
                                        </Carousel>
                                    </div>
                                </div>
                            </div>
                            <div className='mb-20'>
                                <div className='flex justify-center items-center'>
                                <FaFacebookF className='mx-4' />
                                <FaTwitter className='mx-4' />
                                <FaGooglePlusG className='mx-4' />
                                <FaInstagram className='mx-4' />
                                </div>
                                <p className='text-center md:text-xl text-sm mt-3'>&copy; {currentYear} Oluhuta Journey. Hak Cipta Dilindungi.</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Beranda
