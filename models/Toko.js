import mongoose from "mongoose"

const Schema = new mongoose.Schema({
  nama: {
    type: String,
    required: true
  },
  lokasi: {
    type: String,
    required: true,
  },
  jenis: {
    type: String,
    enum: ['Penjualan', 'Penyewaan'],
    required: true
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

export default mongoose.model('Toko', Schema)
