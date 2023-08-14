import React from 'react'
import logo from '../../assets/man.png'
import buy from '../../assets/buy.png'
import rent from '../../assets/rent.png'
import lo from '../../assets/log.png'
import { NavLink } from 'react-router-dom'
import HeaderDetail from '../../components/wisata/HeaderDetail'


const ProfileWisata = () => {
  const items = [
    {id: 1, name: 'Your Email', image: logo, telp: 'Your Telp'},
  ];
  // const content = [
  //   { id: 1, name: 'Pembelian', Image: buy,  path: '/ProfileWisata/Pembelian'},
  //   { id: 2, name: 'Penyewaan', Image: rent, path: '/ProfileWisata/Pembelian'},
  //   { id: 3, name: 'Log Out', Image: lo, path: '/ProfileWisata/Pembelian'},
  // ];
  return (
    <div>
      <HeaderDetail judul={'Profil Pengguna'} link={"/Beranda"}/>
      <div className='flex justify-center items-center'>
            {items.map((item) => {
                return(
                    <div>
                        <ul>
                            <li className="py-3 sm:py-4">
                                <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                        <img className="md:w-40 w-30 md:h-40 h-30 rounded-full" src={item.image} alt="/" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-xl font-medium text-black ">
                                        {item.name}
                                        </p>
                                        <p className="text-base text-black ">
                                        {item.telp}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    <hr></hr>
                    </div>
                )}
            )}
        </div>
        {/* {content.map((item) => {
          return(
            <div className='flex py-10 px-5 '>
              <NavLink to={item.path}>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img className="md:w-20 w-10 md:h-20 h-10" src={item.Image} alt="/" />
                </div>
                <div className="flex-1">
                  <h1 className="md:text-2xl text-xl font-medium text-black font-cde md:ml-10 ml-5">
                  {item.name}
                  </h1>
                </div>
              </div>
              </NavLink>
            </div>
          )}
          )} */}
    </div>
  )
}

export default ProfileWisata