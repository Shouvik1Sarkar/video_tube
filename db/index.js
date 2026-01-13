import mongoose from "mongoose";

async function connectDB() {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);
    console.log(
      "MONGODB connected at connectionInstance",
      connectionInstance.connection.host
    );
  } catch (error) {
    console.log("DATA BASE CONNECTION ERROR: ", error);
    process.exit(1);
  }
}
export default connectDB;
