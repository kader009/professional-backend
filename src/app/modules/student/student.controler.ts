import { Request, Response } from 'express'
import { studentServices } from './student.services'
import { studentZodSchema } from './student.zodValition'
// import { studentJoiSchema } from '../student.validation'

const createStudent = async (req: Request, res: Response) => {
  try {
    // creating validation using zod

    const student = req.body.student
    const zodparseData = studentZodSchema.parse(student)

    // //todo: data validation using joi
    // const { error, value } = studentJoiSchema.validate(student)
    const result = await studentServices.createStudentIntoDb(zodparseData)

    // if (error) {
    //   res.status(500).json({
    //     success: false,
    //     message: 'something went wrong',
    //     error: error.details,
    //   })
    // }

    res.status(200).json({
      success: true,
      message: 'student create successfully',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'something went wrong here.',
      error: error,
    })
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
