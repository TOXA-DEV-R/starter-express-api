"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.User = mongoose_1.default.model("User", new mongoose_1.default.Schema({
    name: {
        type: String,
        min: 3,
        max: 20,
        required: true,
    },
    surname: {
        type: String,
        min: 3,
        max: 20,
        required: true,
    },
    age: {
        type: Number,
        min: 0,
        max: 150,
        required: true,
    },
    email: {
        type: String,
        min: 5,
        max: 30,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        min: 5,
        max: 1200,
        required: true,
    },
}, {
    methods: {
        generateAuthToken: (id) => {
            if (!process.env.JWT_PRIVATE_KEY) {
                throw { message: "error token", status: 401 };
            }
            return jsonwebtoken_1.default.sign({ _id: id }, String(process.env.JWT_PRIVATE_KEY));
        },
    },
}));
