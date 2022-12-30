import { ErrorRequestHandler } from "express";

const error: ErrorRequestHandler = (err, req, res, next) => {
  if (err.status) {
    res.status(err.status).send(err.message);
    return;
  }

  res.status(500).send("Smething happened on server");
};

export default error;
