import Layout from "./pages/dashboard/Layout";
import Culturaldiversity from "./pages/dashboard/Culturaldiversity";
import Umkm from "./pages/dashboard/Umkm";
import Geologi from "./pages/dashboard/Geologi";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Laporan from "./pages/dashboard/Laporan";
import React from "react";
import Profile from "./pages/dashboard/Profile";
import Toko from "./pages/dashboard/Toko";
import Produk from "./pages/dashboard/Produk";
import Biodiversity from "./pages/dashboard/Biodiversity";
import Monitoring from "./pages/dashboard/Monitoring";
import Pemandu from "./pages/dashboard/Pemandu";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

const App = () => {
  return (

          
    <BrowserRouter>
      <Layout>
        <Routes>
              <Route path="/"element={<Culturaldiversity/>}/>
              <Route path="/pages/geologi"element={<Geologi/>}/>
              <Route path="/pages/biodiversity"element={<Biodiversity/>}/>
              <Route path="/pages/laporan"element={<Laporan/>}/>
              <Route path="/pages/umkm"element={<Umkm/>}/>
              <Route path="/pages/toko"element={<Toko/>}/>
              <Route path="/pages/produk"element={<Produk/>}/>
              <Route path="/pages/pemandu"element={<Pemandu/>}/>
              <Route path="/pages/monitoring"element={<Monitoring/>}/>
              <Route path="/pages/profile"element={<Profile/>}/>
        </Routes>
      </Layout>

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
