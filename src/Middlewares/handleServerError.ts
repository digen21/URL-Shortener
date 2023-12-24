import chalk from "chalk";
import { NextFunction, Request, Response } from "express";
import status from "http-status";
import { ServerError } from "../Utils";

const handleServerError = (
  error: Error,
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof ServerError)
    return res.send({
      message: error.message,
      status: error.status,
    });
  else {
    if (process.env.NODE_ENV == "development")
      chalk.red("Error_Log_Development_Mode : ", error);
    res.status(status.INTERNAL_SERVER_ERROR).send({
      message: "INTERNAL SERVER ERROR",
    });
  }
};

export default handleServerError;
