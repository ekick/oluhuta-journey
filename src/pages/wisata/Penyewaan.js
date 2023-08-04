import React from 'react'
import HeaderDetail from '../../components/wisata/HeaderDetail'
import { NavLink } from 'react-router-dom'
import alatsnorekling from '../../assets/snorkel.png'
import alatcamping from '../../assets/camping.png'
import kamerabawahlaut from '../../assets/underwater-camera.png'
import perahukaca from '../../assets/perahu.png'

const Penyewaan = () => {
    const ListPenyewaan = [
        {id: 1, title: 'Alat Snorekling', path: '/Penyewaan/DetailPenyewaanSnorekling', image: alatsnorekling},
        {id: 2, title: 'Alat Camping', path: '/Penyewaan/AlatCamping', image: alatcamping},
        {id: 3, title: 'Kamera Bawah Laut', path: '/Penyewaan/KameraBawahLaut', image: kamerabawahlaut},
        {id: 4, title: 'Perahu Kaca', path: '/Penyewaan/PerahuKaca', image: perahukaca},
    ]

    return (
        <div>
            <HeaderDetail judul={'Penyewaan'} link={"/Beranda"}/>
                {ListPenyewaan.map((item, index) => {
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
                                            <p class="font-cde text-sm font-medium text-black ">
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

export default Penyewaan
