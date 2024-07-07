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
exports.studentServices = void 0;
const student_model_1 = require("./student.model");
const createStudentIntoDb = (student) => __awaiter(void 0, void 0, void 0, function* () {
    // const result = await StudentModel.create(student)  // built in mongoose static methods
    const studentData = new student_model_1.StudentModel(student); //create an instance
    if (yield studentData.isUserExists(student.id)) {
        throw new Error('user already exists');
    }
    const result = yield studentData.save(); // built in mongoose instance methods
    return result;
});
const getAllstudentFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield student_model_1.StudentModel.find();
    return result;
});
const getSinglestudentFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield student_model_1.StudentModel.findOne({ id });
    return result;
});
exports.studentServices = {
    createStudentIntoDb,
    getAllstudentFromDB,
    getSinglestudentFromDB,
};
