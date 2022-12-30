import express from "express";
import { initialRoutes } from "./routes";
import { config } from "dotenv";
import database from "./database";
import helmet from "helmet";
import compression from "compression";
import morgon from "morgan";

config();
const app = express();

if (process.env.IS_PROD == "prod") {
  app.use(helmet());
  app.use(compression());
} else {
  app.use(morgon("dev"));
}

app.use(express.json());

initialRoutes(app);

database();

const port = process.env.PORT || "3030";

app.listen(port, () => {
  console.log("http://localhost:8080");
});
