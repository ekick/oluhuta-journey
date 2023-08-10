import SpotWisata from "../models/SpotWisata.js";
import GambarSpot from "../models/GambarSpot.js";
import Pemandu from "../models/Pemandu.js";
import Toko from "../models/Toko.js";
import Produk from "../models/Produk.js";

class DashboardController {
  async SpotWisataStore(req, res) {
    try {
      const form = await SpotWisata.create({
        nama: req.body.nama,
        deskripsi: req.body.deskripsi,
        jenis: req.body.jenis
      })
      if (!form) { throw { code: 500, message: 'FORM_SPOT_CREATE_FAILED' } }
      const gambar = await GambarSpot.create({
        idSpot: form._id,
        urlGambar: req.body.url_gambar,
        urlQRCode: req.body.url_qrcode,
      })
      if (!gambar) { throw { code: 500, message: 'FORM_GAMBAR_CREATE_FAILED' } }

      return res.status(200)
                .json({
                  status: true,
                  message: "FORM_CREATE_SUCCESS",
                  form,
                  gambar
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

      return res.status(200)
                .json({
                  status: true,
                  message: "FORM_CREATE_SUCCESS",
                  form,
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

      return res.status(200)
                .json({
                  status: true,
                  message: "FORM_CREATE_SUCCESS",
                  form,
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

      return res.status(200)
                .json({
                  status: true,
                  message: "FORM_CREATE_SUCCESS",
                  form,
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
      const umkm = await Toko.find({})
      if (!umkm) { throw { code: 404, message: "PRODUK_DATA_NOT_FOUND" } }

      return res.status(200)
                .json({
                  status: true,
                  message: "FORM_CREATE_SUCCESS",
                  umkm,
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

      return res.status(200)
                .json({
                  status: true,
                  message: "FORM_CREATE_SUCCESS",
                  spot,
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