import mongoose from "mongoose"

const Schema = new mongoose.Schema({
  idToko: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Toko',
    required: true
  },
  nama: {
    type: String,
    required: true
  },
  harga: {
    type: Number,
    required: true,
  },
  jenisProduk: {
    type: String,
    enum: ['Penjualan', 'Penyewaan'],
    required: true
  },
  Stok: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Number
  },
  updatedAt: {
    type: Number
  }
},
{
  timestamps: {
    currentTime: () => Math.floor(Date.now() / 1000)
  }
}
)

export default mongoose.model('Produk', Schema)
