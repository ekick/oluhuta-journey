import mongoose from "mongoose"

const Schema = new mongoose.Schema({
  idUser: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true
  },
  nama: {
    type: String,
    required: true,
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

export default mongoose.model('Biodata', Schema)
