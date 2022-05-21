import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
// import cors from 'cors'
import itemsRoutes from './feature/items/item.routes'

dotenv.config()

const app: Express = express()
const port = process.env.PORT

// app.use(cors())
app.use(express.json())

app.get('/api', (_req: Request, res: Response) => {
  console.log('Hello World from Express by Stiven')
  res.send('pong')
})

app.use('/items', itemsRoutes)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port ?? '3000'}`)
})
