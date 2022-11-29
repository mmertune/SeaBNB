const mongoose = require("mongoose");

require("dotenv").config();
const mongoURI =
  // process.env.MONGO_URI ||
  "mongodb+srv://seabnb_admin:B0otL3ga1rb&B@seabnb-cluster.xnyxbhe.mongodb.net/seabnb_DB?&w=majority";

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
