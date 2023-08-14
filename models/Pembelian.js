import mongoose from "mongoose"

const Schema = new mongoose.Schema({
  idProduk: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Produk',
    required: true
  },
  idUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Biodata',
    required: true
  },
  jumlah: {
    type: Number,
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

export default mongoose.model('Pembelian', Schema)
