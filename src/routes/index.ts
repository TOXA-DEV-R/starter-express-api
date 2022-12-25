import express from "express";
import { home } from "../controller";

const router = express.Router();

export const initialRoutes = (app: express.Express) => {
  router.use("/", home);

  return app.use("/", router);
};
