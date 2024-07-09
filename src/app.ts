import express, { Request, Response } from 'express'
import cors from 'cors'
import { globarError } from './app/middleware/globalErrorhandler'
import notFound from './app/middleware/notFound'
import router from './routes'
const app = express()

// parser
app.use(express.json())
app.use(cors())

// application routes
app.use('/api/v1', router)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

// global error
app.use(globarError)

// not found
app.use(notFound)

export default app
