"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.home = void 0;
const home = (req, res) => {
    res.status(200).send({ message: "Use api" });
};
exports.home = home;
