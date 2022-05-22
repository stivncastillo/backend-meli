import express, { Express } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import itemsRoutes from './feature/items/item.routes'
import authorMiddleware from './middleware/author.middleware'

dotenv.config()

const app: Express = express()
const port = process.env.PORT

app.use(cors())
app.use(express.json())

app.use(authorMiddleware)
app.use('/items', itemsRoutes)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port ?? '3000'}`)
})
