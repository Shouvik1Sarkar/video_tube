import express, { urlencoded } from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config({ path: "./.env" });
import cookieParser from "cookie-parser";

// router

import userRouter from "./routes/user.routes.js";

connectDB();

// json middleware...

const app = express();
const port = 3000;

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(express.static("static"));
app.use(cookieParser());
// app.use()

app.get("/", (req, res) => {
  console.log("req, ", req);
  res.send("This is home");
});
// app.get("/shouvik", (req, res) => {
//   res.send("This is Shouvik's home");
// });

app.use("/api/v1/users/", userRouter);

app.listen(port, () => console.log("This app is running at port ", port));
// set CLOUDINARY_URL=cloudinary://API_KEY:API_SECRET@CLOUD_NAME
