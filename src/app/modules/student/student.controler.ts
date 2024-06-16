import { Request, Response } from 'express'
import { studentServices } from './student.services'

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body.student
    const result = await studentServices.createStudentIntoDb(student)

    res.status(200).json({
      success: true,
      message: 'student create successfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}

const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getAllstudentFromDB()

    res.status(200).json({
      success: true,
      message: 'student retrieved successfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params
    const result = await studentServices.getSinglestudentFromDB(studentId)

    res.status(200).json({
      success: true,
      message: 'single student retrieved successfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}

export const studentController = {
  createStudent,
  getAllStudent,
  getSingleStudent,
}
