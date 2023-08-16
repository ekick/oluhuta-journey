import { Store } from "pullstate";
// import { loginAPI } from "../api/APIauth";

// deklarasi State Data Cultural
export const SpotWisataState = new Store({
    dataCultural : [{
      nama : "",
      deskripsi : "",
    }]
  });

// deklarasi State Data Bio
export const dataBiodiversityDs = new Store({
  dataBio : [{
    nama : "",
    deskripsi : ""
  }]
});

// deklarasi State Data Geo
export const dataGeodiversityDs = new Store({
  dataGeo : [{
    nama : "",
    deskripsi : ""
  }]
});

// deklarasi State Data Produk
export const ProdukDs = new Store({
  dataProduk : [{
    nama : "",
    deskripsi : "",
  }]
});

// deklarasi State Data Toko
export const TokoDs = new Store({
  dataToko : [{
    nama : "",
    deskripsi : "",
  }]
});

// deklarasi State Data Pemandu
export const PemanduDs = new Store({
  dataPemandu : [{
    nama : "",
    medsos : "",
    no_hp : "",
    link_akun: ""
  }]
});


