import React from 'react'
import kekarberkolom1 from '../../assets/Kekar Berkolom1.jpg'
import kekarberlembar1 from '../../assets/Kekar Berlembar1.jpg'
import lautanterangkat1 from '../../assets/Lautan Terangkat1.jpg'
import HeaderDetail from '../../components/wisata/HeaderDetail'
import { NavLink } from "react-router-dom";

const Geodiversity = () => {
    const ListGeodiversity = [
        {id: 1, title: 'Kekar Berkolom', path: '/Geodiversity/KekarBerkolom', image: kekarberkolom1},
        {id: 2, title: 'Kekar Berlembar', path: '/Geodiversity/KekarBerlembar', image: kekarberlembar1},
        {id: 3, title: 'Lautan Terangkat', path: '/Geodiversity/LautanTerangkat', image: lautanterangkat1},
    ]

    return (
        <div>
                <HeaderDetail judul={'Geodiversity'} link={"/Beranda"}/>
                {ListGeodiversity.map((item, index) => {
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

export default Geodiversity
