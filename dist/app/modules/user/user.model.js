"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    id: { type: String, required: true },
    password: {
        type: String,
        required: true,
    },
    needsPasswordChange: { type: Boolean, default: true },
    role: { type: String, enum: ['Admin', 'student', 'faculty'] },
    status: { type: String, enum: ['in-progress', 'blocked'], default: 'in-progress' },
    isDeleted: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});
exports.UserModel = (0, mongoose_1.model)('User', userSchema);
