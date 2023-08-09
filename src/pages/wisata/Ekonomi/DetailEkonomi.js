import React from 'react'
import HeaderDetail from '../../../components/wisata/HeaderDetail'
import { useParams } from 'react-router-dom'
import { Eko } from '../../../hooks/StateWisata'
import Judul from '../../../components/wisata/Judul'

const DetailEkonomi = () => {
    let {DetailEkonomiID} = useParams();
    const eko = Eko.useState(s => s.eko)
    const filterData = eko.filter((item) => item.id == DetailEkonomiID);
    const EkoDetail = filterData[0]

    return (
        <div>
            <HeaderDetail judul={EkoDetail.title} link={"/Ekonomi"}/>
            <Judul name={EkoDetail.title}/>
            <div className='flex justify-center items-center'>
                <div className='w-screen max-w-7xl px-2 py-4'>
                    <div className=" w-full items-center justify-center border-solid border-4 border-blue-500 rounded-3xl">            
                        <img src={EkoDetail.image} alt="" className='w-screen md:h-130 rounded-2xl ' />
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center px-3 mb-20'>
                <div className='w-screen md:px-5'>
                    <p className='text-justify font-cde'>
                        {EkoDetail.p1}
                        <br></br>
                        {EkoDetail.p2}
                        <br></br>
                        {EkoDetail.p3}
                        <br></br>
                        {EkoDetail.p4}
                        <br></br>
                        {EkoDetail.p5}
                        <br></br>
                        {EkoDetail.p6}
                        <br></br>
                        {EkoDetail.p7}
                        <br></br>
                        {EkoDetail.p8}
                        <br></br>
                        {EkoDetail.p9}
                        <br></br>
                        {EkoDetail.p10}
                        <br></br>
                        {EkoDetail.p11}
                        <br></br>
                        {EkoDetail.p12}
                        <br></br>
                        {EkoDetail.p13}
                        <br></br>
                        {EkoDetail.p14}
                        <br></br>
                        {EkoDetail.p15}
                        <br></br>
                        {EkoDetail.p16}
                        <br></br>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default DetailEkonomi
