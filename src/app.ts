//package imports

import chalk from "chalk";
import { Express } from "express";
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import path from "path";

import { urlRouter } from "./Route";
import { connectMongo, handleServerError } from "./Middlewares";

const makeApp = (app: Express) => {
  app.use(cors());
  app.set("view engine", "ejs");
  app.set("views", path.join(__dirname, "./views"));
  app.use(express.static(path.join(__dirname, "./public")));
  app.use(express.urlencoded({ extended: false }));
  app.use(bodyParser.urlencoded());
  app.use(bodyParser.json());
  app.set("view cache", true);

  const { PORT } = process.env;
  const port = PORT || 8080;

  //mongodb Connection
  connectMongo();

  app.use("/api/", urlRouter);

  //handling unhandled errors
  app.use(handleServerError);

  app.listen(port, () =>
    console.log(
      "Server started on",
      chalk.blue.underline(`http://localhost:${port}`)
    )
  );
};

export default makeApp;
