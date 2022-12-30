import mongoose from "mongoose";
import jwt from "jsonwebtoken";

export const User = mongoose.model(
  "User",
  new mongoose.Schema(
    {
      name: {
        type: String,
        min: 3,
        max: 20,
        required: true,
      },
      surname: {
        type: String,
        min: 3,
        max: 20,
        required: true,
      },
      age: {
        type: Number,
        min: 0,
        max: 150,
        required: true,
      },
      email: {
        type: String,
        min: 5,
        max: 30,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        min: 5,
        max: 1200,
        required: true,
      },
    },
    {
      methods: {
        generateAuthToken: (id: string) => {
          if (!process.env.JWT_PRIVATE_KEY) {
            throw { message: "error token", status: 401 };
          }
          return jwt.sign({ _id: id }, String(process.env.JWT_PRIVATE_KEY));
        },
      },
    }
  )
);
