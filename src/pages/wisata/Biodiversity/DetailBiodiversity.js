import React from 'react'
import { useParams } from 'react-router-dom'
import { Bio } from '../../../hooks/StateWisata'
import HeaderDetail from '../../../components/wisata/HeaderDetail'
import Judul from '../../../components/wisata/Judul'

const DetailBiodiversity = () => {
    let {DetailBiodiversityID} = useParams();
    const bio = Bio.useState(s => s.bio)
    const filterData = bio.filter((item) => item.id == DetailBiodiversityID);
    const BioDetail = filterData[0]

    return (
        <div>
        <HeaderDetail judul={BioDetail.title} link={"/Biodiversity"}/>
            <Judul name={BioDetail.title}/>
            <div className='flex justify-center items-center'>
                <div className='w-screen max-w-7xl px-2 py-4'>
                    <div className=" w-full items-center justify-center border-solid border-4 border-blue-500 rounded-3xl">            
                        <img src={BioDetail.image} alt="" className='w-screen md:h-130 rounded-2xl ' />
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center px-3 mb-20'>
                <div className='w-screen md:px-5'>
                    <p className='text-justify font-cde'>
                        {BioDetail.p1}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default DetailBiodiversity
