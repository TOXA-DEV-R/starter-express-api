import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { logging } from "../logging";

export default (req: Request, res: Response, next: NextFunction) => {
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

    const decoded = jwt.verify(token, String(process.env.JWT_PRIVATE_KEY));

    if (!decoded) {
      res.status(400).send("Token is wrong, please checked");
      return;
    }

    req.body = decoded;
    next();
  } catch (err) {
    console.log(err);
    logging.error(err);
    res.status(404).send("Failed");
  }
};
