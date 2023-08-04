import React, { useState } from 'react';
import snorekling from '../../../assets/Peralatan Snorkling.jpg'
import HeaderDetail from '../../../components/wisata/HeaderDetail'
import Judul from '../../../components/wisata/Judul';
import 'react-datepicker/dist/react-datepicker.css';
import { DetailSnorekling, InformasiSnorekling, SyaratdanKetentuan } from '../../../hooks/StateAuth';

const DetailPenyewaanSnorekling = () => {
    
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const handleChangeStartDate = (event) => {
            setStartDate(event.target.value);
    };
    const handleChangeEndDate = (event) => {
            setEndDate(event.target.value);
    };
    const calculateRentDays = () => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const timeDiff = Math.abs(end.getTime() - start.getTime());
        const rentDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        return rentDays;
    };
    const dataSnorekling = DetailSnorekling.useState(s => s.detailsnorekling)
    const data2Snorekling = InformasiSnorekling.useState(s => s.informasisnorekling)
    const data3Snorekling =SyaratdanKetentuan.useState(s => s.syaratdanketentuan)

    return (
        <div>
            <HeaderDetail judul={'Detail Penyewaan Alat'} link={"/Penyewaan/"}/>
            <Judul name={'Alat Snorekling'}/>
            <div className='flex justify-center items-center'>
                <div className='w-screen max-w-7xl px-2 py-4'>
                    <div className=" w-full items-center justify-center border-solid border-4 border-blue-500 rounded-3xl">            
                        <img src={snorekling} alt="" className='w-screen md:h-128 rounded-2xl ' />
                    </div>
                </div>
            </div>
                <div className='flex justify-center items-center px-3 mb-20'>
                    <div className='w-screen md:px-5 text-justify font-cde'>
                    <h2>Deskripsi</h2>
                    {dataSnorekling.map((item) => {
                    return(
                    <p className=''>
                        {item.title}
                        <br></br>
                    </p>
                    )}
                    )}
                    <h2>Informasi Fasilitas</h2>
                    {data2Snorekling.map((item) => {
                    return(
                    <p className=''>
                        {item.title}
                        <br></br>
                    </p>
                    )}
                    )}
                    <h2>Syarat Dan Ketentuan</h2>
                    {data3Snorekling.map((item) => {
                    return(
                    <p className=''>
                        {item.title}
                        <br></br>
                    </p>
                    )}
                    )}
                    <div className=''>
                        <h2>Pilih Waktu Waktu Penyewaan</h2>
                        <p>Tanggal Mulai</p>
                            <div className='p-3'>
                                <input type="date" value={startDate} onChange={handleChangeStartDate} />
                            </div>
                        <p>Tanggal Selesai</p>
                            <div className='p-3'>
                                <input type="date" value={endDate} onChange={handleChangeEndDate} />
                            </div>
                        <div className='flex justify-center items-center'>
                        {startDate && endDate && (
                            <div className='border-2 border-indigo-600 w-fit'>
                                <div className='p-5 justify-center items-center'>
                                    <h2 className='text-base'>Nota Penyewaan Alat Snorekling: </h2>
                                        <div className='text-justify p-5'>
                                        <p> Nama Penyewa :</p>
                                        <p>Jumlah Hari Sewa : {calculateRentDays()} hari</p>
                                        <p> Harga : Rp.{calculateRentDays()* 20000} </p>
                                        </div>
                                    <p className='font-semibold'>Note: Perlihatkan Kepada Petugas Saat Mau Masuk</p>
                                        <div className="flex justify-center items-center w-full mt-5">
                                            <button type="button" className="w-fit inline-flex flex-col items-center justify-center px-5 border-gray-200 border-x bg-blue-700 bg-opacity-30 hover:bg-gray-50 dark:hover:bg-gray-800 group dark:border-gray-600 rounded-xl text-black font-cde md:text-4xl text-base">
                                            Bayar Sekarang Rp.{calculateRentDays()*20000}
                                            </button>
                                        </div>
                                </div>
                            </div>
                        )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailPenyewaanSnorekling
