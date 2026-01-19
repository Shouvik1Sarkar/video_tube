import express from "express";
const userRouter = express.Router();
import { upload } from "../middleware/multer.middleware.js";
import handleRegisterUser from "../controller/user.controller.js";

userRouter.post(
  "/register",
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "coverImage", maxCount: 1 },
  ]),
  handleRegisterUser,
);

export default userRouter;

// methods like fields, single, array, any are not own properties. of upload
// They live on: Multer.prototype
