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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_services_1 = require("./user.services");
const sendResponse_1 = __importDefault(require("../../../utils/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const createStudent = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { password, student } = req.body;
        const result = yield user_services_1.UserServices.createStudentIntoDb(password, student);
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: 'student is created successfully',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.UserController = {
    createStudent,
};
