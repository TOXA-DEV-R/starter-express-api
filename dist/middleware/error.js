"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error = (err, req, res, next) => {
    res.status(err.status || 500).send({ error: err.message });
};
exports.default = error;
