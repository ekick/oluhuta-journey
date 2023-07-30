import Navbar from "../../components/dashboard/Navbar"
import Sidebar from "../../components/dashboard/Sidebar"
import { useEffect,useState } from "react";

import {useMediaQuery} from "react-responsive"
import IconUser from "../../assets/oluhuta Journey/icon.ico";

const Layout = ({children}) => {
  const mediaScreen = useMediaQuery({query:"(max-width:768px)"});
  const [openSidebar,setOpensidebar]= useState(mediaScreen ? false:true);
  
  return (
    <>
      <div className="w-full min-h-screen bg-white">  
        {/* <Navbar/> */}
        <Sidebar setOpenSidebar={setOpensidebar} openSidebar={openSidebar} mediaScreen={mediaScreen}/>
        <main>
          <div
            onClick={()=>setOpensidebar(false)}
            className={`md:hidden fixed inset-0 max-h-screen bg-black/50 ${openSidebar ? 'block' : 'hidden'}`}>
          </div>
            {children}
        </main>
      </div>
      
    </>
    
  )
}

export default Layout