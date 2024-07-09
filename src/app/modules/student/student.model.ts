import { model, Schema } from 'mongoose'
import { Student, StudentMethods, StudentModels } from './student.interface'

export const studentSchema = new Schema<Student, StudentModels, StudentMethods>(
  {
    id: { type: String, required: true, unique: true },
    user: {
      type: Schema.Types.ObjectId,
      required: [true, 'user id is required'],
      unique: true,
      ref:'User'
    },
    name: {
      firstName: {
        type: String,
        required: [true, 'First name is required'],
        validate: {
          validator: function (value: string) {
            const firstnameString =
              value.charAt(0).toUpperCase() + value.slice(1)
            return firstnameString === value
          },
          message: '{VALUE} is not in capitalize format',
        },
      },
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

  },
)

// studentSchema.methods.isUserExits = async function (id: string) {
//   const existingUser = await StudentModel.findOne({ id })
//   return existingUser
// }

export const StudentModel = model<Student, StudentModels>(
  'student',
  studentSchema,
)
