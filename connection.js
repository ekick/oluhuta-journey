import dotenv from 'dotenv'
import mongoose from "mongoose"

const env = dotenv.config().parsed

const connection = () => {
  mongoose.connect(env.MONGODB_URI, {
    dbName: env.MONGODB_NAME
  })
  const conn = mongoose.connection
  conn.on('error', console.log.bind(console, 'Connection error : '))
  conn.once('open', () => {
    console.log('Connected to MongoDB')
  })
}

export default connection