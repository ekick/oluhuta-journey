import React, { useState } from 'react'
import HeaderDetail from '../../../components/wisata/HeaderDetail';
import { NavLink } from 'react-router-dom';
import { Makanan1 } from '../../../hooks/StateWisata';


const Makanan = () => {
const [searchText, setSearchText] = useState('');
const datamakanan = Makanan1.useState(s => s.makanan)
const Food = datamakanan.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
);

return (
    <div>
        <HeaderDetail judul={'Makanan'} link={"/Kuliner"}/>
        <div className='mt-3 px-5'>
            <form>   
                <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 " aria-hidden="true"  fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                    <input type="search" id="default-search" value={searchText} onChange={(e) => setSearchText(e.target.value)} className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search Food" required />
                    <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">Search</button>
                    </div>
            </form>
        </div>
        <div className='mb-20 px-3'>
            {Food.map((item) => {
                return(
                    <div>
                        <ul role="list" className="divide-y divide-gray-200">
                            <li className="py-3 sm:py-4">
                                <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                        <img className="w-20 h-20 rounded-full" src={item.image} alt="/" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-bold text-black">
                                        {item.name}
                                        </p>
                                        <p className="text-xs font-medium font text-black">
                                        {item.nama_warung}
                                        </p>
                                        <p className="text-sm text-black">
                                        {item.harga}
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                        <NavLink to={`/Kuliner/Makanan/${item.id}`}>
                                        <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Detail</a>
                                        </NavLink>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    <hr></hr>
                    </div>
                )}
            )}
        </div>
    </div>
    );
    };

export default Makanan

