import React, { useState } from 'react'
import { BiArrowBack } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import makanan from '../../../assets/makanan.png'


const Makanan = () => {
const [searchText, setSearchText] = useState('');
const items = [
    {id: 1, name: 'Nasi Kuning', image: makanan, harga: 'Rp. 10.000' },
    {id: 2, name: 'Nasi Kuning Ayam', image: makanan, harga: 'Rp. 10.000' },
    {id: 3, name: 'Pisang Goreng', image: makanan, harga: 'Rp. 10.000' },
    {id: 4, name: 'Nasi Kuning', image: makanan, harga: 'Rp. 10.000' },
    {id: 5, name: 'Nasi Kuning Ayam', image: makanan, harga: 'Rp. 10.000' },
    {id: 6, name: 'Pisang Goreng', image: makanan, harga: 'Rp. 10.000' },
    {id: 7, name: 'Nasi Kuning', image: makanan, harga: 'Rp. 10.000' },
    {id: 8, name: 'Nasi Kuning Ayam', image: makanan, harga: 'Rp. 10.000' },
    {id: 9, name: 'Pisang Goreng', image: makanan, harga: 'Rp. 10.000' },
    {id: 10, name: 'Nasi Kuning', image: makanan, harga: 'Rp. 10.000' },
    {id: 11, name: 'Nasi Kuning Ayam', image: makanan, harga: 'Rp. 10.000' },
    {id: 12, name: 'Pisang Goreng', image: makanan, harga: 'Rp. 10.000' },
    {id: 13, name: 'Nasi Kuning', image: makanan, harga: 'Rp. 10.000' },
    {id: 14, name: 'Nasi Kuning Ayam', image: makanan, harga: 'Rp. 10.000' },
    {id: 15, name: 'Pisang Goreng', image: makanan, harga: 'Rp. 10.000' },
    {id: 16, name: 'Nasi Kuning', image: makanan, harga: 'Rp. 10.000' },
    {id: 17, name: 'Nasi Kuning Ayam', image: makanan, harga: 'Rp. 10.000' },
    {id: 18, name: 'Pisang Goreng', image: makanan, harga: 'Rp. 10.000' },
];
const Food = items.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
);

return (
    <div>
        <div className='rounded-b-2xl flex w-full md:h-20 h-12 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-600'>
            <div className='flex justify-center items-center p-2'>
                <NavLink to={"/Kuliner"}>
                    <BiArrowBack size={35} style={{ color: 'white' }} className='mr-4 ml-2 text-[var(--primary-dark)]' />
                </NavLink>
                <h1 className='font-cde md:text-4xl text-xl font-bold text-white'>Makanan</h1>
            </div>
        </div>
        <div>
            <form>   
                <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"  fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                    <input type="search" id="default-search" value={searchText} onChange={(e) => setSearchText(e.target.value)} className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Food" required />
                    <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
            </form>
        </div>
<div className='p-5'>
<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
<a href="#">
<img class="p-8 rounded-t-lg w-40 h-40" src={makanan} alt="product image" />
</a>
<div class="px-5 pb-5">
<a href="#">
<h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Pisang Goreng</h5>
</a>

<div class="flex items-center justify-between">
<span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
<a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Detail</a>
</div>
</div>
</div>
</div>
        <div>
            <div className="md:grid grid-cols-3 mx-auto my-auto font-medium">
            {Food.map((item) => {
            return(
            <div className='mt-1 ml-1 mb-1 mr-1'>
            <div className="grid-rows-4 w-full inline-flex flex-col items-center justify-center px-5 border-gray-200 border-x bg-blue-700 bg-opacity-30 hover:bg-gray-50 dark:hover:bg-gray-800 group dark:border-gray-600 rounded-xl">            
            <img src={item.image} alt="/" className='md:mt-5 mt-1 md:w-28 w-14 md:h-28 h-14 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-500' />
            <div className='w-full h-full flex  items-center justify-center md:p-5 p-1'>
            <p>{item.name}</p>
            </div>
            <div className='w-full h-full flex  items-center justify-center md:p-5 p-1'>
            <p>{item.harga}</p>
            </div>
            </div>
            </div>
            )}
            )}
            </div>
        </div>

    </div>
    );
    };

export default Makanan

