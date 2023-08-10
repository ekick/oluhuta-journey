import express from 'express'
import AuthController from '../controllers/AuthController.js'
import jwtAuth from '../middlewares/jwtAuth.js'
import DashboardController from '../controllers/DashboardController.js'

const router = express.Router()

// Auth
router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.get('/refresh-token', AuthController.refreshToken)

// Store Dashboard
router.post('/form-spotwisata', jwtAuth(), DashboardController.SpotWisataStore)
router.post('/form-pemandu', jwtAuth(), DashboardController.PemanduStore)
router.post('/form-umkm', jwtAuth(), DashboardController.UMKMStore)
router.post('/form-produk', jwtAuth(), DashboardController.ProdukStore)
router.post('/table-produk', jwtAuth(), DashboardController.ProdukTable)
router.post('/table-spot', jwtAuth(), DashboardController.SpotTable)

export default router