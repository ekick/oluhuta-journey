import axios from "axios";
const host = 'http://localhost:8000';

let respon = null, isError = false, msgError = '';

export const SaveSpotAPI = async ({ data, token }) => {
  const options = {
    method: 'POST',
    url: `${host}/form-spotwisata`,
    headers: {
      Authorization: `Bearer ${token}`
    },
    params: {
      nama : data.nama,
      deskripsi : data.deskripsi,
      jenis : data.jenis,
      photo : data.gambar_spot,
      qrCode : data.gambar_qr,
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

export const SavePemanduAPI = async ({ data, token }) => {
  const options = {
    method: 'POST',
    url: `${host}/form-pemandu`,
    headers: {
      Authorization: `Bearer ${token}`
    },
    params: {
      nama : data.nama,
      url_profile : data.url_profile,
      medsos : data.medsos,
      link_akun : data.link_akun,
      no_hp : data.no_hp,
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