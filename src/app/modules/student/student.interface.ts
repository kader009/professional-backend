import { Model, Types } from 'mongoose'

export interface Guardian {
  fatherName: string
  fatherOccupation: string
  motherName: string
  motherOccupation: string
}

export interface Student {
  id: string
  user: Types.ObjectId
  name: {
    firstName: string
    lastName: string
  }
  email: string
  gender: 'male' | 'female' | 'others'
  birthDay: string
  contactNumber: string
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-'
  guardian: Guardian
  profileImage?: string
  admissionSemester: Types.ObjectId;
}

export interface StudentMethods {
  isUserExists(id: string): Promise<Student | null>
}

export type StudentModels = Model<Student, Record<string, never>, StudentMethods>
