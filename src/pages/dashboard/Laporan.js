import React from 'react';
import {BsFillFilePersonFill} from "react-icons/bs";
import {GiIsland} from "react-icons/gi";
import {AiFillShop} from "react-icons/ai";
import {BsFillTrashFill} from "react-icons/bs"
import {BiSolidReport} from "react-icons/bi"
import { SpotWisataState } from '../../hooks/StateSpot'
// import BarChart from "components/chart/BarChart"; 
// // import {barChartData, barChartOptions} from "variables/charts";
// import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const Laporan = () => {
   const data = SpotWisataState.useState((s) => s.data);
    return (
      <div className={`p-4 sm:ml-64 `}>
         <h1 className='pl-4 text-xl'><b>Laporan</b></h1>
         <div className="p-4 rounded-lg">
           {/* <div className="p-4 rounded-lg mt-14"> */}
               <div className=" items-center justify-center rounded bg-gray-200 p-3">  
                  Laporan
                  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                     <table  class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 light:bg-gray-500 dark:text-gray-400">
                              <tr>
                                 <th scope="col" className="p-4">
                                    <div className="flex items-center">
                                          No
                                    </div>
                                 </th>
                                 <th scope="col" className="px-6 py-3">
                                    th1
                                 </th>
                                 <th scope="col" className="px-6 py-3">
                                    th2
                                 </th>
                                 <th scope="col" className="px-6 py-3">
                                    th3
                                 </th>
                                 <th scope="col" className="px-6 py-3">
                                    th4
                                 </th>
                                 <th scope="col" className="px-6 py-3">
                                    Aksi
                                 </th>
                              </tr>
                              
                        </thead>
                        <tbody>
                              <tr className="bg-white border-b light:bg-gray-800 light:border-gray-800 ">
                                 <td className="w-4 p-4">
                                    1
                                 </td>
                                 <td className="px-6 py-4">
                                    asd
                                 </td>
                                 <td className="px-6 py-4">
                                   asd
                                 </td>
                                 <td className="px-6 py-4">
                                    asd
                                 </td>
                                 <td className="px-6 py-4">
                                    asda
                                 </td>
                                 <td className="px-6 py-4">
                                    <a href="#" className="font-medium text-red-500"><BsFillTrashFill/></a>
                                 </td>
                              </tr>
                        </tbody>
                     </table>
                        
                     <nav className="flex items-center justify-between p-4" aria-label="Table navigation">
                        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Showing <span className="font-semibold text-gray-900 dark:text-white">1-10</span> of <span className="font-semibold text-gray-900 dark:text-white">1000</span></span>
                        <ul className="inline-flex -space-x-px text-sm h-8">
                              <li>
                                 <a href="#" className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                              </li>
                              <li>
                                 <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                              </li>
                              <li>
                                 <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                              </li>
                              <li>
                                 <a href="#" aria-current="page" className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                              </li>
                              <li>
                                 <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                              </li>
                              <li>
                                 <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                              </li>
                              <li>
                                 <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                              </li>
                        </ul>
                     </nav>
                  </div> 
                  <div>
                     <button type="submit" className="text-white mt-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <BiSolidReport size={23} className='min-w-max float-left pr-1'/>Download
                     </button>
                  </div>
               </div>
               
               <div className=" items-center justify-center rounded bg-gray-200 p-3 mt-5">  
                  Laporan
                  
                  <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                     <table  className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 light:bg-gray-500 dark:text-gray-400">
                              <tr>
                                 <th scope="col" className="p-4">
                                    <div className="flex items-center">
                                          No
                                    </div>
                                 </th>
                                 <th scope="col" className="px-6 py-3">
                                    th1
                                 </th>
                                 <th scope="col" className="px-6 py-3">
                                    th2
                                 </th>
                                 <th scope="col" className="px-6 py-3">
                                    th3
                                 </th>
                                 <th scope="col" className="px-6 py-3">
                                    th4
                                 </th>
                                 <th scope="col" className="px-6 py-3">
                                    Aksi
                                 </th>
                              </tr>
                              
                        </thead>
                        <tbody>
                              <tr className="bg-white border-b light:bg-gray-800 light:border-gray-800 ">
                                 <td className="w-4 p-4">
                                    1
                                 </td>
                                 <td className="px-6 py-4">
                                    asd
                                 </td>
                                 <td className="px-6 py-4">
                                   asd
                                 </td>
                                 <td className="px-6 py-4">
                                    asd
                                 </td>
                                 <td className="px-6 py-4">
                                    asda
                                 </td>
                                 <td className="px-6 py-4">
                                    <a href="#" className="font-medium text-red-500"><BsFillTrashFill/></a>
                                 </td>
                              </tr>
                        </tbody>
                     </table>
                        
                     <nav className="flex items-center justify-between p-4" aria-label="Table navigation">
                        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Showing <span className="font-semibold text-gray-900 dark:text-white">1-10</span> of <span className="font-semibold text-gray-900 dark:text-white">1000</span></span>
                        <ul className="inline-flex -space-x-px text-sm h-8">
                              <li>
                                 <a href="#" className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                              </li>
                              <li>
                                 <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                              </li>
                              <li>
                                 <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                              </li>
                              <li>
                                 <a href="#" aria-current="page" className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                              </li>
                              <li>
                                 <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                              </li>
                              <li>
                                 <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                              </li>
                              <li>
                                 <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                              </li>
                        </ul>
                     </nav>
                  </div> 
                  <div>
                     <button type="submit" className="text-white mt-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <BiSolidReport size={23} className='min-w-max float-left pr-1'/>Download
                     </button>
                  </div>
               </div>
           </div>
      </div>
    )
  }
  
  export default Laporan
