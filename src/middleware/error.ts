import { ErrorRequestHandler } from "express";

const error: ErrorRequestHandler = (err, req, res, next) => {
  res.status(err.status || 500).send({ error: err.message });
};

export default error;
