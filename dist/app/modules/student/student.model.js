"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentModel = exports.studentSchema = void 0;
const mongoose_1 = require("mongoose");
exports.studentSchema = new mongoose_1.Schema({
    id: { type: String, required: true, unique: true },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: [true, 'user id is required'],
        unique: true,
        ref: 'User'
    },
    name: {
        firstName: {
            type: String,
            required: [true, 'First name is required'],
            validate: {
                validator: function (value) {
                    const firstnameString = value.charAt(0).toUpperCase() + value.slice(1);
                    return firstnameString === value;
                },
                message: '{VALUE} is not in capitalize format',
            },
        },
        lastName: String,
    },
    email: { type: String, required: true, unique: true },
    gender: {
        type: String,
        enum: {
            values: ['male', 'female', 'others'],
            message: "chose the following gender like: 'male', 'female', 'ohter'",
        },
        required: true,
    },
    birthDay: { type: String, required: true },
    contactNumber: { type: String, required: true },
    bloodGroup: {
        type: String,
        enum: {
            values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
            message: 'choose from the following option',
        },
    },
    guardian: {
        fatherName: { type: String, required: true },
        fatherOccupation: { type: String, required: true },
        motherName: { type: String, required: true },
        motherOccupation: { type: String, required: true },
    },
    profileImage: { type: String },
    admissionSemester: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'AcademinSemester'
    }
});
// studentSchema.methods.isUserExits = async function (id: string) {
//   const existingUser = await StudentModel.findOne({ id })
//   return existingUser
// }
exports.StudentModel = (0, mongoose_1.model)('student', exports.studentSchema);
