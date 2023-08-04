import React from 'react'
import HeaderDetail from '../../components/wisata/HeaderDetail';
import budayamembuatperahu from '../../assets/Budaya Membuat Perahu1.jpg'
import situsmanusiaoluhuta from '../../assets/Situs Manusia Oluhuta1.png'
import { NavLink } from "react-router-dom";

const CulturaldiversityWisata= () => {
    const ListCulturaldiversity = [
        {id: 1, title: 'Perahu Tradisional', path: '/Culturaldiversity/PerahuTradisional', image: budayamembuatperahu},
        {id: 2, title: 'Situs Manusia Oluhuta', path: '/Culturaldiversity/SitusManusiaOluhuta', image: situsmanusiaoluhuta},
    ]

    return (
        <div>
            <HeaderDetail judul={'Culturaldiversity'} link={"/Beranda"}/>
                {ListCulturaldiversity.map((item, index) => {
                return(
                    <div className='' key={index}>
                        <NavLink to={item.path}>
                            <ul class="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
                                <li class="pb-4 sm:pb-4">
                                    <div class="flex items-center space-x-4">
                                        <div class="flex-shrink-0">
                                            <img class="w-14 h-14 rounded-xl" src={item.image} alt="/" />
                                        </div>
                                        <div class="flex-1 min-w-0">
                                            <p class="font-cde text-sm font-medium text-black">
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

export default CulturaldiversityWisata