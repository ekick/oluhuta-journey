import dotenv from 'dotenv'
import express from "express"
import routerApi from './routes/api.js'
import connection from "./connection.js"
import path from "path"
import { fileURLToPath } from 'url'

import cors from "cors"

const env = dotenv.config().parsed
const app = express()

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(cors())
app.use(express.json()) //middleware handler request json
app.use(express.urlencoded({ extended : true })) //middleware handler request x-www-form-urlencoded
app.use(express.static(path.join(__dirname, "public"))); //akses public ke folder public

app.use('/', routerApi) // endpointmen
app.use((req, res) => {
  res.status(404).json({ message: '404_NOT_FOUND'})
}) // catch handler 404 status

connection() //mongoDB connectiona

app.listen(env.APP_PORT, () => {
  console.log(`Server started on port ${env.APP_PORT}`);
})