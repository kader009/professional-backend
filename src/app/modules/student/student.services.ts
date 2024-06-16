import { Student } from './student.interface'
import { StudentModel } from './student.model'

const createStudentIntoDb = async (student: Student) => {
  const result = await StudentModel.create(student)
  return result
}

const getAllstudentFromDB = async () => {
  const result = await StudentModel.find()
  return result
}

const getSinglestudentFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id })
  return result
}

export const studentServices = {
  createStudentIntoDb,
  getAllstudentFromDB,
  getSinglestudentFromDB,
}
