import React, { useEffect, useState } from 'react';
import XLSX from 'xlsx'

import {BsFillTrashFill} from "react-icons/bs"
import {BiSolidReport} from "react-icons/bi"

import { getArrData, getData } from '../../components/dashboard/mockData';

export const Laporan = () => {
   //    const [fileName, setFileName] = useState(null);
   //    const [columns, setColumns] = useState([]);
   //    const handleFile = async(e) =>{
   //    const file = e.target.files[0];
   //    const datafile = await file.arrayBuffer();
   //    const workbook = XLSX.readFile(datafile, {sheetRows:5});

   //    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
   //    const jsonData = XLSX.utils.sheet_to_json(worksheet, {
   //       header:1,
   //       defval:""
   //    });

   //    setColumns(jsonData[0]);
   //    console.log(jsonData);
   //  }

    const [sheetData, setSheetData] = useState(null);
    const [sheetArrData, setSheetArrData] = useState(null);

    useEffect(()=>{
      setSheetData(getData());
      setSheetArrData(getArrData());
    },[]);

    const handleOnExport = () => {
      var wb = XLSX.utils.book_new(),
      ws = XLSX.utils.aoa_to_sheet(sheetData);
      XLSX.utils.book_append_sheet(wb, ws, "MySheet1");
      XLSX.writeFile(wb, "DataPengunjung.xlsx");
    };

    const handleOnArrExport = () => {
      var wb = XLSX.utils.book_new(),
      ws = XLSX.utils.aoa_to_sheet(sheetArrData);
      XLSX.utils.book_append_sheet(wb, ws, "MySheet1");
      XLSX.writeFile(wb, "DataPenyewaan.xlsx");
    };

    return (
      <div className={`p-4 sm:ml-64 `}>
         <h1 className='pl-4 text-xl'><b>Laporan</b></h1>
{/* 
         <div>
            <h1>ParseExcel</h1>
            {fileName &&(
               <React.Fragment>
               <p>
                  FileName: <span>{fileName}</span>
               </p>
               <p>
                  Columns: {""}
                  <select>
                     {columns.map((c) =>(
                        <option value={c}>{c}</option>
                     ))}
                  </select>
               </p>
               </React.Fragment>
            )}
            <input type='file' onChange={(e)=>handleFile(e)}/>
         </div> */}

         <div className="p-4 rounded-lg">
           {/* <div className="p-4 rounded-lg mt-14"> */}
               <div className=" items-center justify-center rounded bg-gray-200 p-3 mb-3">  
                  Data Pengunjung
                  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                     {sheetData &&(
                        <table  className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                           <thead className="text-white mt-3 bg-blue-700 rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 ">
                                 <tr>
                                    {sheetData[0].map((h)=>(
                                       <th scope="col" className="p-4" key={h}>
                                          <div className="flex items-center">
                                             {h}
                                          </div>
                                       </th>
                                    ))}
                                 </tr>
                           </thead>
                           <tbody>
                              {sheetData.slice(1).map((row)=>(
                                 <tr className="bg-white border-b light:bg-gray-800 light:border-gray-800 ">
                                    {row.map((c)=>(
                                       <td className="w-4 p-4 text-black">{c}</td>
                                    ))}
                                 </tr>
                              ))}
                           </tbody>
                        </table>
                     )}
                        
                     <nav className="flex items-center justify-between p-4" aria-label="Table navigation">
                        <div>
                           <button type="submit" onClick={handleOnExport} className="text-white mt-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                              <BiSolidReport size={23} className='min-w-max float-left pr-1'/>Download
                           </button>
                        </div>
                     </nav>
                  </div> 
                  
               </div>
               
               <div className=" items-center justify-center rounded bg-gray-200 p-3 mt-5">  
                  Data Penyewaan
                  <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                     {sheetArrData &&(
                        <table  className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                           <thead className="text-white mt-3 bg-blue-700 rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 ">
                                 <tr>
                                    {sheetArrData[0].map((h)=>(
                                       <th scope="col" className="p-4" key={h}>
                                          <div className="flex items-center">
                                             {h}
                                          </div>
                                       </th>
                                    ))}
                                 </tr>
                           </thead>
                           <tbody>
                              {sheetArrData.slice(1).map((row)=>(
                                 <tr className="bg-white border-b light:bg-gray-800 light:border-gray-800 ">
                                    {row.map((c)=>(
                                       <td className="w-4 p-4 text-black">{c}</td>
                                    ))}
                                 </tr>
                              ))}
                           </tbody>
                        </table>
                     )}
                        
                     <nav className="flex items-center justify-between p-4" aria-label="Table navigation">
                        <div>
                           <button type="submit" onClick={handleOnArrExport} className="text-white mt-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                              <BiSolidReport size={23} className='min-w-max float-left pr-1'/>Download
                           </button>
                        </div>
                     </nav>
                  </div> 
                  
               </div>
           </div>
      </div>
    )
  }
  
  export default Laporan
