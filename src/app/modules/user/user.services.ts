import config from '../../config'
import { Student } from '../student/student.interface'
import { StudentModel } from '../student/student.model'
import { TUser } from './user.interface'
import { UserModel } from './user.model'

const createStudentIntoDb = async (password: string, student: Student) => {
  // set student route
  const UserData: Partial<TUser> = {}

  // if not given password. use default password
  UserData.password = password || (config.default_password as string)

  // set manually generated id
  UserData.id = '2025100002'

  // set student role
  UserData.role = 'student'

  const newUser = await UserModel.create(UserData) // built in mongoose static methods

  if (Object.keys(newUser)) {
    student.id = newUser.id //embeded id
    student.user = newUser._id //reference id

    const newStudent = await StudentModel.create(student)
    return newStudent
  }

  return newUser
}

export const UserServices = {
  createStudentIntoDb,
}
