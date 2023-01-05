import mongoose from "mongoose";
import { config } from "dotenv";
import { logging } from "./logging";

config();

export default () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(`${process.env.URL}${process.env.DATABASE}`)
    .then((value) => {
      console.log("mongodb connect");
      logging.debug("mongodb connect");
    })
    .catch((err) => {
      console.log(err);
      logging.error(err, err);
    });
};
