"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialRoutes = void 0;
const express_1 = __importDefault(require("express"));
const controller_1 = require("../controller");
const router = express_1.default.Router();
const initialRoutes = (app) => {
    router.use("/", controller_1.home);
    return app.use("/", router);
};
exports.initialRoutes = initialRoutes;
