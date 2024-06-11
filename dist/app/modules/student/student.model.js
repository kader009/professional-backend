"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentSchema = void 0;
const mongoose_1 = require("mongoose");
exports.studentSchema = new mongoose_1.Schema({
    id: { type: String },
    name: {
        firstName: String,
        lastName: String,
    },
    email: { type: String, required: true },
    gender: ['male', 'female'],
    birthDay: { type: String, required: true },
    contactNumber: { type: String, required: true },
    bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    guardian: {
        fatherName: { type: String, required: true },
        fatherOccupation: { type: String, required: true },
        motherName: { type: String, required: true },
        motherOccupation: { type: String, required: true },
    },
    profileImage: { type: String },
    isActive: ['active', 'inactive'],
});
const Student = (0, mongoose_1.model)('studnet', exports.studentSchema);
