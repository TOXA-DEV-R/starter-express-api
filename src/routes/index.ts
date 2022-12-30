import express from "express";
import { getUsers, home, postUser } from "../controller";
import error from "../middleware/error";
import { postAuth } from "../controller/auth";
import tokenAuth from "../middleware/token-auth";

const router = express.Router();

export const initialRoutes = (app: express.Express) => {
  router.get("/", home);
  router.post("/users", postUser);
  router.post("/auth", postAuth);
  router.get("/users", tokenAuth, getUsers);
  router.use(error);

  return app.use("/", router);
};
