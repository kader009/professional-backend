import { Router } from 'express'
import { StudentRoutes } from '../app/modules/student/student.route'
import { UserRoutes } from '../app/modules/user/user.route'
import { SemesterRoute } from '../app/modules/academicSemester/academicSemester.route'

const router = Router()

const moduleRoutes = [
  {
    path: '/students',
    route: StudentRoutes,
  },
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/academic-semesters',
    route: SemesterRoute,
  },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router
