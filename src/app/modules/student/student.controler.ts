import { NextFunction, Request, Response } from 'express'
import { studentServices } from './student.services'
import sendResponse from '../../../utils/sendResponse'
import httpStatus from 'http-status'

const getAllStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await studentServices.getAllstudentFromDB()

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'student retrieved successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

const getSingleStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { studentId } = req.params
    const result = await studentServices.getSinglestudentFromDB(studentId)
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'single student retrieved successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export const studentController = {
  getAllStudent,
  getSingleStudent,
}
