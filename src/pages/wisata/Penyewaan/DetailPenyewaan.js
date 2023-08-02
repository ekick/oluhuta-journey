import React from 'react'
import snorekling from '../../../assets/Peralatan Snorkling.jpg'
import HeaderDetail from '../../../components/wisata/HeaderDetail'

const DetailPenyewaan = () => {

    const DetailPenyewaanSnoreklingparagraf1 = `Temukan keindahan bawah laut dengan alat snorkeling kami yang inovatif. Rasakan sensasi menyelam dalam kedamaian air biru dan jelajahi dunia bawah permukaan dengan kejernihan yang menakjubkan. Nikmati petualangan tanpa batas dengan alat snorkeling terbaik kami, cocok untuk pemula hingga ahli.`
    const DetailPenyewaanSnoreklingparagraf2 = `Dapatkan pengalaman snorkeling tak terlupakan dengan alat berkualitas tinggi kami, yang dirancang untuk kenyamanan, keamanan, dan ketahanan. Segera dapatkan alat snorkeling kami dan buatlah momen indah bersama keluarga dan teman-teman di perairan indah favorit Anda`
    const DetailPenyewaanSnoreklingparagraf3 = `Snorkel adalah tabung berongga yang dipasang di bagian atas masker selam untuk memungkinkan pengguna bernapas di permukaan air tanpa harus mengangkat kepala. Ini mengurangi kebutuhan untuk mengangkat kepala dari air untuk bernapas, memungkinkan penyelam untuk tetap tenggelam.`
    const DetailPenyewaanSnoreklingparagraf4 = `Kaki katak adalah sepatu khusus yang dirancang dengan sirip di bagian bawahnya. Sirip ini membantu penyelam untuk bergerak dengan mudah dan efisien di dalam air, memberikan daya dorong ekstra yang memungkinkan penyelam untuk berenang lebih cepat dan menghemat energi.`
    const DetailPenyewaanSnoreklingparagraf5 = `Masker selam adalah perangkat yang menutupi mata, hidung, dan sebagian wajah untuk memungkinkan penyelam melihat dengan jelas di bawah permukaan air. Masker ini biasanya memiliki lensa kaca atau polikarbonat yang tahan terhadap air laut dan memungkinkan pandangan yang jernih.`
    const DetailPenyewaanSnoreklingparagraf6 = `Pelampung ini dirancang untuk dipakai di sekitar tubuh atau dada penyelam. Biasanya berbentuk seperti jaket atau bantalan yang terbuat dari bahan ringan dan tahan air. Pelampung ini memberikan dukungan ekstra untuk membantu penyelam berapung di permukaan air dengan mudah tanpa perlu banyak usaha berenang.`
    const DetailPenyewaanSnoreklingparagraf7 = `Sebagai syarat dan batasan dalam menyewa alat snorkeling, berikut beberapa poin yang perlu diperhatikan penyewa :`
    const DetailPenyewaanSnoreklingparagraf8 = `1. Penyewa diharuskan untuk menunjukkan identifikasi yang sah dan berlaku sebelum menyewa alat`
    const DetailPenyewaanSnoreklingparagraf9 = `2. Penyewa harus mematuhi semua aturan keamanan yang ditetapkan oleh atau petugas snorkeling. Ini termasuk pemakaian jaket pelampung dan selalu berenang bersama teman atau pasangan jika snorkeling di laut terbuka.`
    const DetailPenyewaanSnoreklingparagraf10 = `3. Sebelum menyewa, penyewa harus memeriksa kondisi alat snorkeling dan memastikan semuanya berfungsi dengan baik. Jika ada kerusakan atau masalah, laporkan kepada penyewa segera untuk mendapatkan penggantian atau perbaikan.`
    const DetailPenyewaanSnoreklingparagraf11 = `4. Penyewa bertanggung jawab atas alat snorkeling yang disewa selama periode waktu yang ditentukan. Jika ada kerusakan atau kehilangan akibat kelalaian atau penggunaan yang salah, penyewa harus menggantinya sesuai dengan kebijakan penyewa.`
    const DetailPenyewaanSnoreklingparagraf12 = `5.	Pastikan penyewa mengembalikan alat snorkeling sesuai dengan waktu yang disepakati. Keterlambatan pengembalian dapat mengakibatkan biaya tambahan atau denda.`
    const DetailPenyewaanSnoreklingparagraf13 = ``
    const DetailPenyewaanSnoreklingparagraf14 = ``

    return (
        <div>
            <HeaderDetail judul={'Detail Penyewaan'} link={"/Penyewaan/"}/>
            <div>
                <p className='text-center md:text-5xl text-xl font-cde font-bold md:p-5 p-0 md:mt-0 mt-3'>
                Alat Snorekling
                </p>
            </div>
            <div className='flex justify-center items-center'>
                <div className='w-screen max-w-7xl px-2 py-4'>
                    <div className=" w-full items-center justify-center border-solid border-4 border-blue-500 rounded-3xl">            
                        <img src={snorekling} alt="" className='w-screen md:h-128 rounded-2xl ' />
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center px-3 mb-20'>
                <div className='w-screen md:px-5'>
                    <p className='text-justify font-cde'>
                        <h2>Deskripsi</h2>
                        <br></br>
                        {DetailPenyewaanSnoreklingparagraf1}
                        <br></br>
                        {DetailPenyewaanSnoreklingparagraf2}
                        <br></br>
                        <h2 className='mt-3'>Informasi Fasilitas</h2>
                        <br></br>
                        <h3 className='font-bold'>1. Snorkel</h3>
                        {DetailPenyewaanSnoreklingparagraf3}
                        <br></br>
                        <h3 className='font-bold'>2. Kaki Katak (Fins/Flipper)</h3>
                        {DetailPenyewaanSnoreklingparagraf4}
                        <br></br>
                        <h3 className='font-bold'>3. Masker Selam</h3>
                        {DetailPenyewaanSnoreklingparagraf5}
                        <br></br>
                        <h3 className='font-bold'>4. Pelampung Tubuh (Body Float)</h3>
                        {DetailPenyewaanSnoreklingparagraf6}
                        <br></br>
                        <h2 className='mt-3'>Syarat Dan Ketentuan</h2>
                        <br></br>
                        {DetailPenyewaanSnoreklingparagraf7}
                        <br></br>
                        {DetailPenyewaanSnoreklingparagraf8}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default DetailPenyewaan
