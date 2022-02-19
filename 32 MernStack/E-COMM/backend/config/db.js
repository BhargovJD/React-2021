import mongoose from "mongoose";

const connDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongo  db connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error is: ${error.message}`.red.underline);
    process.exit;
  }
};

export default connDB;
