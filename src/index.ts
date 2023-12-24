import "dotenv/config";
import express from "express";
import makeApp from "./app";
const app = express();

makeApp(app);
