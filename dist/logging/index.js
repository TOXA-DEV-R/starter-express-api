"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ctachError = exports.logging = void 0;
const dotenv_1 = require("dotenv");
const winston_1 = __importDefault(require("winston"));
(0, dotenv_1.config)();
exports.logging = winston_1.default.createLogger({
    level: "info",
    format: winston_1.default.format.json(),
    transports: [
        new winston_1.default.transports.File({
            filename: `${process.env.ROOT_DIR}/logs/users-error.log`,
            level: "error",
        }),
        new winston_1.default.transports.File({
            filename: `${process.env.ROOT_DIR}/logs/users-debug.log`,
            level: "debug",
        }),
        new winston_1.default.transports.File({
            filename: `${process.env.ROOT_DIR}/logs/users-warn.log`,
            level: "warn",
        }),
    ],
});
const ctachError = () => {
    winston_1.default.exceptions.handle(new winston_1.default.transports.File({ filename: "./src/logs/index.log" }));
    process.on("unhandledRejection", (ex) => {
        throw { message: "unhandledRejection", ex };
    });
};
exports.ctachError = ctachError;
