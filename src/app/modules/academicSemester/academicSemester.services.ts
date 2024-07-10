import { TAcademicSemester } from './academicSemester.interface'
import { AcademicSemesterModel } from './academicSemester.model'

const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
  type TAcademicSemesterCodeMap = {
    [key: string]: string
  }

  const academicSemesterNameCodeMap: TAcademicSemesterCodeMap = {
    Autumn: '01',
    Summar: '02',
    Fall: '03',
  }

  if (academicSemesterNameCodeMap[payload.name] !== payload.code) {
    throw new Error('Invalid semester code')
  }

  const result = await AcademicSemesterModel.create(payload)
  return result
}

export const AcademicSemesterServices = {
  createAcademicSemesterIntoDB,
}
