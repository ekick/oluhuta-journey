import React, { useState } from 'react';
import HeaderDetail from '../../../components/wisata/HeaderDetail'
import HeaderModal from '../../../components/wisata/HeaderModal';
import { useParams } from 'react-router-dom'
import { DetPen } from '../../../hooks/StateWisata'
import Judul from '../../../components/wisata/Judul'
import 'react-datepicker/dist/react-datepicker.css';

const DetailPenyewaan = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
    setIsModalOpen(true);
    };

    const closeModal = () => {
    setIsModalOpen(false);
    };

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

    let {DetailPenyewaanID} = useParams();
    const detpen = DetPen.useState(s => s.detpen)
    const filterData = detpen.filter((item) => item.id == DetailPenyewaanID);
    const DetailPenyewaan = filterData[0]

    return (
        <div>
            <HeaderDetail judul={DetailPenyewaan.nama} link={"/Penyewaan"}/>
            <Judul name={DetailPenyewaan.nama}/>
            <div className='flex justify-center items-center'>
                <div className='w-screen max-w-7xl px-2 py-4'>
                    <div className=" w-full items-center justify-center border-solid border-4 border-blue-500 rounded-3xl">            
                        <img src={DetailPenyewaan.image} alt="" className='w-screen md:h-130 rounded-2xl ' />
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center px-3 mb-20'>
                <div className='w-screen md:px-5 text-justify font-cde'>
                    <p className='text-justify font-cde'>
                        <h2>{DetailPenyewaan.detail}</h2>
                        <br></br>
                        {DetailPenyewaan.pd}
                        <br></br>
                        <h2>{DetailPenyewaan.informasi}</h2>
                        <br></br>
                        {DetailPenyewaan.pi}
                        <br></br>
                        <h2>{DetailPenyewaan.syarat}</h2>
                        <br></br>
                        {DetailPenyewaan.ps}
                        <br></br>
                    </p>
                    <div className=''>
                        <h2 className='mb-5'>Pilih Waktu Waktu Penyewaan</h2>
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
                                    <div className='border-2 border-indigo-600 w-fit rounded-xl'>
                                        <div className='p-5 justify-center items-center'>
                                            <h2 className='text-base text-center'>Nota Penyewaan {DetailPenyewaan.nama}: </h2>
                                            <div className='text-justify p-5'>
                                                <p> Nama Penyewa :</p>
                                                <p>Jumlah Hari Sewa : {calculateRentDays()} hari</p>
                                                <p> Harga : Rp.{calculateRentDays()* DetailPenyewaan.harga_sewa} </p>
                                            </div>
                                            <p className='font-semibold text-center'>Note: Perlihatkan Kepada Petugas Saat Mau Masuk</p>
                                            <div className="flex justify-center items-center w-full mt-5">
                                                <button onClick={openModal} type="button" className="w-fit inline-flex flex-col items-center justify-center px-5 border-gray-200 border-x bg-blue-700 bg-opacity-30 hover:bg-gray-50 dark:hover:bg-gray-800 group dark:border-gray-600 rounded-xl text-black font-cde md:text-4xl text-base">
                                                Bayar Sekarang Rp.{calculateRentDays()* DetailPenyewaan.harga_sewa}
                                                </button>
                                                {isModalOpen && (
                                                    <div style={{padding: '10px', position: 'fixed',top: '0',left: '0', width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center',alignItems: 'center',}} >
                                                        <div style={{ background: 'white', padding: '10px', borderRadius: '10px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',}}>
                                                        <HeaderModal judul={DetailPenyewaan.nama}/>
                                                            <div className='p-5'>
                                                                <h2>Yakin Ingin Melanjutkan Transaksi Ini !</h2>
                                                                <p>Alamat :</p>
                                                                <p>No. WhatsApp :</p>
                                                                <p>Total Pembayaran : Rp.{calculateRentDays()* DetailPenyewaan.harga_sewa} </p>
                                                            </div>
                                                        <div className='w-full flex justify-center items-center space-x-5'>
                                                        <button className='rounded-xl' onClick={closeModal}>Kembali</button>
                                                        <button className='rounded-xl'>Lanjut WA</button>
                                                        </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )}
                                </div>
                            <div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailPenyewaan
