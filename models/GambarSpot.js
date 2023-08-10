import mongoose from "mongoose"

const Schema = new mongoose.Schema({
  idSpot: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SpotWisata',
    required: true
  },
  urlGambar: {
    type: String,
    required: true,
  },
  urlQRCode: {
    type: String,
    required: true,
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

export default mongoose.model('GambarSpot', Schema)
