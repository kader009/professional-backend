"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicValidationSchema = void 0;
const zod_1 = require("zod");
const academic_constant_1 = require("./academic.constant");
const createAcademicValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.enum([...academic_constant_1.AcademicSemesterName]),
        year: zod_1.z.string(),
        code: zod_1.z.enum([...academic_constant_1.AcademicSemesterCode]),
        startMonth: zod_1.z.enum([...academic_constant_1.month]),
        endMonth: zod_1.z.enum([...academic_constant_1.month]),
    }),
});
exports.AcademicValidationSchema = {
    createAcademicValidationSchema,
};
