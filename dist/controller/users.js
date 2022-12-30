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
exports.getUsers = exports.postUser = void 0;
const try_catch_1 = __importDefault(require("../utils/try-catch"));
const users_1 = require("../models/users");
const lodash_1 = __importDefault(require("lodash"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const validater_1 = require("../validater");
exports.postUser = (0, try_catch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body) {
        throw { message: "not", status: 404 };
    }
    const { value, error } = (0, validater_1.validateUser)(req.body);
    if (error) {
        throw { message: error.details[0].message, status: 400 };
    }
    const isUser = yield users_1.User.findOne({ email: value.email });
    if (isUser) {
        throw { message: "It has already existed", status: 400 };
    }
    const user = new users_1.User(value);
    const salt = yield bcrypt_1.default.genSalt();
    const password = yield bcrypt_1.default.hash(value.password, salt);
    user.password = password;
    yield user.save();
    res.status(200).send(lodash_1.default.pick(user, ["name", "email", "_id"]));
}));
exports.getUsers = (0, try_catch_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield users_1.User.find();
    res.status(200).send(user);
}));
