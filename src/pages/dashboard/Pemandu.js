import React, { useState } from 'react';
import { PemanduDs } from '../../hooks/StateSpot';
import ImageUpload from '../../components/dashboard/ImageUpload';

const Pemandu = () => {

    const defaultUrl = 'https://fakeimg.pl/350x200/';
    const [image,setImage] = useState(defaultUrl);
    const [saveImage, setSaveImage] = useState(null);

    //submit data
    const dataPemandu = PemanduDs.useState((s) => s)
    const [valueInput, setValueInput] = useState({
        nama : "",
        medsos : "",
        no_hp : "",
        url_profile:{},
        link_akun:""
      })

      const handleSubmitPemandu = async (event) => {
        event.preventDefault();
        let nama = valueInput.nama;
        let medsos = valueInput.medsos;
        let no_hp = valueInput.no_hp;
        console.log(valueInput);
    }

  return (
    <div className={`p-4 sm:ml-64 `}>
        <h1 className='pl-4 text-xl'><b>Pemandu</b></h1>
        <div className="p-4 rounded-lg">
           <div className=" items-center justify-center rounded bg-gray-200 p-3">         
                    
                <form onSubmit={handleSubmitPemandu}>
                        <div className='grid gap-6 mb-6 md:grid-cols-2'>
                            <div>
                                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Nama</label>
                                <input type="text" 
                                onChange={(e) => setValueInput({...valueInput, nama : e.target.value})}
                                className=" text-m rounded-lg block w-full p-2.5 dark:bg-gray-300 dark:placeholder-gray dark:text-gray-700 dark:focus:ring-blue-500 dark:border-gray-600 dark:focus:border-blue-500" placeholder="Nama" required></input>
                            </div>
                            <div>
                                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">No Telepon</label>
                                <input type="number" 
                                onChange={(e) => setValueInput({...valueInput, no_hp : e.target.value})}
                                className=" text-m rounded-lg block w-full p-2.5 dark:bg-gray-300 dark:placeholder-gray dark:text-gray-700 dark:focus:ring-blue-500 dark:border-gray-600 dark:focus:border-blue-500" placeholder="+62" required></input>
                            </div>
                            <div>
                                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Gambar Profile</label>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <ImageUpload
                                    image={image}
                                    setImage={setImage}
                                    type={'Profile'}
                                    valueInput={valueInput}
                                    setValueInput={setValueInput}
                                    setSaveImage={setSaveImage}
                                    />
                                </div> 
                            </div>
                            <div>
                                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Sosial Media</label>
                                <input type="text" 
                                onChange={(e) => setValueInput({...valueInput, medsos : e.target.value})}
                                className=" text-m rounded-lg block w-full p-2.5 dark:bg-gray-300 dark:placeholder-gray dark:text-gray-700 dark:focus:ring-blue-500 dark:border-gray-600 dark:focus:border-blue-500" placeholder="Media Sosial" required></input>
                            </div>
                            <div>
                                <button type="submit" className="text-white mt-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Simpan</button>
                            </div>
                        </div>
                </form>

            </div> 
        </div>
    </div>
  )
}

export default Pemandu