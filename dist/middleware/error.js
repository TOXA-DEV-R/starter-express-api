"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error = (err, req, res, next) => {
    if (err.status) {
        res.status(err.status).send(err.message);
        return;
    }
    res.status(500).send("Smething happened on server");
};
exports.default = error;
