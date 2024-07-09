import { NextFunction, Request, Response } from 'express'
import { UserServices } from './user.services'
import sendResponse from '../../../utils/sendResponse'
import httpStatus from 'http-status'

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, student } = req.body
    const result = await UserServices.createStudentIntoDb(password, student)

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'student is created successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export const UserController = {
  createStudent,
}
