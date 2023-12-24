import status from "http-status";
import { UrlModel } from "../Models";
import { ServerError } from "../Utils";

export default {
  async create(payload: any) {
    const createdUrl = await UrlModel.create(payload);
    return await createdUrl.save();
  },

  async getAll() {
    return await UrlModel.find();
  },

  async update(shortenedUrl: any) {
    const existsUrl = await UrlModel.findOne({ shortenedUrl });

    if (!existsUrl) {
      throw new ServerError({
        message: "Url not exists",
        status: status.NOT_FOUND,
      });
    }

    existsUrl.urlVisited++;
    const updatedUrl = await existsUrl.save();
    return updatedUrl;
  },
};
