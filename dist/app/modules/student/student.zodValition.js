"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentZodSchema = void 0;
const zod_1 = require("zod");
exports.studentZodSchema = zod_1.z.object({
    id: zod_1.z.string().nonempty('ID must be a non-empty string'),
    name: zod_1.z.object({
        firstName: zod_1.z
            .string()
            .regex(/^[A-Z][a-z]*$/, 'First name must start with an uppercase letter followed by lowercase letters')
            .nonempty('First name is required'),
        lastName: zod_1.z.string(),
    }),
    email: zod_1.z.string().email('Invalid email format').nonempty('Email is required'),
    gender: zod_1.z.enum(['male', 'female', 'others']),
    birthDay: zod_1.z.string().nonempty('Birthday is required'),
    contactNumber: zod_1.z
        .string()
        .regex(/^\+?\d{10,15}$/, 'Contact number must be a valid phone number')
        .nonempty('Contact number is required'),
    bloodGroup: zod_1.z
        .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
    guardian: zod_1.z.object({
        fatherName: zod_1.z.string().nonempty('Father name is required'),
        fatherOccupation: zod_1.z.string().nonempty('Father occupation is required'),
        motherName: zod_1.z.string().nonempty('Mother name is required'),
        motherOccupation: zod_1.z.string().nonempty('Mother occupation is required'),
    }),
    profileImage: zod_1.z.string().url().optional(),
    isActive: zod_1.z.enum(['active', 'inactive']).default('active'),
});
