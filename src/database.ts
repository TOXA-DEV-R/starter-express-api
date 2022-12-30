import mongoose from "mongoose";
import { config } from "dotenv";

config();

export default () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(`${process.env.URL}${process.env.DATABASE}`)
    .then((value) => {
      console.log("mongo don");
    })
    .catch((err) => console.log(err));
};
