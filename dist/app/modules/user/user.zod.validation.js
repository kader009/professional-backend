"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userZodValidation = void 0;
const zod_1 = require("zod");
exports.userZodValidation = zod_1.z.object({
    password: zod_1.z.string({ invalid_type_error: 'password must be string' }).max(20, { message: 'password can not more than 20' }).optional(),
});
