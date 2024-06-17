"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentJoiSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.studentJoiSchema = joi_1.default.object({
    id: joi_1.default.string().required().messages({
        'string.base': 'ID must be a string',
    }),
    name: joi_1.default.object({
        firstName: joi_1.default.string()
            .regex(/^[A-Z][a-z]*$/)
            .required()
            .messages({
            'string.base': 'First name must be a string',
        }),
        lastName: joi_1.default.string().optional().messages({
            'string.base': 'Last name must be a string',
        }),
    })
        .required()
        .messages({
        'object.base': 'Name must be an object',
    }),
    email: joi_1.default.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required().messages({
        'string.base': 'Email must be a string',
    }),
    gender: joi_1.default.string()
        .valid('male', 'female', 'others')
        .required()
        .messages({
        'string.base': 'Gender must be a string',
    }),
    birthDay: joi_1.default.date().iso().required().messages({
        'date.base': 'Birthday must be a valid date',
    }),
    contactNumber: joi_1.default.string()
        .pattern(/^\+?\d{10,15}$/)
        .required()
        .messages({
        'string.base': 'Contact number must be a string',
    }),
    bloodGroup: joi_1.default.string()
        .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
        .optional()
        .messages({
        'any.only': 'Choose from the following blood group options: A+, A-, B+, B-, AB+, AB-, O+, O-',
    }),
    guardian: joi_1.default.object({
        fatherName: joi_1.default.string().required().messages({
            'string.base': 'Father name must be a string',
        }),
        fatherOccupation: joi_1.default.string().required().messages({
            'string.base': 'Father occupation must be a string',
        }),
        motherName: joi_1.default.string().required().messages({
            'string.base': 'Mother name must be a string',
        }),
        motherOccupation: joi_1.default.string().required().messages({
            'string.base': 'Mother occupation must be a string',
        }),
    })
        .required()
        .messages({
        'object.base': 'Guardian must be an object',
    }),
    profileImage: joi_1.default.string().uri().optional().messages({
        'string.base': 'Profile image must be a string',
    }),
    isActive: joi_1.default.string().valid('active', 'inactive').default('active'),
});
