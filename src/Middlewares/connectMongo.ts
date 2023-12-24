import chalk from "chalk";
import mongoose from "mongoose";

export default () => {
  try {
    mongoose
      .connect(String(process.env.MONGO_URI))
      .then(() => {
        console.log(chalk.green("Connected to mongodb..!"));
      })
      .catch((e) => {
        console.log(chalk.red("Failed to connect with mongodb..!"), e);
        process.exit(1);
      });
  } catch (error) {
    if (error) {
      return {
        code: 500,
        message: "Internal Server Error. Try After While...",
      };
    }
  }
};
