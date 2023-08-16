import {BiData}from "react-icons/bi";
import {FcStatistics}from "react-icons/fc";
import {RiEarthLine}from "react-icons/ri";
import {GiIsland} from "react-icons/gi";
import {AiFillShop} from "react-icons/ai";
import {BiSolidUserCircle} from "react-icons/bi"
import {SiMobxstatetree} from "react-icons/si"
import {TbHeartRateMonitor} from "react-icons/tb"
import {MdProductionQuantityLimits} from "react-icons/md"
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from "framer-motion"
import { useState,useEffect } from "react";
import {IoIosArrowBack} from "react-icons/io";
import {MdMenu} from "react-icons/md";
import {BiSolidReport} from "react-icons/bi";
import {AiTwotoneShop} from "react-icons/ai"
import {GiForest} from "react-icons/gi"
import {IoIosPerson} from "react-icons/io"
import Logo from "../../assets/oluhuta Journey/Logo.png";

const Sidebar = ({ setOpenSidebar, mediaScreen, openSidebar }) => {
   let isTab = mediaScreen;
   // const {pathname} = useLocation
   // console.log(isTab,"isTab")
   // sidebar open
   const [isOpen,setIsOPen] = useState(isTab ? false:true);

   const Siderbar_animation = isTab ?
   //mobile view
   {
      open:{
         x : 0,
         width:"16rem",
         transition:{
            damping:40,
         }
      },
      closed:{
         x : -250,
         width:"0",
         transition:{
            damping:40,
            delay:0.15,
         },
      },
   }:{
      //system view
      open:{
         width:"16rem",
         transition:{
            damping:40,
         }
      },
      closed:{
         width:"4rem",
         transition:{
            damping:40,
         },
      },
   };

   useEffect(()=>{
      if (isTab){
         // mobile
         setIsOPen(false);
      }else{
         // laptop
         setIsOPen(true);
      }
      setIsOPen(openSidebar)
   },[isTab, openSidebar])

    
  return (
   <div>

      <motion.aside variants={Siderbar_animation} animate={isOpen ? "open" : "closed"} 
      className={`fixed top-0 left-0 z-40 w-64 h-full pt-2 transition-transform bg-white border-r border-gray-200 "translate-x-0" bg-gradient-to-r from-blue-500 to-cyan-500`}>
            
               <div className='flex flex-col h-full'>
               <div className="flex items-center gap-2.5 font-medium border-b border-slate-300 py-3 mx-3">
                  <img src={Logo} className="h-10" alt="Logo Oluhuta" width={45}/>
                  <span className="text-xl whitespace-pre px-2.5 text-[0.9rem]">Oluhuta Journey</span>
               </div>
                  <ul className='whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1 font-medium overflow-x-hidden'>
                     <li className="li">
                        <NavLink to="/pages/culturdiversity" className={"link activemenu mb-1"}>
                           <GiIsland size={23} className='min-w-max'/>
                           Spot Wisata
                        </NavLink>
                        <ul className="pl-2">
                           <li className="li">
                              <NavLink to="/pages/culturdiversity" className={"p-1.5 flex rounded-t-lg gap-6  items-center md:cursor-pointer cursor-default duration-300 font-medium subactive "}>
                                 <SiMobxstatetree size={23} className='min-w-max'/>
                                 Culturaldiversity
                              </NavLink>
                           </li>
                           <li className="li">
                              <NavLink to="/pages/biodiversity" className={"p-1.5 flex  gap-6 items-center md:cursor-pointer cursor-default duration-300 font-medium subactive "}>
                                 <GiForest size={23} className='min-w-max'/>
                                 Biodiversity
                              </NavLink>
                           </li>
                           <li className="li">
                              <NavLink to="/pages/geologi" className={"p-1.5 flex rounded-b-lg gap-6 items-center md:cursor-pointer cursor-default duration-300 font-medium subactive"}>
                                 <RiEarthLine size={23} className='min-w-max'/>
                                 Geodiversity
                              </NavLink>
                           </li>
                        </ul>
                     </li>
                     
                     <li className="li">
                        <NavLink to="/pages/toko" className={"mb-1 link"}>
                           <AiTwotoneShop size={23} className='min-w-max'/>
                           UMKM
                        </NavLink>
                        <ul className="pl-2">
                           <li className="li">
                              <NavLink to="/pages/toko" className={"p-1.5 flex rounded-t-lg gap-6 items-center md:cursor-pointer cursor-default duration-300 font-medium subactive "}>
                                 <AiFillShop size={23} className='min-w-max'/>
                                 Toko
                              </NavLink>
                           </li>
                           <li className="li">
                              <NavLink to="/pages/produk" className={"p-1.5 flex rounded-b-lg gap-6 items-center md:cursor-pointer cursor-default duration-300 font-medium subactive"}>
                                 <MdProductionQuantityLimits size={23} className='min-w-max'/>
                                 Produk
                              </NavLink>
                           </li>
                        </ul>
                     </li>
                     <li className="li">
                        <NavLink to="/pages/pemandu" className={"mb-1 link "}>
                           <IoIosPerson size={23} className='min-w-max'/>
                           Pemandu
                        </NavLink>
                     </li>
                     <li className="li">
                        <NavLink to="/pages/laporan" className={"mb-1 link "}>
                           <BiSolidReport size={23} className='min-w-max'/>
                           Laporan
                        </NavLink>
                     </li>
                     <li className="li">
                        <NavLink to="/pages/monitoring" className={"mb-1 link "}>
                           <TbHeartRateMonitor size={23} className='min-w-max'/>
                           Monitoring
                        </NavLink>
                     </li>
                     <li className="border-t border-slate-300 pt-3 li">
                        <NavLink to="/pages/profile" className={"link"}>
                           <BiSolidUserCircle size={23} className='min-w-max'/>
                           Akun
                        </NavLink>
                     </li>
                  </ul>
               </div>
               <motion.div 
               animate={
                  isOpen ? {
                     x : 0,
                     y : 0,
                     rotate : 0
                  }:{
                     x : -10,
                     y : -200,
                     rotate : 180
                  }
               }
               transition={{
                  duration:0,
               }}
               onClick={()=> {setIsOPen(!isOpen); setOpenSidebar(!isOpen);}} className='absolute w-fit xs:h-fit md:hidden h-20 z-50 right-2 bottom-1 cursor-pointer'>
                  <IoIosArrowBack size={25}/>
               </motion.div>

      </motion.aside>

      <div className='m-3 md:hidden' onClick={() => { 
            setOpenSidebar(true);
            setIsOPen(true);
         }
      }>
            <MdMenu size={25}/>
      </div>

   </div>
  );
};
export default Sidebar







