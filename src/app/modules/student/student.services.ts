import { Student } from './student.interface'
import { StudentModel } from './student.model'

const createStudentIntoDb = async (student: Student) => {
  // const result = await StudentModel.create(student)  // built in mongoose static methods

  const studentData = new StudentModel(student) //create an instance

  if(await studentData.isUserExists(student.id)){
    throw new Error('user already exists')
  }

  const result = await studentData.save() // built in mongoose instance methods

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
