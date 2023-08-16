import React, { useState } from 'react';
import ImageUpload from '../../components/dashboard/ImageUpload';
import { SpotWisataState } from '../../hooks/StateSpot';

const CulturaldiversityDashboard = () => {
    const defaultUrl = 'https://fakeimg.pl/350x200/';     
    const [image,setImage] = useState(defaultUrl);
    const [imageQR,setImageQR] = useState(defaultUrl);
    const [saveImage, setSaveImage] = useState(null);
    const [saveImageQR, setSaveImageQR] = useState(null);

    //submit data
    const dataCultural = SpotWisataState.useState((s) => s)
    const [valueInput, setValueInput] = useState({
        nama : "",
        deskripsi : "",
        gambar_spot:{},
        gambar_qr:{},
      })

      const handleSubmitCultural = async (event) => {
        event.preventDefault();
        let nama = valueInput.nama;
        let deskripsi = valueInput.deskripsi;
        console.log(valueInput);
    }

  return (
    <div className={`p-4 sm:ml-64 `}>
        <h1 className='pl-4 text-xl'><b>Culturaldiversity</b></h1>
        <div className="p-4 rounded-lg">
           <div className=" items-center justify-center rounded bg-gray-200 p-3">     
                
                <form onSubmit={handleSubmitCultural}>
                    <div class="grid grid-flow-col gap-4">
                        <div className="row-span-3">
                            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Gambar Spot Wisata</label>
                            <div className='d-flex justify-content-center align-items-center'>
                                <ImageUpload
                                image={image}
                                setImage={setImage}
                                valueInput={valueInput}
                                type={'Gambar'}
                                setValueInput={setValueInput}
                                setSaveImage={setSaveImage}
                                />
                            </div> 
                            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Gambar QR Code</label>
                            <div>
                                <ImageUpload
                                image={imageQR}
                                setImage={setImageQR}
                                valueInput={valueInput}
                                type={'QR'}
                                setValueInput={setValueInput}
                                setSaveImage={setSaveImageQR}
                                />
                            </div>
                        </div>

                        <div className="col-span-2">
                            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                                Nama Culturaldiversity
                            </label>
                            <input type="text" 
                            onChange={(e) => setValueInput({...valueInput, nama : e.target.value})}
                            className=" text-m rounded-lg block w-full p-2.5 dark:bg-gray-300 dark:placeholder-gray dark:text-gray-700 dark:focus:ring-blue-500 dark:border-gray-600 dark:focus:border-blue-500" placeholder="Nama Wisata" required/>
                        </div>

                        <div className="row-span-2 col-span-2">
                            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                                keterangan Culturaldiversity
                            </label>
                            <textarea rows="4" onChange={(e) => setValueInput({...valueInput, deskripsi : e.target.value})}
                            className="block p-2.5 w-full text-sm text-gray-900 dark:bg-gray-300 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukan keterangan Culturaldiversity"/>
                            <button type='submit'
                            className="text-white mt-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Simpan</button>
                        </div>
                    </div>
                </form>

            </div> 
        </div>
    </div>
  )
}

export default CulturaldiversityDashboard