import Footer from "../../components/wisata/Footer"

const LayoutWisata = ({ children }) => {
  
  return (
    <>
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
    </>

  )
  
}

export default LayoutWisata