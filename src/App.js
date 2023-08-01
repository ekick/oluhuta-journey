import Geologi from "./pages/dashboard/Geologi";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Laporan from "./pages/dashboard/Laporan";
import React from "react";
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

const App = () => {
  return (

          
    <BrowserRouter>
      <LayoutDashboard>
        <Routes>
              <Route path="/"element={<CulturaldiversityDashboard/>}/>
              <Route path="/pages/geologi"element={<Geologi/>}/>
              <Route path="/pages/biodiversity"element={<BiodiversityDashboard/>}/>
              <Route path="/pages/laporan"element={<Laporan/>}/>
              <Route path="/pages/umkm"element={<UmkmDashboard/>}/>
              <Route path="/pages/toko"element={<Toko/>}/>
              <Route path="/pages/produk"element={<Produk/>}/>
              <Route path="/pages/pemandu"element={<Pemandu/>}/>
              <Route path="/pages/monitoring"element={<Monitoring/>}/>
              <Route path="/pages/profile"element={<Profile/>}/>
        </Routes>
      </LayoutDashboard>

      {/* <Login>
        <Routes>
          <Route path="/login"element={<Login/>}/>
          <Route path="/pages/register"element={<Register/>}/>
        </Routes>
      </Login> */}

      {/* <Register>
        <Routes>
          <Route path="/pages/register"element={<Register/>}/>
        </Routes>
      </Register> */}
      
    </BrowserRouter>
  );
};

export default App;
