import { Request, Response } from "express";
import tryCatch from "../utils/try-catch";
import { validateAuth } from "../validater";
import { User } from "../models/users";
import bcrypt from "bcrypt";

export const postAuth = tryCatch(async (req: Request, res: Response) => {
  const { value, error } = validateAuth(req.body);

  if (error) {
    throw { message: "not", status: 404 };
  }

  const isUser = await User.findOne({ email: value.email });

  if (!isUser) {
    throw { message: "Email or passwod is wrong", status: 400 };
  }

  const isValidPassword = await bcrypt.compare(value.password, isUser.password);

  if (!isValidPassword) {
    throw { message: "Email or passwod is wrong", status: 400 };
  }

  const token = isUser.generateAuthToken(isUser._id.toString());

  res.status(200).header("token-x-auth", token).send("success");
});
