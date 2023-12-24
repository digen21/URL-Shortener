import { Document } from "mongoose";

export default interface Url extends Document {
  originalUrl: string;
  shortenedUrl: string;
  urlVisited: number;
  keyword?: string;
}
