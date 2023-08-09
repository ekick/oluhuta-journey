import React from 'react'
import HeaderDetail from '../../components/wisata/HeaderDetail'
import { Eko } from '../../hooks/StateWisata'
import { NavLink } from 'react-router-dom'

const Ekonomi = () => {
    const eko = Eko.useState(s => s.eko)

    return (
        <div>
            <HeaderDetail judul={'Ekonomi'} link={"/Beranda"}/>
            {eko.map((item, index) => {
            return(
                <div className='' key={index}>
                    <NavLink to={`/Ekonomi/${item.id}`}>
                        <ul class="max-w-md divide-y divide-gray-200">
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

export default Ekonomi
