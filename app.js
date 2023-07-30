import dotenv from 'dotenv'
import express from "express"
import routerApi from './routes/api.js'
import connection from "./connection.js"

const env = dotenv.config().parsed
const app = express()

app.use(express.json()) // middleware handler request json
app.use(express.urlencoded({extended : true})) // middleware handler request x-www-form-urlencoded

app.use('/', routerApi) // endpointmen
app.use((req, res) => {
  res.status(404).json({ message: '404_NOT_FOUND'})
}) // catch handler 404 status

connection() //mongoDB connectiona

app.listen(env.APP_PORT, () => {
  console.log(`Server startedd on port ${env.APP_PORT}`);
})