import mongoose from "mongoose"

const Schema = new mongoose.Schema({
  nama: {
    type: String,
    required: true
  },
  deskripsi: {
    type: String,
    required: true,
  },
  jenis: {
    type: String,
    enum: ['Biodiversity', 'Geodiversity', 'Culturdiversity'],
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
})

export default mongoose.model('SpotWisata', Schema)
