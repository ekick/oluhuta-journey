import React from 'react'
import Logo from "../../assets/oluhuta Journey/Logo.png";
import IconUser from "../../assets/oluhuta Journey/icon.ico";
import {IoIosArrowBack} from "react-icons/io";
const Navbar = ({setIsOpen,isOpen}) => {
   
  return (
    <nav className=" fixed top-0 z-50 w-full bg-cyan-700 border-b border-gray-700">
         <div className="px-3 py-3 lg:px-5 lg:pl-3">
            <div className="flex items-center justify-between">
               <div className="flex items-center justify-start">
                  <a href="#" className="flex ml-2 md:mr-24">
                     <img src={Logo} className="h-10 mr-3" alt="FlowBite Logo" />
                     <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Oluhuta Journey</span>
                  </a>
               </div>

               <div className="flex items-center">
                  <div className="flex items-center ml-3">
                     <div>
                        <button type="button" className="flex text-sm" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                           <span className="sr-only">Open user menu</span>
                           <img src={IconUser} className="h-8 mr-3" alt="FlowBite Logo" />
                        </button>
                     </div>

                     <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
                        <div className="px-4 py-3" role="none">
                           <p className="text-sm text-gray-900 dark:text-white" role="none">
                              Nama User
                           </p>
                        </div>
                        <ul className="py-1" role="none">
                           <li>
                              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </nav>
  )
}

export default Navbar