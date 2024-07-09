"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const router = express_1.default.Router();
const validatioMiddleware = (req, res, next) => {
    console.log('i want to validate your request');
};
router.post('/create-student', validatioMiddleware, user_controller_1.UserController.createStudent);
exports.UserRoutes = router;
