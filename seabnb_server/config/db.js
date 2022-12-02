const mongoose = require("mongoose");

require("dotenv").config();
const mongoURI = process.env.MONGO_URI;
const connectDB = async () => {
  try {
    const cnnct = await mongoose.connect(mongoURI, {
      retryWrites: false,
    });
    console.log(`MongoDB: Connected ${cnnct.connection.host} `);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
module.exports = connectDB;
