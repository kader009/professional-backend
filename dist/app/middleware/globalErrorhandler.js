"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globarError = void 0;
const globarError = (error, req, res, next) => {
    const StatusCode = 500;
    const message = error.message || 'something went wrong';
    return res.status(StatusCode).json({
        success: false,
        message,
        error: error,
    });
};
exports.globarError = globarError;
