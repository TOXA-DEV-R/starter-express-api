"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.default = () => {
    mongoose_1.default.set("strictQuery", true);
    mongoose_1.default
        .connect(`${process.env.URL}${process.env.DATABASE}`)
        .then((value) => {
        console.log("mongo don");
    })
        .catch((err) => console.log(err));
};
