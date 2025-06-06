import mongoose from "mongoose";

let connectdb = async () => {
  mongoose.connection.on("connected", () => {
    console.log("Database connected");
  });
  await mongoose.connect(`${process.env.MONGODB_URI}/artgenie`);
};

export default connectdb;