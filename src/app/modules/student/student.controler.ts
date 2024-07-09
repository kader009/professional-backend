import { studentServices } from './student.services'
import sendResponse from '../../../utils/sendResponse'
import httpStatus from 'http-status'
import catchAsync from '../../../utils/catchAsync'

const getAllStudent = catchAsync(async (req, res, next) => {
  const result = await studentServices.getAllstudentFromDB()

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'student retrieved successfully',
    data: result,
  })
})

const getSingleStudent = catchAsync(async (req, res, next) => {
  const { studentId } = req.params
  const result = await studentServices.getSinglestudentFromDB(studentId)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'single student retrieved successfully',
    data: result,
  })
})

export const studentController = {
  getAllStudent,
  getSingleStudent,
}
