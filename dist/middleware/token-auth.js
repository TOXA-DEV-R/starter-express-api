"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const logging_1 = require("../logging");
exports.default = (req, res, next) => {
    try {
        const token = req.header("token-x-auth");
        if (!token) {
            res.status(401).send("Token is wrong");
            return;
        }
        if (!process.env.JWT_PRIVATE_KEY) {
            res.status(404).send("Failed");
            return;
        }
        const decoded = jsonwebtoken_1.default.verify(token, String(process.env.JWT_PRIVATE_KEY));
        if (!decoded) {
            res.status(400).send("Token is wrong, please checked");
            return;
        }
        req.body = decoded;
        next();
    }
    catch (err) {
        console.log(err);
        logging_1.logging.error(err);
        res.status(404).send("Failed");
    }
};
