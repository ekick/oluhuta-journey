import express from 'express'
import AuthController from '../controllers/AuthController.js'
import jwtAuth from '../middlewares/jwtAuth.js'
import DashboardController from '../controllers/DashboardController.js'
import WisataController from '../controllers/WisataController.js'

import upload from '../libraries/uploadImage.js'

const router = express.Router()

// Auth
router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.get('/refresh-token', AuthController.refreshToken)

// endpoint Dashboard
router.post('/form-spotwisata', jwtAuth(), upload.fields([{ name: 'photo', maxCount: 1 }, { name: 'qrCode', maxCount: 1 }]), DashboardController.SpotWisataStore)
router.post('/form-pemandu', jwtAuth(), DashboardController.PemanduStore)
router.post('/form-umkm', jwtAuth(), DashboardController.UMKMStore)
router.post('/form-produk', jwtAuth(), DashboardController.ProdukStore)
router.get('/table-umkm', jwtAuth(), DashboardController.UMKMTable)
router.get('/table-produk', jwtAuth(), DashboardController.ProdukTable)
router.get('/table-spot', jwtAuth(), DashboardController.SpotTable)
router.get('/table-biodata', jwtAuth(), DashboardController.BiodataTable)
router.get('/table-pemandu', jwtAuth(), DashboardController.PemanduTable)
router.get('/table-penyewaan', jwtAuth(), DashboardController.PenyewaanTable)
router.get('/table-pembelian', jwtAuth(), DashboardController.PembelianTable)

// endpoint Wisata
router.post('/form-kunjungan', jwtAuth(), WisataController.KunjunganStore)
router.get('/list-produk', jwtAuth(), WisataController.ListProduk)
router.get('/list-spot', jwtAuth(), WisataController.SpotList)
router.get('/cari-produk', jwtAuth(), WisataController.SpesifikProduk)
router.get('/cari-spot', jwtAuth(), WisataController.SpesifikSpot)
router.post('/riwayat-pembelian', jwtAuth(), WisataController.RiwayatPembelian)
router.post('/riwayat-penyewaan', jwtAuth(), WisataController.RiwayatPenyewaan)
router.post('/form-pembelian', jwtAuth(), WisataController.PembelianStore)
router.post('/form-penyewaan', jwtAuth(), WisataController.PembelianStore)

// enpoint Upload
// router.post('/api/upload', jwtAuth(), upload.single('photo'), ImageController.SaveImage)

export default router