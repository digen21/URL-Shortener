import express, { Request, Response } from "express";
import { UrlController } from "../Controller";

const urlRouter = express.Router();

urlRouter.get("/", UrlController.getAll);
urlRouter.get("/shorten-url", async (_: Request, res: Response) => {
  res.render("index.ejs");
});
urlRouter.post("/shorten-url", UrlController.create);
urlRouter.post("/:shortenedUrl", UrlController.update);

export default urlRouter;
