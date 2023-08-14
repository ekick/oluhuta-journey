import React, { useState } from 'react'
import HeaderDetail from '../../components/wisata/HeaderDetail'
import Judul from '../../components/wisata/Judul'

function Pembelian() {
    
    return (
        <div>
            <HeaderDetail judul={"Pembelian"} link={"/ProfileWisata"}/>
            <Judul name={"Pembelian"}/>
            
        </div>
    )
}

export default Pembelian
