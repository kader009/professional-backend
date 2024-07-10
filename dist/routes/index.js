"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const student_route_1 = require("../app/modules/student/student.route");
const user_route_1 = require("../app/modules/user/user.route");
const academicSemester_route_1 = require("../app/modules/academicSemester/academicSemester.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: '/students',
        route: student_route_1.StudentRoutes,
    },
    {
        path: '/users',
        route: user_route_1.UserRoutes,
    },
    {
        path: '/academic-semesters',
        route: academicSemester_route_1.SemesterRoute,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
