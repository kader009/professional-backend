import { model, Schema } from 'mongoose'
import { Student } from './student.interface'

export const studentSchema = new Schema<Student>({
  id: { type: String },
  name: {
    firstName: String,
    lastName: String,
  },
  email: { type: String, required: true },
  gender: ['male', 'female'],
  birthDay: { type: String, required: true },
  contactNumber: { type: String, required: true },
  bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  guardian: {
    fatherName: { type: String, required: true },
    fatherOccupation: { type: String, required: true },
    motherName: { type: String, required: true },
    motherOccupation: { type: String, required: true },
  },
  profileImage: { type: String },
  isActive: ['active', 'inactive'],
})



const Student = model<Student>('studnet',studentSchema);
