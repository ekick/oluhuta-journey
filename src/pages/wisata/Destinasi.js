import React from 'react'
import HeaderDetail from '../../components/wisata/HeaderDetail';
import destinasi from '../../assets/destinasi.jpg'


const Destinasi = () => {

  const Paragraf1 = `Desa Oluhuta adalah sebuah desa yang terletak  di  Kabupaten  Bone  Balango, Kecamatan Kabila Bone, Provinsi Gorontalo. Desa ini terdiri dari empat dusun diantaranya Dusun Pantai, Dusun Kampung Baru, Dusun Pemukiman, dan Dusun Huliya, dengan luas keseluruhannya yakni 1.960 hektar. Wilayah desa Oluhuta didominasi oleh perairan, hutan dan pengunungan, serta perkebunan, oleh sebab itu 52,6 penduduk setempat berprofesi sebagai petani dan 42,8 sebagai nelayan.`;
  const Paragraf2 = `Desa Oluhuta terletak berdekatan dengan Desa Botubarani juga Desa Olele yang soot inl sudah  menjadi  desa  ikonik  untuk  Provinsi Gorontalo karena potensi wisata bawah laut berupa spesies hiu pous dan terumbu karang yang langka dan cantik. Sama halnya seperti Desa Botubarani dan Olele, potensi dan pesona wisata di Desa Oluhuta tidak kalah menarik. Ada berbagai kekayaan, keunikan geologis, sejarah, serta nilai kebudayaan yang tersimpan di desa yang merupakan cagar budaya ini, antara lain terdapat situs kerangka manusia Oluhuta yang ditemukan sekitar tahun 1994 sampai dengan 2010 silam, ada pula situs lautan terangkat atau biasa dikenal dengan teras terumbu yang terhampar disepanjang pantai Oluhuta dengan aneka rupa yang menambah estetika pantai, serta jajaran Colmunar joint atau kekar kolom dengan bentuk heksagonalnya yang unik yang bisa dijumpai soot memasuki wilayah desa Oluhuta.`
  const Paragraf3 = `Di sisi lain, desa Oluhuta juga menawarkan pesona bawah laut yang tak kalah indahnya dengan desa Olele, dengan adanya Salvador Dali atau Petrosia lignosa yaitu spesies terumbu karang yang langka ditambah dengan ribuan ikan karang dan penyu, dipastikan mampu membuat setiap mata yang memandangnya menjadi terkesima oleh keindahannya.`
  const paragraf4 = `Tunggu apa apalagi? Mari mengeksplor desa Oluhuta dan dapatkan pengalaman seru dan pastinya berkesan melalui Oluhuta Journey.`
  const paragraf5 = `Oluhuta Journey: Here's your wonderful journey begin!`

  return (
    <div>
      <HeaderDetail judul={'ORI'} link={"/Beranda"}/>
      <div>
        <p className='text-center md:text-5xl text-xl font-cde font-bold md:p-5 p-0 md:mt-0 mt-3'>
          Oluhuta Introduction
        </p>
      </div>
      <div className='flex justify-center items-center'>
        <div className='w-screen max-w-7xl px-2 py-4'>
          <div className=" w-full items-center justify-center border-solid border-4 border-blue-500 rounded-3xl">            
              <img src={destinasi} alt="" className='w-screen md:h-130 rounded-2xl ' />
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center px-3'>
        <div className='w-screen md:px-5'>
          <p className='text-justify font-cde'>
            {Paragraf1}
            <br></br>
            {Paragraf2}
          </p>
        </div>
      </div>
        <div className='flex justify-center items-center mt-3 px-2'>
          <iframe
          title="Video YouTube"
          src="https://www.youtube.com/embed/W0R1VlrPAhA"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          className='rounded-3xl px-2 w-screen max-w-4xl md:h-128 h-52'>
          </iframe>
        </div>
      <div className='flex justify-center items-center px-3 mt-5 mb-20'>
        <div className='w-screen md:px-5'>
          <p className='text-justify font-cde'>
            {Paragraf3}
            <br></br>
            {paragraf4}
            <br></br>
            {paragraf5}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Destinasi
