import React from 'react'
import { useParams } from 'react-router-dom'
import { Geo, Bio, Cul } from '../../hooks/StateWisata'
import HeaderDetail from '../../components/wisata/HeaderDetail'
import Judul from '../../components/wisata/Judul'

const DeskripsiSpot = () => {
    let {KategoriSpotID, SpotID} = useParams();
    const geo = Geo.useState(s => s.geo)
    const bio = Bio.useState(s => s.bio)
    const cul = Cul.useState(s => s.cul)
    let filterData, data
    
    if (KategoriSpotID == 'Geodiversity') {
        filterData = geo.filter((item) => item.id == SpotID);
        data = filterData[0]
    } else if (KategoriSpotID == 'Biodiversity') {
        filterData = bio.filter((item) => item.id == SpotID);
        data = filterData[0]
    } else if (KategoriSpotID == 'Culturaldiversity') {
        filterData = cul.filter((item) => item.id == SpotID);
        data = filterData[0]
    }

    return (
        <div>
        <HeaderDetail judul={data.title} link={`/ListSpot/${KategoriSpotID}`}/>
            <Judul name={data.title}/>
            <div className='flex justify-center items-center'>
                <div className='w-screen max-w-7xl px-2 py-4'>
                    <div className=" w-full items-center justify-center border-solid border-4 border-blue-500 rounded-3xl">            
                        <img src={data.image} alt="" className='w-screen md:h-130 rounded-2xl ' />
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center px-3 mb-20'>
                <div className='w-screen md:px-5'>
                    <p className='text-justify font-cde'>
                        {data.p1}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default DeskripsiSpot
