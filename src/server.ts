import express from "express";
import { initialRoutes } from "./routes";

const app = express();

initialRoutes(app);

app.listen("8080", () => {
  console.log("http://localhost:8080");
});
