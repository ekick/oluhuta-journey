import React from 'react'
import HeaderDetail from '../../components/wisata/HeaderDetail'
import { NavLink } from 'react-router-dom'
import { DetPen } from '../../hooks/StateWisata'

const Penyewaan = () => {
const detpen = DetPen.useState(s => s.detpen)

    return (
        <div>
            <HeaderDetail judul={'Penyewaan'} link={"/Beranda"}/>
                {detpen.map((item, index) => {
                return(
                    <div className='' key={index}>
                        <NavLink to={`/Penyewaan/${item.id}`}>
                            <ul class="max-w-md divide-y divide-gray-200">
                                <li class="pb-4 sm:pb-4">
                                    <div class="flex items-center space-x-4">
                                        <div class="flex-shrink-0">
                                            <img class="w-14 h-14 rounded-xl" src={item.image} alt="/" />
                                        </div>
                                        <div class="flex-1 min-w-0">
                                            <p class="font-cde text-sm font-medium text-black ">
                                            {item.nama}
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
