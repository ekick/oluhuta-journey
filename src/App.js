import react from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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


const App = () => {
  return (
    <BrowserRouter>
      <LayoutWisata>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Beranda" element={<Beranda />}/>
          <Route path="/Biodiversity" element={<BiodiversityWisata />}/>
          <Route path="/Culturaldiversity" element={<CulturaldiversityWisata />}/>
          <Route path="/Geodiversity" element={<Geodiversity />}/>
          <Route path="/Geodiversity/KekarBerkolom" element={<KekarBerkolom />}/>
          <Route path="/MiniMap" element={<MiniMap />}/>
          <Route path="/Kuliner" element={<Kuliner />}/>
          <Route path="/Kuliner/Makanan" element={<Makanan />}/>
          <Route path="/Kuliner/Minuman" element={<Minuman />}/>
          <Route path="/Penyewaan" element={<Penyewaan />}/>
          <Route path="/SyaratDanKetentuan" element={<SyaratDanKetentuan />}/>
          <Route path="/PemanduWisata" element={<PemanduWisata />}/>
          <Route path="/Destinasi" element={<Destinasi />}/>
          <Route path="/Scan" element={<Scan />}/>
          <Route path="/SpotWisata" element={<SpotWisata />}/>
          <Route path="/Budaya" element={<Budaya />}/>
          <Route path="/Umkm" element={<UmkmWisata />}/>
          <Route path="/Gallery" element={<Gallery />}/>
        </Routes>
      </LayoutWisata>
    </BrowserRouter>
  );
};

export default App;
