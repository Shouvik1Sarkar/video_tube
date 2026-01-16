import express from "express";
const userRouter = express.Router();

import handleRegisterUser from "../controller/user.controller.js";

userRouter.get("/register", handleRegisterUser);

export default userRouter;
