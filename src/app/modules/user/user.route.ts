import express, { NextFunction, Request, Response } from 'express'
import { UserController } from './user.controller'

const router = express.Router()

const validatioMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log('i want to validate your request')
}

router.post(
  '/create-student',
  validatioMiddleware,
  UserController.createStudent,
)

export const UserRoutes = router
