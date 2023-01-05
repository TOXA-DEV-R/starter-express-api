"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = require("dotenv");
const logging_1 = require("./logging");
(0, dotenv_1.config)();
exports.default = () => {
    mongoose_1.default.set("strictQuery", true);
    mongoose_1.default
        .connect(`${process.env.URL}${process.env.DATABASE}`)
        .then((value) => {
        console.log("mongodb connect");
        logging_1.logging.debug("mongodb connect");
    })
        .catch((err) => {
        console.log(err);
        logging_1.logging.error(err, err);
    });
};
