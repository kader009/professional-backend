"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentModel = exports.studentSchema = void 0;
const mongoose_1 = require("mongoose");
exports.studentSchema = new mongoose_1.Schema({
    id: { type: String, required: true, unique: true },
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
    isActive: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active',
    },
});
exports.studentSchema.methods.isUserExits = function (id) {
    return __awaiter(this, void 0, void 0, function* () {
        const existingUser = yield exports.StudentModel.findOne({ id });
        return existingUser;
    });
};
exports.StudentModel = (0, mongoose_1.model)('studnet', exports.studentSchema);
