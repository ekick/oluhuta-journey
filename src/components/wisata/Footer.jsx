import React from 'react'
import iconhome from "../../assets/home.png"
import icondestinasi from "../../assets/Hero journey.png"
import iconscan from "../../assets/Scan.png"
import iconprofil from "../../assets/profile.png"
import { NavLink } from "react-router-dom";

const Footer = () => {
    const navButton = [
        {id: 1, title: 'Beranda', path: '/Beranda', image: iconhome},
        {id: 2, title: 'Destinasi', path: '/Destinasi', image: icondestinasi},
        {id: 3, title: 'Scan', path: '/Scan', image: iconscan},
        {id: 4, title: 'Profil', path: '/Profil', image: iconprofil},
    ]

return (
<div class="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
    <div class="grid h-full max-w-3xl grid-cols-4 mx-auto font-medium">
        {navButton.map((item, index) => {
            return(
                <div key={index}>
                    <NavLink to={item.path}>
                        <button type="button" className=" w-full inline-flex flex-col items-center justify-center px-5 border-gray-200 border-x hover:bg-gray-50 dark:hover:bg-gray-800 group dark:border-gray-600">            
                            <img src= {item.image} alt="" className='w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500' /> 
                            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">{item.title}</span>      
                        </button>
                    </NavLink>
                </div>
            )}
            )}            
    </div>
</div>
    )
}

export default Footer