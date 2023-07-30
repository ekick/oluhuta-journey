import React, { useState } from 'react'
import { BiArrowBack } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';

const Makanan = () => {
const [searchText, setSearchText] = useState('');
const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
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
        <div>
            <ul>
                {Food.map((item) => (
                <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    </div>
    );
    };

export default Makanan

