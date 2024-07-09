"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const student_controler_1 = require("./student.controler");
const router = express_1.default.Router();
// router.post('/create-student', studentController.createStudent)
router.get('/', student_controler_1.studentController.getAllStudent);
router.get('/:studentId', student_controler_1.studentController.getSingleStudent);
exports.StudentRoutes = router;
