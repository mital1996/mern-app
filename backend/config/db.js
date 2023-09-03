import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = mongoose.connect(process.env.MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(
      `MongoDB Connected: ${(await conn).connection.host}`.cyan.underline
    );
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
