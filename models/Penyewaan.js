import mongoose from "mongoose"

const Schema = new mongoose.Schema({
  idUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Biodata',
    required: true
  },
  idProduk: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Produk',
    required: true
  },
  jumlah: {
    type: Number,
    required: true
  },
  waktuSewa: {
    type : Date,
    required: true
  },
  jangkaSewa: {
    type : Date,
    required: true
  },
  token: {
    type: String,
    required: true,
    unique: true
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

export default mongoose.model('Penyewaan', Schema)