import { Request, Response } from "express";
import tryCatch from "../utils/try-catch";
import { User } from "../models/users";
import _ from "lodash";
import bcrypt from "bcrypt";
import { validateUser } from "../validater";

export const postUser = tryCatch(async (req: Request, res: Response) => {
  if (!req.body) {
    throw { message: "not", status: 404 };
  }

  const { value, error } = validateUser(req.body);

  if (error) {
    throw { message: error.details[0].message, status: 400 };
  }

  const isUser = await User.findOne({ email: value.email });

  if (isUser) {
    throw { message: "It has already existed", status: 400 };
  }

  const user = new User(value);

  const salt = await bcrypt.genSalt();
  const password = await bcrypt.hash(value.password, salt);
  user.password = password;

  await user.save();

  res.status(200).send(_.pick(user, ["name", "email", "_id"]));
});

export const getUsers = tryCatch(async (req: Request, res: Response) => {
  const user = await User.find();

  res.status(200).send(user);
});
