import axios from "axios";
const host = 'http://localhost:8000';

let respon = null, isError = false, msgError = '';

export const SaveKunjunganAPI = async ({ data, token }) => {
  const options = {
    method: 'POST',
    url: `${host}/form-kunjungan`,
    headers: {
      Authorization: `Bearer ${token}`
    },
    params: {
      id_pemandu : data.id_pemandu,
      jumlah : data.jumlah,
    }
  };
  try {
    const response = await axios.request(options);

    if (response.status === 200) {
      respon = response.data
    } else {
      isError = true
      msgError = response.message
      throw new Error("An returning error respons from API");
    }
  } catch (error) {
    isError = true
    console.log(error);
  }

  return {respon, isError, msgError}
}

export const DataProdukAPI = async ({ token }) => {
  const options = {
    method: 'GET',
    url: `${host}/list-produk`,
    headers: {
      Authorization: `Bearer ${token}`
    }, 
  };
  
  try {
    const response = await axios.request(options);

    if (response.status === 200) {
      respon = response.data
    } else {
      isError = true
      msgError = response.message
      throw new Error("An returning error respons from API");
    }
  } catch (error) {
    isError = true
    console.log(error);
  }

  return {respon, isError, msgError}
}

// export const DataSpesifikProdukAPI = async ({ data, token }) => {
//   let respon = null, isError = false;

//   const options = {
//     method: 'GET',
//     url: `${host}/cari-produk`,
//     headers: {
//       Authorization: `Bearer ${token}`
//     },
//     params: { 
//       id_produk : data.id_produk,
//      }
//   };
  
//   try {
//     const response = await axios.request(options);

//     if (response.status === 200) {
//       respon = response.data
//     } else {
//       isError = true
//       throw new Error("An returning error respons from API");
//     }
//   } catch (error) {
//     console.log(error);
//   }

//   return {respon, isError}
// }

export const DataSpotAPI = async ({ token }) => {
  const options = {
    method: 'GET',
    url: `${host}/list-spot`,
    headers: {
      Authorization: `Bearer ${token}`
    }
  }; 
  try {
    const response = await axios.request(options);

    if (response.status === 200) {
      respon = response.data
    } else {
      isError = true
      msgError = response.message
      throw new Error("An returning error respons from API");
    }
  } catch (error) {
    isError = true
    console.log(error);
  }

  return {respon, isError, msgError}
}

export const SavePembelianAPI = async ({ data, token }) => {
  const options = {
    method: 'POST',
    url: `${host}/form-pembelian`,
    headers: {
      Authorization: `Bearer ${token}`
    },
    params: { 
      id_produk : data.id_produk,
      jumlah : data.jumlah,
    }
  };
  try {
    const response = await axios.request(options);

    if (response.status === 200) {
      respon = response.data
    } else {
      isError = true
      msgError = response.message
      throw new Error("An returning error respons from API");
    }
  } catch (error) {
    isError = true
    console.log(error);
  }

  return {respon, isError, msgError}
}

export const SavePenyewaanAPI = async ({ data, token }) => {
  const options = {
    method: 'POST',
    url: `${host}/form-penyewaan`,
    headers: {
      Authorization: `Bearer ${token}`
    },
    params: { 
      id_produk : data.id_produk,
      jumlah : data.jumlah,
      waktu_sewa : data.waktu_sewa,
      jangka_sewa : data.jangka_sewa
    }
  };
  try {
    const response = await axios.request(options);

    if (response.status === 200) {
      respon = response.data
    } else {
      isError = true
      msgError = response.message
      throw new Error("An returning error respons from API");
    }
  } catch (error) {
    isError = true
    console.log(error);
  }

  return {respon, isError, msgError}
}