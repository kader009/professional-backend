"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userZodValidation = void 0;
const zod_1 = require("zod");
exports.userZodValidation = zod_1.z.object({
    id: zod_1.z.string(),
    password: zod_1.z.string().max(20, { message: 'password can not more than 20' }),
    needsPasswordChange: zod_1.z.boolean().optional().default(true),
    role: zod_1.z.enum(['Admin', 'student', 'faculty']),
    status: zod_1.z.enum(['in-progress', 'blocked']),
    isDeleted: zod_1.z.boolean().optional().default(false),
});
