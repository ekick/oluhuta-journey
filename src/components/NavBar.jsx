// import React, {useState, useEffect} from "react";
// import Hero from "./Hero";
// import Gallery from "./Gallery";
// import { Link, NavLink } from "react-router-dom";
// import {
//     FaFacebookF,
//     FaTwitter,
//     FaGooglePlusG,
//     FaInstagram,
//     FaBars,
// } from 'react-icons/fa'

// const NavBar = () => {
//     const [nav, setNav] = useState(false)

//     const handleNav = () =>{
//         setNav(!nav)
//     }

//         const menu= [
//             {path:"/Home", name:"Home"},
//             {path:"/SpotWisata", name:"Spot Wisata"},
//             {path:"/Budaya", name:"Budaya"},
//             {path:"/Umkm", name:"UMKM"},
//             {path:"/Gallery", name:"Gallery"},

//         ]

//         // return(

//         //     <div className="w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-blue-300">
//         //         <ul className="hidden sm:flex px-4">
//         //             {menu.map((items,index) => {
//         //                 return(
//         //                     <li key={index}>
//         //                         <NavLink to={items.path} className="link" activeclassName="active">
//         //                             <a href="#">
//         //                                 {items.name}
//         //                             </a>
//         //                         </NavLink>
//         //                     </li>
//         //                 )
//         //             })}
//         //         </ul>
//         //         <div className='flex justify-between'>
//         //             <FaFacebookF className='mx-4' />
//         //             <FaTwitter className='mx-4' />
//         //             <FaGooglePlusG className='mx-4' />
//         //             <FaInstagram className='mx-4' />
//         //         </div>
//         //         <div onClick={handleNav} className='sm:hidden z-10'>
//         //              <FaBars size={20} className='mr-4 cursor-pointer' />
//         //         </div>
//         //         <div
//         //     onClick={handleNav} 
//         //     className={nav ? 'overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col' 
//         //                     : 'absolute top-0 h-screen left-[-100%] ease-in duration-500'}>
//         //     <ul className='h-full w-full text-center pt-12'>
//         //     <li className='text-2xl py-8'>
//         //         <a href="/">Home</a>
//         //     </li>
//         //     <li className='text-2xl py-8'>
//         //         <a href="#gallery">Gallery</a>
//         //     </li>
//         //     <li className='text-2xl py-8'>
//         //         <a href="#deals">Deals</a>
//         //     </li>
//         //     <li className='text-2xl py-8'>
//         //         <a href="#contact">Contact</a>
//         //     </li>
//         //     </ul>
//         // </div>

//         //     </div>
//         // )

//     return (
//     <div className='w-full min-h-[50px] flex justify-between items-center absolute z-20 text-white bg-blue-500'>
//         <ul className='hidden sm:flex px-5'>

//         {menu.map((items,index) => {
//                 return(
//                         <li key={index}>
//                             <NavLink to={items.path} className="link">
//                                 {items.name}     
//                             </NavLink>
//                         </li>
//                         )
//         })}     
//         </ul>
//         <div className='flex justify-between cursor-pointer'>
            
//         </div>
//         {/* Hamburger Icon */}
//         <div onClick={handleNav} className='sm:hidden z-10'>
//             <FaBars size={20} className='mr-4 cursor-pointer' />
//         </div>
//         {/* Mobile Menu */}
//         <div
//             onClick={handleNav} 
//             className={nav ? 'overflow-y-hidden md:hidden ease-in duration-300 absolute text-white left-0 top-0 w-full h-screen bg-blue-500 px-4 py-7 flex flex-col' 
//                             : 'absolute top-0 h-screen left-[-100%] ease-in duration-500'}>
//             <ul className='h-full w-full text-center pt-12'>

//                 {menu.map((item,index) => {
//                     return (
//                         <li key={index} className="text-3xl py-6">
//                             <NavLink to={item.path}>
//                                  {item.name}
//                             </NavLink>
//                         </li>
//                     )
//                 })}

//             </ul>
//         </div>
//     </div>
//     )
// };

// export default NavBar

import React from 'react'

const NavBar = () => {
  return (
    <div>
      
    </div>
  )
}

export default NavBar
