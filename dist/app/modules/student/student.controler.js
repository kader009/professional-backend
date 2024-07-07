"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentController = void 0;
const student_services_1 = require("./student.services");
const student_zodValition_1 = require("./student.zodValition");
// import { studentJoiSchema } from '../student.validation'
const createStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // creating validation using zod
        const student = req.body.student;
        const zodparseData = student_zodValition_1.studentZodSchema.parse(student);
        // //todo: data validation using joi
        // const { error, value } = studentJoiSchema.validate(student)
        const result = yield student_services_1.studentServices.createStudentIntoDb(zodparseData);
        // if (error) {
        //   res.status(500).json({
        //     success: false,
        //     message: 'something went wrong',
        //     error: error.details,
        //   })
        // }
        res.status(200).json({
            success: true,
            message: 'student create successfully',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || 'something went wrong here.',
            error: error,
        });
    }
});
const getAllStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield student_services_1.studentServices.getAllstudentFromDB();
        res.status(200).json({
            success: true,
            message: 'student retrieved successfully',
            data: result,
        });
    }
    catch (error) {
        console.log(error);
    }
});
const getSingleStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { studentId } = req.params;
        const result = yield student_services_1.studentServices.getSinglestudentFromDB(studentId);
        res.status(200).json({
            success: true,
            message: 'single student retrieved successfully',
            data: result,
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.studentController = {
    createStudent,
    getAllStudent,
    getSingleStudent,
};
