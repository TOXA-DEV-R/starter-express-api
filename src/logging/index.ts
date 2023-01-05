import { config } from "dotenv";
import winston from "winston";

config();

export const logging = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [
    new winston.transports.File({
      filename: `${process.env.ROOT_DIR}/logs/users-error.log`,
      level: "error",
    }),
    new winston.transports.File({
      filename: `${process.env.ROOT_DIR}/logs/users-debug.log`,
      level: "debug",
    }),
    new winston.transports.File({
      filename: `${process.env.ROOT_DIR}/logs/users-warn.log`,
      level: "warn",
    }),
  ],
});

export const ctachError = (): void => {
  winston.exceptions.handle(
    new winston.transports.File({ filename: "./src/logs/index.log" })
  );

  process.on("unhandledRejection", (ex) => {
    throw { message: "unhandledRejection", ex };
  });
};
