import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config({ path: "./.env" });

// router

import userRouter from "./routes/user.routes.js";

connectDB();

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("This is home");
});
app.get("/shouvik", (req, res) => {
  res.send("This is Shouvik's home");
});

app.use("/api/v1/users/", userRouter);

app.listen(port, () => console.log("This app is running at port ", port));
