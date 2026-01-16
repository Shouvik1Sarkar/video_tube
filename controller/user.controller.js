import { response } from "express";
import asyncHandler from "../utils/asyncHndler.js";

const handleRegisterUser = asyncHandler((req, res) => {
  throw new Error("Something broke");
  //   return res.send("HELLO");
});
// async function handleRegisterUser(req, res) {
//   //   return res.send("HELLO");
//   throw new Error("Something broke");
// }

export default handleRegisterUser;

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
