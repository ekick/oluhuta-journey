// import SpotWisata from "../models/SpotWisata.js"
import Produk from "../models/Produk.js"
import Biodata from "../models/Biodata.js"
import Kunjungan from "../models/Kunjungan.js"
import Pembelian from "../models/Pembelian.js"
import Penyewaan from "../models/Penyewaan.js"

import dotenv from "dotenv"
import GambarSpot from "../models/GambarSpot.js"
const env = dotenv.config().parsed

class WisataController {
  async KunjunganStore(req, res) {
    try {
      const user = await Biodata.findOne({ idUser: req.jwt.id })
      if (!user) { throw { code: 404, message: "USER_NOT_FOUND" } }

      const form = await Kunjungan.create({
        idBiodata: user._id,
        idPemandu: req.body.id_pemandu,
        jumlah: req.body.jumlah
      })
      if (!form) { throw { code: 500, message: 'FORM_KUNJUNGAN_CREATE_FAILED' } }

      const data = {
        pesan: `Berhasil menyimpan data kunjungan!`
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

  async ListProduk(req, res) {
    try {
      const produk = await Produk.find({}).populate('Toko', 'nama')
      if (!produk) { throw { code: 404, message: "PRODUK_DATA_NOT_FOUND" } }

      const data = {
        produk
      }

      return res.status(200)
                .json({
                  status: true,
                  message: "FETCHING_ALL_DATA_SUCCESS",
                  produk,
                })
    } catch (error) {
      return res.status(error.code || 500)
                .json({
                  status: false,
                  message: error.message
                })
    }
  }

  async SpesifikProduk(req, res) {
    try {
      const produk = await Produk.findOne({ _id: req.body.id_produk }).populate('Toko')
      if (!produk) { throw { code: 404, message: "PRODUK_DATA_NOT_FOUND" } }

      return res.status(200)
                .json({
                  status: true,
                  message: "FETCHING_DATA_SUCCESS",
                  produk,
                })
    } catch (error) {
      return res.status(error.code || 500)
                .json({
                  status: false,
                  message: error.message
                })
    }
  }

  async SpotList(req, res) {
    try {
      const gambar = await GambarSpot.find({}).populate('SpotWisata')
      if (!gambar) { throw { code: 404, message: "DATA_NOT_FOUND" } }
      
      return res.status(200)
                .json({
                  status: true,
                  message: "FFETCHING_DATA_SUCCESS",
                  gambar,
                })
    } catch (error) {
      return res.status(error.code || 500)
                .json({
                  status: false,
                  message: error.message
                })
    }
  }

  async SpesifikSpot(req, res) {
    try {
      const gambar = await GambarSpot.findOne({ idSpot: req.body.id_spot }).populate('SpotWisata')
      if (!gambar) { throw { code: 404, message: "DATA_NOT_FOUND" } }
      
      return res.status(200)
                .json({
                  status: true,
                  message: "FFETCHING_DATA_SUCCESS",
                  gambar,
                })
    } catch (error) {
      return res.status(error.code || 500)
                .json({
                  status: false,
                  message: error.message
                })
    }
  }

  async RiwayatPembelian(req, res) {
    try {
      const user = await Biodata.findOne({ idUser: req.jwt.id})
      if (!user) { throw { code: 404, message: "USER_DATA_NOT_FOUND" } }

      const riwayat = await Pembelian.find({ idUser: user._id}).populate('Produk')
      if (!riwayat) { throw { code: 404, message: "RIWAYAT_PEMBELIAN_NOT_FOUND" } }

      return res.status(200)
                .json({
                  status: true,
                  message: "FFETCHING_DATA_SUCCESS",
                  riwayat,
                })
    } catch (error) {
      return res.status(error.code || 500)
                .json({
                  status: false,
                  message: error.message
                })
    }
  }

  async PembelianStore(req, res) {
    try {
      const user = await Biodata.findOne({ idUser: req.jwt.id })
      if (!user) { throw { code: 404, message: "USER_NOT_FOUND" } }

      const produk = await Produk.findOne({ _id : req.body.id_produk })
      if (!produk) { throw { code: 404, message: "PRODUK_NOT_FOUND" } }

      const form = await Pembelian.create({
        idProduk: produk._id,
        idUser: user._id,
        jumlah: req.body.jumlah
      })

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

  async RiwayatPenyewaan(req, res) {
    try {
      const user = await Biodata.findOne({ idUser: req.jwt.id})
      if (!user) { throw { code: 404, message: "USER_DATA_NOT_FOUND" } }

      const riwayat = await Penyewaan.find({ idUser: user._id }).populate('Produk')
      if (!riwayat) { throw { code: 404, message: "RIWAYAT_PENYEWAAN_NOT_FOUND" } }

      return res.status(200)
                .json({
                  status: true,
                  message: "FFETCHING_DATA_SUCCESS",
                  riwayat,
                })
    } catch (error) {
      return res.status(error.code || 500)
                .json({
                  status: false,
                  message: error.message
                })
    }
  }

  async PenyewaanStore(req, res) {
    try {
      const user = await Biodata.findOne({ idUser: req.jwt.id })
      if (!user) { throw { code: 404, message: "USER_NOT_FOUND" } }

      const produk = await Produk.findOne({ _id : req.body.id_produk })
      if (!produk) { throw { code: 404, message: "PRODUK_NOT_FOUND" } }

      const payload = { id: user._id }
      const generateToken = await jsonwebtoken.sign(payload, env.JWT_TOKEN_PENYEWAAN, {expiresIn: env.JWT_TOKEN_PENYEWAAN_EXPIRATION_TIME})

      const form = await Penyewaan.create({
        idProduk: produk._id,
        idUser: user._id,
        jumlah: req.body.jumlah,
        waktuSewa: req.body.waktu_sewa,
        jangkaSewa: req.body.jangka_sewa,
        token: generateToken,
      })

      const data = {
        id : form._id,
        jumlah : form.jumlah,
        waktu_sewa : form.waktuSewa,
        jangka_sewa : form.jangkaSewa,
        token : form.token,
        created_at : form.createdAt,
        update_at : form.updatedAt
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

export default new WisataController()