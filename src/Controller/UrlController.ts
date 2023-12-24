import { Response, Request, NextFunction, response } from "express";
import status from "http-status";
import { UrlService } from "../Services";
import { ServerError } from "../Utils";

export default {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const response = await UrlService.create(req.body);
      if (response) {
        return res.redirect("/api");
      }
    } catch (error) {
      if (error instanceof ServerError) next(error);
      throw new ServerError({
        message: "Failed to create shorten url",
        status: status.INTERNAL_SERVER_ERROR,
      });
    }
  },

  async getAll(_: Request, res: Response, next: NextFunction) {
    try {
      const urls = await UrlService.getAll();
      return res.render("url.ejs", { urls });
    } catch (error) {
      if (error instanceof ServerError) next(error);
      console.log("", error);
      throw new ServerError({
        message: "Failed to fetch urls",
        status: status.INTERNAL_SERVER_ERROR,
      });
    }
  },

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { shortenedUrl } = req.params;
      const response = await UrlService.update(shortenedUrl);
      return res.status(200).send(response);
    } catch (error) {
      if (error instanceof ServerError) next(error);

      throw new ServerError({
        message: "Failed to update urls",
        status: status.INTERNAL_SERVER_ERROR,
      });
    }
  },
};
