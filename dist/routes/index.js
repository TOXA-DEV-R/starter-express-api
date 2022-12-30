"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialRoutes = void 0;
const express_1 = __importDefault(require("express"));
const controller_1 = require("../controller");
const error_1 = __importDefault(require("../middleware/error"));
const auth_1 = require("../controller/auth");
const token_auth_1 = __importDefault(require("../middleware/token-auth"));
const router = express_1.default.Router();
const initialRoutes = (app) => {
    router.get("/", controller_1.home);
    router.post("/users", controller_1.postUser);
    router.post("/auth", auth_1.postAuth);
    router.get("/users", token_auth_1.default, controller_1.getUsers);
    router.use(error_1.default);
    return app.use("/", router);
};
exports.initialRoutes = initialRoutes;
