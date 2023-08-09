import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';

// wisata pages import
import LayoutWisata from "./pages/wisata/LayoutWisata";
import Budaya from "./pages/wisata/Budaya";
import Home from "./pages/wisata/Home";
import SpotWisata from "./pages/wisata/SpotWisata";
import UmkmWisata from "./pages/wisata/UmkmWisata";
import Gallery from "./pages/wisata/Gallery";
import Scan from "./pages/wisata/Scan";
import Beranda from "./pages/wisata/Beranda";
import Destinasi from "./pages/wisata/Destinasi";
import BiodiversityWisata from "./pages/wisata/BiodiversityWisata";
import DetailBiodiversity from './pages/wisata/Biodiversity/DetailBiodiversity';
import CulturaldiversityWisata from "./pages/wisata/CulturaldiversityWisata";
import DetailCulturardiversity from './pages/wisata/Culturaldiversity/DetailCulturardiversity';
import Geodiversity from "./pages/wisata/Geodiversity";
import DetailGeodiversity from "./pages/wisata/Geodiversity/DetailGeodiversity";
import MiniMap from "./pages/wisata/MiniMap";
import SyaratDanKetentuan from "./pages/wisata/SyaratDanKetentuan";
import PemanduWisata from "./pages/wisata/PemanduWisata";
import Kuliner from "./pages/wisata/Kuliner"
import Penyewaan from "./pages/wisata/Penyewaan";
import DetailPenyewaan from './pages/wisata/Penyewaan/DetailPenyewaan';
import Makanan from "./pages/wisata/Kuliner/Makanan";
import Minuman from "./pages/wisata/Kuliner/Minuman";
import DetailMakanan from './pages/wisata/Kuliner/DetailMakanan';
import DetailMinuman from './pages/wisata/Kuliner/DetailMinuman';
import ProfileWisata from './pages/wisata/ProfileWisata';
import Ekonomi from './pages/wisata/Ekonomi';
import DetailEkonomi from './pages/wisata/Ekonomi/DetailEkonomi';

// dashboard pages import
import Geologi from "./pages/dashboard/Geologi";
import Laporan from "./pages/dashboard/Laporan";
import Profile from "./pages/dashboard/Profile";
import Toko from "./pages/dashboard/Toko";
import Produk from "./pages/dashboard/Produk";
import Monitoring from "./pages/dashboard/Monitoring";
import Pemandu from "./pages/dashboard/Pemandu";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import CulturaldiversityDashboard from "./pages/dashboard/CulturaldiversityDashboard";
import BiodiversityDashboard from "./pages/dashboard/BiodiversityDashboard";
import UmkmDashboard from "./pages/dashboard/UmkmDashboard";
import LayoutDashboard from "./pages/dashboard/LayoutDashboard";

const WisataLayout = () => (
  <LayoutWisata>
    <Outlet />
  </LayoutWisata>
);

const AdminLayout = () => (
  <LayoutDashboard>
    <Outlet />
  </LayoutDashboard>
);

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<WisataLayout />} >
            <Route path="/" element={<Home />}/>
            <Route path="/Beranda" element={<Beranda />}/>
            <Route path="/Biodiversity" element={<BiodiversityWisata />}/>
            <Route path="/Biodiversity/:DetailBiodiversityID" element={<DetailBiodiversity />}/>
            <Route path="/Culturaldiversity" element={<CulturaldiversityWisata />}/>
            <Route path="/Culturaldiversity/:DetailCulturaldiversityID" element={<DetailCulturardiversity />}/>
            <Route path="/Geodiversity" element={<Geodiversity />}/>
            <Route path="/Geodiversity/:DetailGeodiversityID" element={<DetailGeodiversity />}/>
            <Route path="/MiniMap" element={<MiniMap />}/>
            <Route path="/Kuliner" element={<Kuliner />}/>
            <Route path="/Kuliner/Makanan" element={<Makanan />}/>
            <Route path="/Kuliner/Minuman" element={<Minuman />}/>
            <Route path="/Kuliner/Makanan/:DetailMakananID" element={<DetailMakanan />}/>
            <Route path="/Kuliner/Minuman/:DetailMinumanID" element={<DetailMinuman />}/>
            <Route path="/Penyewaan" element={<Penyewaan />}/>
            <Route path="/Penyewaan/:DetailPenyewaanID" element={<DetailPenyewaan />}/>
            <Route path="/SyaratDanKetentuan" element={<SyaratDanKetentuan />}/>
            <Route path="/PemanduWisata" element={<PemanduWisata />}/>
            <Route path="/Destinasi" element={<Destinasi />}/>
            <Route path="/Scan" element={<Scan />}/>
            <Route path="/ProfileWisata" element={<ProfileWisata/>}/>
            <Route path="/Ekonomi" element={<Ekonomi/>}/>
            <Route path="/Ekonomi/:DetailEkonomiID" element={<DetailEkonomi/>}/>
            <Route path="/SpotWisata" element={<SpotWisata />}/>
            <Route path="/Budaya" element={<Budaya />}/>
            <Route path="/Umkm" element={<UmkmWisata />}/>
            <Route path="/Gallery" element={<Gallery />}/>
          </Route>

          <Route element={<AdminLayout />} >
            <Route path="/pages/culturdiversity"element={<CulturaldiversityDashboard/>}/>
            <Route path="/pages/geologi"element={<Geologi/>}/>
            <Route path="/pages/biodiversity"element={<BiodiversityDashboard/>}/>
            <Route path="/pages/laporan"element={<Laporan/>}/>
            <Route path="/pages/umkm"element={<UmkmDashboard/>}/>
            <Route path="/pages/toko"element={<Toko/>}/>
            <Route path="/pages/produk"element={<Produk/>}/>
            <Route path="/pages/pemandu"element={<Pemandu/>}/>
            <Route path="/pages/monitoring"element={<Monitoring/>}/>
            <Route path="/pages/profile"element={<Profile/>}/>
          </Route>
            <Route path="/login" element={<Login/>}/>
            <Route path="/admin/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
  
    </BrowserRouter>
  );
};

export default App;
