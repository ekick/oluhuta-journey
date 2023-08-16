import React from 'react'
import {BiSolidUserCircle} from 'react-icons/bi'
import {RiLockPasswordLine} from 'react-icons/ri'
import {AiTwotoneMail} from 'react-icons/ai'
import {AiFillEdit} from 'react-icons/ai'

const Profile = () => {
  return (
    <div className={`p-4 sm:ml-64 `}>
        <div className="p-4 rounded-lg">
        {/* <div class="p-4 rounded-lg mt-14"> */}
           <div className=" items-center justify-center rounded bg-gray-200 p-3">         
                    
           <form>
                    <div className="flex items-center mb-5">   
                    
                        <div className="relative w-full mr-5">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none bg-sky-400 p-2 rounded-l-lg ">
                                <BiSolidUserCircle/>
                            </div>
                            <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5   dark:placeholder-gray-400 dark:text-black " placeholder="Username" readOnly required/>
                        </div>

                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none bg-sky-400 p-2 rounded-l-lg ">
                                <AiTwotoneMail/>
                            </div>
                            <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5   dark:placeholder-gray-400 dark:text-black " placeholder="Email@gmail.com" readOnly required/>
                        </div>
                        
                    </div>
                    <div className="flex items-center">   
                    
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none bg-sky-400 p-2 rounded-l-lg ">
                            <RiLockPasswordLine/>
                            </div>
                            <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5   dark:placeholder-gray-400 dark:text-black " placeholder="Password" required/>
                        </div>

                        <button type="submit" className="p-2.5 ml-5 mr-5 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <AiFillEdit/>
                        </button>
                    </div>
                </form>

            </div> 
        </div>
    </div>
  )
}

export default Profile