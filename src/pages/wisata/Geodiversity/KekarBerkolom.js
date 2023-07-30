import React from 'react'
import { NavLink } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
import kekarberkolom from '../../../assets/Kekar Berkolom2.jpg'

const KekarBerkolom = () => {
    const Paragraf1 = `Kekar kolom adalah struktur batuan yang terbentuk karena pembekuan magma atau lava dengan cepat. Proses terbentuknya columnar joint dimulai ketika batuan lava atau batuan beku mencair dan mengalir selama letusan gunung berapi. Saat lapisan luar batuan tersebut cepat mendingin, terjadi kontraksi yang menyebabkan retakan-retakan membentuk pola kolom-kolom yang khas. Pada umumnya berbentuk kotak atau heksagon. Biasanya, kolom-kolom ini memiliki ukuran yang seragam dan tatanan yang rapi, yang memberikan kesan visual menarik sehingga terlihat seolah-olah oleh buatan manusia. Namun, sebenarnya situs geologi kekar kolom adalah murni hasil buatan alam.`;
    const Paragraf2 = `Situs geologi yang disebut sebagai jejak peradaban tertua di dunia ini juga dapat ditemukan di Desa Oluhuta, Kecamatan Kabila Bone, Kabupaten Bolango, Provinsi Gorontalo, Indonesia.`
    const Paragraf3 = `Keberadaan Kekar kolom di Desa Oluhuta ini terletak pada lereng gungung sekitar 2 meter dengan jarak jalan trans Desa Oluhuta.`
    const paragraf4 = `Dalam proses pembentukannya yang sangat unik Kekar kolom masuk dalam potensi geowisata di Desa Oluhuta. Untuk mengembangkan potensi geologi tersebut, kekar kolom memerlukan pendampingan dari pihak-pihak yang memiliki akses ke potensi tersebut dan memiliki pengetahuan yang luas tentang potensi tersebut. Hal ini disebabkan oleh fakta bahwa wisata alam tertentu terbatas atau eksklusif pada beberapa wilayah. Selain itu, wisata alam mudah rusak oleh hal-hal dalam dan luar. Jika sudah rusak, akan sangat sulit atau bahkan tidak mungkin untuk mengembalikannya. Mengingat kekar kolom terbentuk oleh proses geologis yang berlangsung selama jutaan tahun. Akibatnya, upaya konservasi diperlukan untuk menjaga dan melestarikan potensi geologi kekar kolom dengan melibatkan pihak-pihak terkait seperti pemerintah, masyarakat lokal, ilmuwan dan pihak-pihak terkait lainnya.`
    const paragraf5 = `Pendampingan oleh pihak-pihak yang memiliki pengetahuan yang komprehensif tentang kekar kolom juga sangat diperlukan. Ilmuwan dan ahli geologi dapat memberikan wawasan mendalam mengenai aspek-aspek penting, seperti proses pembentukan, kondisi lingkungan, dan upaya pencegahan kerusakan lebih lanjut. Selain itu, partisipasi masyarakat lokal penting dalam merawat dan menjaga kelestarian kekar Kolom mengingat kekar kolom tersebut merupakn keunikan fitur geologi tersendiri bagi Desa Oluhuta.`
    const paragraf6 = `Tidak hanya itu, pengembangan akses yang berkelanjutan juga harus menjadi perhatian. Jika tidak diatur dengan baik, peningkatan kunjungan ke lokasi wisata alam yang berlokasi di Desa Oluhuta ini dapat mengakibatkan dampak negatif, seperti kerusakan lingkungan, atau kerusakan flora dan fauna setempat. Oleh karena itu, perencanaan yang matang harus dilakukan untuk menghindari efek merugikan pada lingkungan.`
    const paragraf7 = `Upaya konservasi dalam bentuk edukasi juga perlu dilakukan kepada para pengunjung. Menyediakan informasi tentang pentingnya pelestarian kekar kolom dan bagaimana setiap individu dapat berkontribusi dalam menjaga kelestariannya hingga dapat membantu meningkatkan kesadaran dan kepedulian terhadap keberlangsungan situs geologi kekar kolom untuk menarik daya tarik pengunjung wisata lokal maupun internasional.`
    const paragraf8 = `Oleh karena itu kolaborasi internasional juga dapat menjadi langkah maju dalam upaya konservasi ini. Melibatkan komunitas internasional dan mempertukarkan pengetahuan serta pengalaman dalam melestarikan kekayaan geologi sehingga dapat memberikan manfaat jangka panjang bagi kekar kolom dan wilayah Desa Oluhuta.`

    return (
        <div>
            <div className='rounded-b-2xl flex w-full md:h-20 h-12 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-600'>
                <div className='flex justify-center items-center p-2'>
                    <NavLink to={"/Geodiversity"}>
                        <BiArrowBack size={30} className='mr-4 ml-2 text-[var(--primary-dark)]' />
                    </NavLink>
                <h1 className='font-cde md:text-4xl text-xl font-bold text-black'>Kekar Berkolom</h1>
                </div>
            </div>
            <div>
                <p className='text-center md:text-5xl text-xl font-cde font-bold md:p-5 p-0 md:mt-0 mt-3'>
                    Kekar Berkolom
                </p>
            </div>
            <div className='flex justify-center items-center'>
                <div className='w-screen max-w-7xl px-2 py-4'>
                    <div className=" w-full items-center justify-center border-solid border-4 border-blue-500 rounded-3xl">            
                        <img src={kekarberkolom} alt="" className='w-screen md:h-130 rounded-2xl ' />
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center px-3 mb-20'>
                <div className='w-screen md:px-5'>
                    <p className='text-justify font-cde'>
                        {Paragraf1}
                        <br></br>
                        {Paragraf2}
                        <br></br>
                        {Paragraf3}
                        <br></br>
                        {paragraf4}
                        <br></br>
                        {paragraf5}
                        <br></br>
                        {paragraf6}
                        <br></br>
                        {paragraf7}
                        <br></br>
                        {paragraf8}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default KekarBerkolom
