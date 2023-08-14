import SpotWisata from "../models/SpotWisata.js";
import GambarSpot from "../models/GambarSpot.js";
import Pemandu from "../models/Pemandu.js";
import Toko from "../models/Toko.js";
import Produk from "../models/Produk.js";
import Penyewaan from "../models/Penyewaan.js";
import Pembelian from "../models/Pembelian.js";
import Biodata from "../models/Biodata.js";

class DashboardController {
  async SpotWisataStore(req, res) {
    try {
      const form = await SpotWisata.create({
        nama: req.body.nama,
        deskripsi: req.body.deskripsi,
        jenis: req.body.jenis,
      })
      if (!form) { throw { code: 500, message: 'FORM_SPOT_CREATE_FAILED' } }

      // let finalImageURL = req.protocol + "://" + "/uploads/" + req.file.filename;
      let imageSpotURL = req.protocol + "://" + "/spot/" + req.files.photo[0].filename;
      let imageQRURL = req.protocol + "://" + "/qr/" + req.files.qrCode[0].filename;

      const gambar = await GambarSpot.create({
        idSpot: form._id,
        urlGambar: imageSpotURL,
        urlQRCode: imageQRURL,
      })
      if (!gambar) { throw { code: 500, message: 'FORM_GAMBAR_CREATE_FAILED' } }

      // return res.status(200).json({ status: "succes", image: finalImageURL })

      const data = {
        pesan: `Berhasil menyimpan data spot wisata! ${form.nama}`
      }

      return res.status(200)
                .json({
                  status: true,
                  message: "FORM_CREATE_SUCCESS",
                  data
                })
    } catch (error) {
      return res.status(error.code || 500)
                .json({
                  status: false,
                  message: error.message
                })
    }
  }

  async PemanduStore(req, res) {
    try {
      const form = await Pemandu.create({
        nama: req.body.nama,
        urlProfile: req.body.url_profile,
        medsos: req.body.medsos,
        linkAkun: req.body.link_akun,
        nomorHP: req.body.no_hp
      })
      if (!form) { throw { code: 500, message: 'FORM_PEMANDU_CREATE_FAILED' } }

      const data = {
        pesan: `Berhasil menyimpan data pemandu ${form.nama}`
      }
      
      return res.status(200)
                .json({
                  status: true,
                  message: "FORM_CREATE_SUCCESS",
                  data,
                })
    } catch (error) {
      return res.status(error.code || 500)
                .json({
                  status: false,
                  message: error.message
                })
    }
  }

  async UMKMStore(req, res) {
    try {
      const form = await Toko.create({
        nama: req.body.nama,
        lokasi: req.body.lokasi,
        jenis: req.body.jenis
      })
      if (!form) { throw { code: 500, message: 'FORM_UMKM_CREATE_FAILED' } }
      
      const data = {
        pesan: `Berhasil menyimpan data UMKM ${form.nama}`
      }

      return res.status(200)
                .json({
                  status: true,
                  message: "FORM_CREATE_SUCCESS",
                  data,
                })
    } catch (error) {
      return res.status(error.code || 500)
                .json({
                  status: false,
                  message: error.message
                })
    }
  }

  async ProdukStore(req, res) {
    try {
      const umkm = await Toko.findOne({ nama: req.body.umkm })
      if (!umkm) { throw { code: 404, message: "PRODUK_NOT_FOUND" } }

      const form = await Produk.create({
        idToko: umkm._id,
        nama: req.body.nama,
        harga: req.body.harga,
        jenisProduk: req.body.jenis_produk,
        stok: req.body.stok,
      })
      if (!form) { throw { code: 500, message: 'FORM_PRODUK_CREATE_FAILED' } }

      const data = {
        pesan: `Berhasil menyimpan data produk ${form.nama}`
      }

      return res.status(200)
                .json({
                  status: true,
                  message: "FORM_CREATE_SUCCESS",
                  data,
                })
    } catch (error) {
      return res.status(error.code || 500)
                .json({
                  status: false,
                  message: error.message
                })
    }
  }

  async UMKMTable(req, res) {
    try {
      const umkm = await Toko.find({})
      if (!umkm) { throw { code: 404, message: "UMKM_DATA_NOT_FOUND" } }

      const data = {
        umkm
      }

      return res.status(200)
                .json({
                  status: true,
                  message: "FETCHING_DATA_CREATE_SUCCESS",
                  data,
                })
    } catch (error) {
      return res.status(error.code || 500)
                .json({
                  status: false,
                  message: error.message
                })
    }
  }

  async ProdukTable(req, res) {
    try {
      const produk = await Produk.find({}).populate('Toko')
      if (!produk) { throw { code: 404, message: "PRODUK_DATA_NOT_FOUND" } }

      const data = {
        produk
      }

      return res.status(200)
                .json({
                  status: true,
                  message: "FETCHING_DATA_CREATE_SUCCESS",
                  data,
                })
    } catch (error) {
      return res.status(error.code || 500)
                .json({
                  status: false,
                  message: error.message
                })
    }
  }

  async SpotTable(req, res) {
    try {
      const spot = await SpotWisata.find({})
      if (!spot) { throw { code: 404, message: "SPOT_DATA_NOT_FOUND" } }
      
      const data = {
        spot
      }

      return res.status(200)
                .json({
                  status: true,
                  message: "FETCHING_DATA_CREATE_SUCCESS",
                  data,
                })
    } catch (error) {
      return res.status(error.code || 500)
                .json({
                  status: false,
                  message: error.message
                })
    }
  }

  async BiodataTable(req, res) {
    try {
      const biodata = await Biodata.find({})
      if (!biodata) { throw { code: 404, message: "BIODATA_NOT_FOUND" } }

      const data = {
        biodata
      }

      return res.status(200)
                .json({
                  status: true,
                  message: "FORM_CREATE_SUCCESS",
                  data,
                })
    } catch (error) {
      return res.status(error.code || 500)
                .json({
                  status: false,
                  message: error.message
                })
    }
  }

  async PemanduTable(req, res) {
    try {
      const pemandu = await Pemandu.find({})
      if (!pemandu) { throw { code: 404, message: "PEMANDU_DATA_NOT_FOUND" } }

      const data = {
        pemandu
      }

      return res.status(200)
                .json({
                  status: true,
                  message: "FORM_CREATE_SUCCESS",
                  data,
                })
    } catch (error) {
      return res.status(error.code || 500)
                .json({
                  status: false,
                  message: error.message
                })
    }
  }

  async PenyewaanTable(req, res) {
    try {
      const sewa = await Penyewaan.find({}).populate({ path: 'Biodata', select: 'nama' }).populate('Produk')
      if (!sewa) { throw { code: 404, message: "PENYEWAAN_DATA_NOT_FOUND" } }

      const data = {
        sewa
      }

      return res.status(200)
                .json({
                  status: true,
                  message: "FORM_CREATE_SUCCESS",
                  data,
                })
    } catch (error) {
      return res.status(error.code || 500)
                .json({
                  status: false,
                  message: error.message
                })
    }
  }

  async PembelianTable(req, res) {
    try {
      const beli = await Pembelian.find({}).populate('Biodata').populate('Produk')
      if (!beli) { throw { code: 404, message: "PEMBELIAN_DATA_NOT_FOUND" } }

      const data = {
        beli
      }

      return res.status(200)
                .json({
                  status: true,
                  message: "FORM_CREATE_SUCCESS",
                  data,
                })
    } catch (error) {
      return res.status(error.code || 500)
                .json({
                  status: false,
                  message: error.message
                })
    }
  }

}

export default new DashboardController()