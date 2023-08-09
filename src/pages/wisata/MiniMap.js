import React from 'react'
import minimap1 from '../../assets/PETA OLUHUTA GEOLOGY Coba (155X170CM).jpg'
import HeaderDetail from '../../components/wisata/HeaderDetail'

const MiniMap = () => {
    return (
    <div>
        <HeaderDetail judul={'Mini Map'} link={"/Beranda"}/>
            <img className='mb-20 mt-3 md:w-full w-full md:h-screen h-screen border-solid border-4 border-blue-500 rounded-xl' src={minimap1} alt='/'/>
    </div>
    )
}

export default MiniMap
