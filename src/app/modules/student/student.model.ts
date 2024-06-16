import { model, Schema } from 'mongoose'
import { Student } from './student.interface'

export const studentSchema = new Schema<Student>({
  id: { type: String, required: true, unique: true },
  name: {
    firstName: String,
    lastName: String,
  },
  email: { type: String, required: true, unique: true },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female', 'others'],
      message: "chose the following gender like: 'male', 'female', 'ohter'",
    },
    required: true,
  },
  birthDay: { type: String, required: true },
  contactNumber: { type: String, required: true },
  bloodGroup: {
    type: String,
    enum: {
      values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      message: 'choose from the following option',
    },
  },
  guardian: {
    fatherName: { type: String, required: true },
    fatherOccupation: { type: String, required: true },
    motherName: { type: String, required: true },
    motherOccupation: { type: String, required: true },
  },
  profileImage: { type: String },
  isActive: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active',
  },
})

export const StudentModel = model<Student>('studnet', studentSchema)
