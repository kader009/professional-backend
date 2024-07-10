export type academicMonth =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December'

export type TAcademicSemesterName = 'Autumn' | 'Summar' | 'Fall'
export type TAcademicSemesterCode = '01' | '02' | '03'

export interface TAcademicSemester {
  name: TAcademicSemesterName
  code: TAcademicSemesterCode
  year: string
  startMonth: academicMonth
  endMonth: academicMonth
}
