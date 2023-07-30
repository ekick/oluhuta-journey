import React from 'react'
import {BiArrowBack} from 'react-icons/bi'
import budayamembuatperahu from '../../assets/Budaya Membuat Perahu1.jpg'
import situsmanusiaoluhuta from '../../assets/Situs Manusia Oluhuta1.png'
import { NavLink } from "react-router-dom";

const Culturaldiversity = () => {
    const ListCulturaldiversity = [
        {id: 1, title: 'Perahu Tradisional', path: '/Culturaldiversity/PerahuTradisional', image: budayamembuatperahu},
        {id: 2, title: 'Situs Manusia Oluhuta', path: '/Culturaldiversity/SitusManusiaOluhuta', image: situsmanusiaoluhuta},
    ]

    return (
        <div>
            <div className='rounded-b-2xl flex w-full md:h-20 h-12 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-600'>
                <div className='flex justify-center items-center p-2'>
                    <NavLink to={"/Beranda"}>
                        <BiArrowBack size={30} className='mr-4 ml-2 text-[var(--primary-dark)]' />
                    </NavLink>
                <h1 className='font-cde md:text-4xl text-xl font-bold text-black'>Culturaldiversity</h1>
                </div>
            </div>
                {ListCulturaldiversity.map((item, index) => {
                return(
                    <div className='' key={index}>
                        <NavLink to={item.path}>
                            <ul class="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
                                <li class="pb-4 sm:pb-4">
                                    <div class="flex items-center space-x-4">
                                        <div class="flex-shrink-0">
                                            <img class="w-14 h-14 " src={item.image} alt="/" />
                                        </div>
                                        <div class="flex-1 min-w-0">
                                            <p class="font-cde text-sm font-medium text-black dark:text-white">
                                            {item.title}
                                            </p>
                                        </div>
                                    </div>
                                </li>   
                            </ul>
                        </NavLink>
                    <hr></hr>
                    </div>
                )}
                )}
        </div>
    )
}

export default Culturaldiversity