"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAuth = exports.validateUser = void 0;
const joi_1 = __importDefault(require("joi"));
const validateUser = (user) => {
    return joi_1.default.object({
        name: joi_1.default.string().min(3).max(20).required(),
        surname: joi_1.default.string().min(3).max(20).required(),
        age: joi_1.default.number().min(0).max(130).required(),
        email: joi_1.default.string().min(5).max(30).email().required(),
        password: joi_1.default.string().min(5).max(1200).required(),
    }).validate(user);
};
exports.validateUser = validateUser;
const validateAuth = (user) => {
    return joi_1.default.object({
        email: joi_1.default.string().min(5).max(30).email().required(),
        password: joi_1.default.string().min(5).max(1200).required(),
    }).validate(user);
};
exports.validateAuth = validateAuth;
