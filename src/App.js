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
import CulturaldiversityWisata from "./pages/wisata/CulturaldiversityWisata";
import Geodiversity from "./pages/wisata/Geodiversity";
import MiniMap from "./pages/wisata/MiniMap";
import SyaratDanKetentuan from "./pages/wisata/SyaratDanKetentuan";
import PemanduWisata from "./pages/wisata/PemanduWisata";
import Kuliner from "./pages/wisata/Kuliner"
import Penyewaan from "./pages/wisata/Penyewaan";
import KekarBerkolom from "./pages/wisata/Geodiversity/KekarBerkolom";
import KekarBerlembar from "./pages/wisata/Geodiversity/KekarBerlembar";
import Makanan from "./pages/wisata/Kuliner/Makanan";
import Minuman from "./pages/wisata/Kuliner/Minuman";
import DetailMakanan from './pages/wisata/Kuliner/DetailMakanan';
import ProfilWisata from './pages/wisata/ProfilWisata';
import DetailPenyewaan from './pages/wisata/Penyewaan/DetailPenyewaan';

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
            <Route path="/ProfilWisata" element={<ProfilWisata />}/>
            <Route path="/Biodiversity" element={<BiodiversityWisata />}/>
            <Route path="/Culturaldiversity" element={<CulturaldiversityWisata />}/>
            <Route path="/Geodiversity" element={<Geodiversity />}/>
            <Route path="/Geodiversity/KekarBerkolom" element={<KekarBerkolom />}/>
            <Route path="/MiniMap" element={<MiniMap />}/>
            <Route path="/Kuliner" element={<Kuliner />}/>
            <Route path="/Kuliner/Makanan" element={<Makanan />}/>
            <Route path="/Kuliner/Makanan/DetailMakanan" element={<DetailMakanan />}/>
            <Route path="/Kuliner/Minuman" element={<Minuman />}/>
            <Route path="/Penyewaan" element={<Penyewaan />}/>
            <Route path="/Penyewaan/DetailPenyewaan" element={<DetailPenyewaan />}/>
            <Route path="/SyaratDanKetentuan" element={<SyaratDanKetentuan />}/>
            <Route path="/PemanduWisata" element={<PemanduWisata />}/>
            <Route path="/Destinasi" element={<Destinasi />}/>
            <Route path="/Scan" element={<Scan />}/>
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
            <Route path="/register" element={<Register/>}/>
        </Routes>
  
    </BrowserRouter>
  );
};

export default App;
