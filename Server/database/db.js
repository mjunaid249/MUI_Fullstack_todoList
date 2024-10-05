import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Database Connected!");
  })
  .catch((err) => {
    console.log({
      message: "Error in connecting Database",
      err,
    });
  });
