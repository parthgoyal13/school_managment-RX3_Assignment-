const mongoose = require("mongoose");
require("dotenv").config();
const mongoURI = process.env.MONGODB_URI;

const initializeDatabase = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected Succesfully");
  } catch (error) {
    console.log("Connection Failed", error);
  }
};
module.exports = { initializeDatabase };
