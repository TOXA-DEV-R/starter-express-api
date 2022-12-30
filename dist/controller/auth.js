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
exports.postAuth = void 0;
const try_catch_1 = __importDefault(require("../utils/try-catch"));
const validater_1 = require("../validater");
const users_1 = require("../models/users");
const bcrypt_1 = __importDefault(require("bcrypt"));
exports.postAuth = (0, try_catch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { value, error } = (0, validater_1.validateAuth)(req.body);
    if (error) {
        throw { message: "not", status: 404 };
    }
    const isUser = yield users_1.User.findOne({ email: value.email });
    if (!isUser) {
        throw { message: "Email or passwod is wrong", status: 400 };
    }
    const isValidPassword = yield bcrypt_1.default.compare(value.password, isUser.password);
    if (!isValidPassword) {
        throw { message: "Email or passwod is wrong", status: 400 };
    }
    const token = isUser.generateAuthToken(isUser._id.toString());
    res.status(200).header("token-x-auth", token).send("success");
}));
