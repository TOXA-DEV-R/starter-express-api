import Joi from "joi";
import { IAuth, IUser } from "../types";

export const validateUser = (user: IUser) => {
  return Joi.object({
    name: Joi.string().min(3).max(20).required(),
    surname: Joi.string().min(3).max(20).required(),
    age: Joi.number().min(0).max(130).required(),
    email: Joi.string().min(5).max(30).email().required(),
    password: Joi.string().min(5).max(1200).required(),
  }).validate(user);
};

export const validateAuth = (user: IAuth) => {
  return Joi.object({
    email: Joi.string().min(5).max(30).email().required(),
    password: Joi.string().min(5).max(1200).required(),
  }).validate(user);
};
