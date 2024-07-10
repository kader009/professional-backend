"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SemesterRoute = void 0;
const express_1 = __importDefault(require("express"));
const academicSemester_controller_1 = require("./academicSemester.controller");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const academicvalidation_1 = require("./academicvalidation");
const router = express_1.default.Router();
router.post('/create-academic-semesters', (0, validateRequest_1.default)(academicvalidation_1.AcademicValidationSchema.createAcademicValidationSchema), academicSemester_controller_1.AcademicController.createAcademicSemester);
exports.SemesterRoute = router;
