import React from 'react'
import ikankarng1 from '../../assets/Ikan Karang1.jpg'
import pohonstigi1 from '../../assets/Pohon Stigi1.jpg'
import terumbukarang1 from '../../assets/Terumbu Karang1.jpg'
import HeaderDetail from '../../components/wisata/HeaderDetail'
import { NavLink } from "react-router-dom";

const BiodiversityWisata = () => {
   const ListBiodiversity = [
      {id: 1, title: 'Ikan Karang', path: '/Biodiversity/IkanKarang', image: ikankarng1},
      {id: 2, title: 'Pohon Stigi', path: '/Biodiversity/PohonStigi', image: pohonstigi1},
      {id: 3, title: 'Terumbu Karang', path: '/Biodiversity/TerumbuKarang', image: terumbukarang1},
   ]

   return (
      <div>
         <HeaderDetail judul={'Biodiversity'} link={"/Beranda"}/>
            {ListBiodiversity.map((item, index) => {
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

export default BiodiversityWisata
