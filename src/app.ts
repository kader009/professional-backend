import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'
import { StudentRoutes } from './app/modules/student/student.route'
import { UserRoutes } from './app/modules/user/user.route'
import { globarError } from './app/middleware/globalErrorhandler'
import notFound from './app/middleware/notFound'
const app = express()

// parser
app.use(express.json())
app.use(cors())

// application routes
app.use('/api/v1', StudentRoutes)
app.use('/api/v1', UserRoutes)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

// global error
app.use(globarError)

// not found
app.use(notFound)

export default app
