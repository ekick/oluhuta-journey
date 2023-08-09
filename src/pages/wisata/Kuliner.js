import React from 'react'
import { NavLink } from 'react-router-dom'
import HeaderDetail from '../../components/wisata/HeaderDetail'
import { Kul } from '../../hooks/StateWisata'

const Kuliner = () => {
    const kul = Kul.useState(s => s.kul)

    return (
        <div>
            <HeaderDetail judul={'Kuliner'} link={"/Beranda"}/>
            {kul.map((item, index) => {
            return(
                <div className='' key={index}>
                    <NavLink to={`/Kuliner/${item.id}`}>
                        <ul class="max-w-md divide-y divide-gray-200 ">
                            <li class="pb-4 sm:pb-4">
                                <div class="flex items-center space-x-4">
                                    <div class="flex-shrink-0">
                                        <img class="w-14 h-14 " src={item.image} alt="/" />
                                    </div>
                                    <div class="flex-1 min-w-0">
                                        <p class="font-cde ext-sm font-medium text-black">
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

export default Kuliner
