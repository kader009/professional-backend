import express from 'express'
import { AcademicController } from './academicSemester.controller'
import ValidationRequest from '../../middleware/validateRequest'
import { AcademicValidationSchema } from './academicvalidation'

const router = express.Router()

router.post('/create-academic-semesters',ValidationRequest(AcademicValidationSchema.createAcademicValidationSchema), AcademicController.createAcademicSemester)

export const SemesterRoute = router;
