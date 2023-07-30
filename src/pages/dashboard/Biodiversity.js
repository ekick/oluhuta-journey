import React from 'react'

const Biodiversity = () => {
  return (
    <div className={`p-4 sm:ml-64`}>
        <h1 className='pl-4 text-xl'><b>Biodiversity</b></h1>
        <div className="p-4 rounded-lg">
        {/* <div className="p-4 rounded-lg mt-20"> */}
           <div className=" items-center justify-center rounded bg-gray-200 p-3">         
                    
                <form>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Nama Biodiversity</label>
                            <input type="text" className=" text-m rounded-lg block w-full p-2.5 dark:bg-gray-300 dark:placeholder-gray dark:text-gray-700 dark:focus:ring-blue-500 dark:border-gray-600 dark:focus:border-blue-500" placeholder="Biodiversity" required></input>
                        </div>
                        <div>
                            <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Gambar Objek (Biodiversity)</label>
                            <input type="file" className=" text-sm rounded-lg block w-full p-2.5 dark:bg-gray-300 dark:placeholder-black dark:text-gray-700 dark:focus:ring-blue-500 dark:border-gray-600 dark:focus:border-blue-500" required></input>
                        </div>
                    </div>
                    <div className="grid gap-6 mb-6">
                        <div>
                            <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Gambar QR Code</label>
                            <input type="file" className=" text-sm rounded-lg block w-full p-2.5 dark:bg-gray-300 dark:placeholder-black dark:text-gray-700 dark:focus:ring-blue-500 dark:border-gray-600 dark:focus:border-blue-500" required></input>
                        </div>
                    </div>
                    <div>
                        <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">keterangan Objek Biodiversity</label>
                        <textarea rows="4" class="block p-2.5 w-full text-sm text-gray-900 dark:bg-gray-300 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukan keterangan objek biodiversity..."></textarea>
                    </div>
                    <div>
                        <button type="submit" className="text-white mt-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Simpan</button>
                    </div>
                </form>

            </div> 
        </div>
    </div>
  )
}

export default Biodiversity