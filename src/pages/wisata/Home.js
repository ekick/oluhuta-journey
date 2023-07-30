import React, {useEffect, useState } from "react";
import SplashScreen from "./SplashScreen";
import { NavLink } from "react-router-dom";
import back from "../../assets/back3.jpg"
import logo from '../../assets/Logo.png'
import geodiversity from '../../assets/Geodiversity.png'
import biodiversity from '../../assets/Biodiveristy.png'
import culturaldiversity from '../../assets/Culturardiveristy.png'

const Home = () => {
  const navButton = [
    {id: 1, title: 'Geodiversity', path: '/Geodiversity', image: geodiversity},
    {id: 2, title: 'Biodiversity', path: '/Biodiversity', image: biodiversity},
    {id: 3, title: 'Culturaldiversity', path: '/Culturaldiversity', image: culturaldiversity},
  ]
    const [showSplash, setShowSplash] = useState(true);
        useEffect(() => {
      const timer = setTimeout(() => {
        setShowSplash(false);
      }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash ? (
        <SplashScreen />
      ) : (
        <div>
          <img className='w-screen md:h-screen h-128' src={back} alt='/' />
          <div className="absolute top-0 mt-28">
            <div className="">
              <div className="ml-3">
                <img src={logo} className="md:w-52 w-24 md:h-52 h-24" alt="/" />
              </div>
              <a href="#" class="">
                <h5 className="px-4 md:text-7xl text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Oluhuta</h5>
                <h5 className="md:ml-24 ml-0 px-8 md:text-7xl text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Journey</h5>
                <p className="md:mt-10 mt-3 md:text-3xl ml-3 text-sm text-gray-700 dark:text-gray-400">Kec. Kabila, Kab. Bone Bolango</p>
                <p className="md:mt-3 mt-0 md:text-3xl ml-3 text-sm text-gray-700 dark:text-gray-400">Provinsi Gorontalo, Indonesia</p>
              </a>
              <div className="flex justify-center items-center w-screen md:mt-0 mt-20">
              <div className="w-screen max-w-7xl">
              <div className="left-0 z-50 w-full h-full backdrop-blur-sm rounded-2xl px-1 border-gray-200 border-y">
                <div>
                  <p className="text-center font-cde md:text-2xl text-base md:p-6 p-2">Hi Kamu Kesini Akan Dapat Apa Sih ?</p>
                </div>
                  <div className="grid grid-cols-3 mx-auto my-auto font-medium">
                    {navButton.map((item, index) => {
                      return(
                      <div className='mt-1 ml-1 mb-1 mr-1' key={index}>
                        <NavLink to={item.path}>
                          <button type="button" className=" w-full inline-flex flex-col items-center justify-center px-5 border-gray-200 border-x bg-blue-700 bg-opacity-30 hover:bg-gray-50 dark:hover:bg-gray-800 group dark:border-gray-600 rounded-xl">            
                              <img src={item.image} alt="" className='md:w-28 w-12 md:h-28 h-12 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-500' /> 
                              <span className="md:text-2xl text-sm text-gray-100 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">{item.title}</span>
                          </button>
                        </NavLink>
                        <NavLink to={item.path}>
                        <p className="md:text-2xl text-sm text-center font-cde md:p-2 p-1">Selengkapnya</p>
                        </NavLink>
                      </div>
                    )}
                  )}
                  </div>
                </div>
              </div>
              </div>
              <div className="flex justify-center items-center w-screen md:mt-1 mt-20">
                    <NavLink to="/PemanduWisata">
                        <button type="button" className="w-full inline-flex flex-col items-center justify-center px-5 border-gray-200 border-x bg-blue-700 bg-opacity-30 hover:bg-gray-50 dark:hover:bg-gray-800 group dark:border-gray-600 rounded-xl text-black font-cde font-bold md:text-4xl text-xl">
                        Yuk Kita Mulai
                        </button>
                    </NavLink>
                </div>
            </div>
          </div>
        </div>
        )}
    </>   
  )
}

export default Home
