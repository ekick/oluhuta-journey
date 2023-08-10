import mongoose from "mongoose"

const Schema = new mongoose.Schema({
  nama: {
    type: String,
    required: true,
    unique: true
  },
  urlProfile: {
    type: String,
    require: true
  },
  medsos: {
    type: String,
    required: true
  },
  linkAkun: {
    type: String,
    required: true
  },
  nomorHP: {
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

export default mongoose.model('Pemandu', Schema)
