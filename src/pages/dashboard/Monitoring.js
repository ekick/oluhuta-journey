import React, { useEffect, useState } from 'react';
import {getDataMonitoring } from '../../components/dashboard/mockData';

const Monitoring = () => {
   const [sheetArrDataMonitoring, setSheetArrDataMonitoring] = useState(null);

   useEffect(()=>{
      setSheetArrDataMonitoring(getDataMonitoring());
    },[]);
   
    return (
      <div className={`p-4 sm:ml-64 `}>
        <h1 className='pl-4 text-xl'><b>Monitoring</b></h1>
         <div className="p-4 rounded-lg">
               <div className=" items-center justify-center rounded bg-gray-200 p-3">  
                  <div className=" items-center justify-center rounded bg-gray-200 p-3">  
                  Data Pemandu
                  <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                  {sheetArrDataMonitoring &&(
                        <table  className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                           <thead className="text-white mt-3 bg-blue-700 rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 ">
                                 <tr>
                                    {sheetArrDataMonitoring[0].map((h)=>(
                                       <th scope="col" className="p-4" key={h}>
                                          <div className="flex items-center">
                                             {h}
                                          </div>
                                       </th>
                                    ))}
                                 </tr>
                           </thead>
                           <tbody>
                              {sheetArrDataMonitoring.slice(1).map((row)=>(
                                 <tr className="bg-white border-b light:bg-gray-800 light:border-gray-800 ">
                                    {row.map((c)=>(
                                       <td className="w-4 p-4 text-black">{c}</td>
                                    ))}
                                 </tr>
                              ))}
                           </tbody>
                        </table>
                     )}
                  </div> 
                  
               </div>
               </div>
           </div>
      </div>
    )
  }
  
  export default Monitoring
