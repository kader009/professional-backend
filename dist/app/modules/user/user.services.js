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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServices = void 0;
const config_1 = __importDefault(require("../../config"));
const student_model_1 = require("../student/student.model");
const user_model_1 = require("./user.model");
const createStudentIntoDb = (password, student) => __awaiter(void 0, void 0, void 0, function* () {
    // set student route
    const UserData = {};
    // if not given password. use default password
    UserData.password = password || config_1.default.default_password;
    // set manually generated id
    UserData.id = '2025100001';
    // set student role
    UserData.role = 'student';
    const newUser = yield user_model_1.UserModel.create(UserData); // built in mongoose static methods
    if (Object.keys(newUser)) {
        student.id = newUser.id; //embeded id
        student.user = newUser._id; //reference id
        const newStudent = yield student_model_1.StudentModel.create(student);
        return newStudent;
    }
    return newUser;
});
exports.UserServices = {
    createStudentIntoDb,
};
