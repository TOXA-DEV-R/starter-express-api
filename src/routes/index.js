const express = require("express");
const { home } = require("../controller");

const router = express.Router();

const initialRoutes = (app) => {
  router.use("/", home);

  return app.use("/", router);
};

module.exports = { initialRoutes };
