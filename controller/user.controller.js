import { response } from "express";
import asyncHandler from "../utils/asyncHndler.js";
import { ApiError } from "../utils/ApiError.js";
import User from "../models/user.models.js";
import { uploadOnCloudinaryy } from "../utils/cloudinary.utils.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const handleRegisterUser = asyncHandler(async (req, res) => {
  // get user credentials
  const { fullName, userName, email, password } = req.body;
  // validate
  if (
    [fullName, userName, email, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All the fields are required");
  }
  // check if user already exists => username email
  const existedUser = await User.findOne({
    $or: [{ userName }, { email }],
  });
  if (existedUser) {
    throw new ApiError(
      409,
      "userName or Email already exists rror Already exists",
    );
  }
  // check for images check for avatar
  console.log("REQUEST FILES: ", req.files);
  console.log("9999999999999999999999999999999999999999999");
  const avatarLocalPath = req.files?.avatar?.[0]?.path;
  const coverImagePath = req.files?.coverImage?.[0]?.path;
  console.log("9999999999999999999999999999999999999999999");
  console.log("cover image: ", req.files);
  console.log("cover image: ", coverImagePath);

  if (!avatarLocalPath) {
    throw new ApiError(409, "Avatar is required****");
  }
  // upload thm to cloudinary
  const avatar = await uploadOnCloudinaryy(avatarLocalPath);
  const coverImage = await uploadOnCloudinaryy(coverImagePath);
  // check success in avatar
  if (!avatar) {
    throw new ApiError(409, "Avatar is required_____");
  }
  // create user object - create entry
  const user = await User.create({
    userName: userName.toLowerCase(),
    avatar: avatar.url,
    coverImage: coverImage?.url || "",
    email,
    password,
    fullName,
  });
  console.log("USER: AT FIRST: ", user);
  // remove password and refresh token
  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken",
  );
  console.log("USER: AT FIRST:==================== ", createdUser);
  // check if user created or not
  if (!createdUser) {
    throw new ApiError(500, "User not created");
  }
  //   return result
  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "User Registered successfully"));
  //   return res.status(201).json({
  //     statusCode: 200,
  //     data: createdUser,
  //     message: "Successfully created User",
  //   });
});

export default handleRegisterUser;

// async function handleRegisterUser(req, res) {
//   //   return res.send("HELLO");
//   throw new Error("Something broke");
// }

// asyncHandler((req, res) => {
//   throw new Error("Something broke");
//   //   return res.send("HELLO");
// });

/**
 * Error: Something broke
    at handleRegisterUser (file:///C:/Users/abc/Desktop/video_tube/controller/user.controller.js:10:9)
    at Layer.handleRequest (C:\Users\abc\Desktop\video_tube\node_modules\router\lib\layer.js:152:17)
    at next (C:\Users\abc\Desktop\video_tube\node_modules\router\lib\route.js:157:13)
    at Route.dispatch (C:\Users\abc\Desktop\video_tube\node_modules\router\lib\route.js:117:3)
    at handle (C:\Users\abc\Desktop\video_tube\node_modules\router\index.js:435:11)
    at Layer.handleRequest (C:\Users\abc\Desktop\video_tube\node_modules\router\lib\layer.js:152:17)
    at C:\Users\abc\Desktop\video_tube\node_modules\router\index.js:295:15
    at processParams (C:\Users\abc\Desktop\video_tube\node_modules\router\index.js:582:12)
    at next (C:\Users\abc\Desktop\video_tube\node_modules\router\index.js:291:5)
    at Function.handle (C:\Users\abc\Desktop\video_tube\node_modules\router\index.js:186:3)
 */
/**
 * Error: Something broke
    at file:///C:/Users/abc/Desktop/video_tube/controller/user.controller.js:5:9
    at file:///C:/Users/abc/Desktop/video_tube/utils/asyncHndler.js:3:21
    at Layer.handleRequest (C:\Users\abc\Desktop\video_tube\node_modules\router\lib\layer.js:152:17)
    at next (C:\Users\abc\Desktop\video_tube\node_modules\router\lib\route.js:157:13)
    at Route.dispatch (C:\Users\abc\Desktop\video_tube\node_modules\router\lib\route.js:117:3)
    at handle (C:\Users\abc\Desktop\video_tube\node_modules\router\index.js:435:11)
    at Layer.handleRequest (C:\Users\abc\Desktop\video_tube\node_modules\router\lib\layer.js:152:17)
    at C:\Users\abc\Desktop\video_tube\node_modules\router\index.js:295:15
    at processParams (C:\Users\abc\Desktop\video_tube\node_modules\router\index.js:582:12)
    at next (C:\Users\abc\Desktop\video_tube\node_modules\router\index.js:291:5)
 */
