const mongoose = require("mongoose");
// require("dotenv").config();
// console.log(process.env.MONGO_URI)
const options={
    useNewUrlParser: true, useUnifiedTopology: true
}
const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI, options);
    console.log("Connected to MongoDb DataBase");
  } catch (err) {
    console.log("Failed in Connecting to Database::::", err);
    process.exit();
  }
};

module.exports = connectDb;
