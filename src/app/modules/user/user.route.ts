import express from 'express'
import { UserController } from './user.controller'
import { studentZodSchema } from '../student/student.zodValition'
import ValidationRequest from '../../middleware/validateRequest'

const router = express.Router()

router.post(
  '/create-student',
  ValidationRequest(studentZodSchema),
  UserController.createStudent,
)

export const UserRoutes = router
