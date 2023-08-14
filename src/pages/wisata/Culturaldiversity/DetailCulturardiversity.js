import React from 'react'
import HeaderDetail from '../../../components/wisata/HeaderDetail'
import { useParams } from 'react-router-dom'
import { Cul } from '../../../hooks/StateWisata'
import Judul from '../../../components/wisata/Judul'

const DetailCulturardiversity = () => {
    let {DetailCulturaldiversityID} = useParams();
    const cul = Cul.useState(s => s.cul)
    const filterData = cul.filter((item) => item.id == DetailCulturaldiversityID);
    const CulDetail = filterData[0]
    return (
        <div>
            <HeaderDetail judul={CulDetail.title} link={"/Culturaldiversity"}/>
            <Judul name={CulDetail.title}/>
            <div className='flex justify-center items-center'>
                <div className='w-screen max-w-7xl px-2 py-4'>
                    <div className=" w-full items-center justify-center border-solid border-4 border-blue-500 rounded-3xl">            
                        <img src={CulDetail.image} alt="" className='w-screen md:h-130 rounded-2xl ' />
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center px-3 mb-20'>
                <div className='w-screen md:px-5'>
                    <p className='text-justify font-cde'>
                        {CulDetail.p1}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default DetailCulturardiversity
