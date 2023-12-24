import { Schema, model } from "mongoose";
import shortid from "shortid";
import Url from "./Types/Url";

const UrlSchema = new Schema<Url>({
  originalUrl: {
    type: "string",
    required: true,
    unique: true,
  },
  shortenedUrl: {
    type: "string",
    required: true,
    default: shortid.generate,
  },
  keyword: {
    type: "string",
    default: null,
  },
  urlVisited: {
    type: "number",
    required: true,
    default: 0,
  },
});

UrlSchema.path("originalUrl").validate((val) => {
  const urlRegex =
    /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
  return urlRegex.test(val);
}, "Invalid URL.");

const UrlModel = model<Url>("urls", UrlSchema);

export default UrlModel;
