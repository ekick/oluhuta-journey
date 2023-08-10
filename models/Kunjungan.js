import mongoose from "mongoose"

const Schema = new mongoose.Schema({
  idBiodata: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  idPemandu: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
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

export default mongoose.model('Kunjungan', Schema)
