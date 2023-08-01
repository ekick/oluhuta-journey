// import NavBar from '../../components/NavBar'
// import Footer from '../../components/Footer'
import Footer from "../../components/wisata/Footer"
import Navbar from "../../components/wisata/Navbar"
import { useLocation } from "react-router-dom";


const LayoutWisata = ({ children }) => {
  const location = useLocation().pathname;

  // console.log(location);

  return (

    <>
      {location !== '/' && location !== '/SyaratDanKetentuan' && location !== '/PemanduWisata' ?
      ( 
      <div >
        
        <main>

          <div className=''>
            
            {children}

          </div>

        </main>

          <div className="">

            <Footer />

          </div>

      </div>

      )

      :
      
      (<main>
  
        <div className=''>
          
          {children}
  
        </div>
  
    </main>)
    }
    </>

  )
  
}

export default LayoutWisata