"use strict";

var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };

Object.defineProperty(exports, "__esModule", { value: true });

const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const dotenv_1 = require("dotenv");
const database_1 = __importDefault(require("./database"));
const helmet_1 = __importDefault(require("helmet"));
const compression_1 = __importDefault(require("compression"));
const morgan_1 = __importDefault(require("morgan"));

(0, dotenv_1.config)();

const app = (0, express_1.default)();

if (process.env.IS_PROD == "prod") {
  app.use((0, helmet_1.default)());
  app.use((0, compression_1.default)());
} else {
  app.use((0, morgan_1.default)("dev"));
}

app.use(express_1.default.json());

(0, routes_1.initialRoutes)(app);

(0, database_1.default)();

const port = process.env.PORT || "3030";
app.listen(port, () => {
  console.log("http://localhost:8080");
});
