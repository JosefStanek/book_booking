import express from "express";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
const app = express();
const port = 3000;
const mongoUri = process.env.MONGO_URI;

// Middleware
app.use(express.json());

// Routes

// db
mongoose
  .connect(mongoUri)
  .then(() => {
    app.listen(port, () => {
      console.log(`server and db running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
