import cloudinary from "cloudinary";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinaryy = async (localFilePath) => {
  try {
    // console.log("LOCAL PATH: ", localFilePath);
    // console.log("LOCAL PATH: ", process.env.CLOUDINARY_API_KEY);
    if (!localFilePath) {
      return null;
    }
    // console.log("=====", cloudinary);
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    console.log("RESPONSE: ", response);
    return response;
  } catch (err) {
    // remove the file
    fs.unlinkSync(localFilePath);
    console.error("ERROR: CLOUDINARYL: ", err);
    return null;
  }
};
export { uploadOnCloudinaryy };
