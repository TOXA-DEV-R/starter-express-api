const express = require("express");
const { initialRoutes } = require("./src/routes");

const app = express();

initialRoutes(app);

app.listen("8080", () => {
  console.log("http://localhost:8080");
});
