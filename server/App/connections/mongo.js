import mongoose from "mongoose";


//Connect to MongoDB
export const connectionToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.DBURL);
    // console.log(process.env.DBURL)
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
  }
};
