import React, { useEffect } from 'react'
import HeaderDetail from '../../components/wisata/HeaderDetail';
import { Html5QrcodeScanner } from 'html5-qrcode'
import { useState } from 'react';


function Scan () {

  const [scanResult, setScanResult] = useState(null);

  useEffect(() => {

    const scanner = new Html5QrcodeScanner ('reader', {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
    });
    scanner.render(success, error);
    function success(result) {
      scanner.clear();
      setScanResult(result);
    }
    function error(err) {
      console.warn(err);
    }

  },[]);


  return (
    <div className=''>
      <HeaderDetail judul={'Scan'} link={"/Beranda"}/>
      <div className='p-5'>
        <h1 className='text-xl font-cde text-center'>Scan Qr Code</h1>
      </div>
      <div className='justify-center items-center p-10'>
      {
        scanResult
        ? <div>success: <a href={"http://"+scanResult}>{scanResult}</a></div>
        : <div id='reader'></div>
      }
      </div>
    </div>
  )
}

export default Scan
