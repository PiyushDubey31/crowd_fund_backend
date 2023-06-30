const mongoose = require('mongoose');
require("dotenv").config()

const connectDB = async () => {
    try {
      await mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
  
      console.log('Connected to MongoDB!');
    } catch (error) {
      console.error('Failed to connect to MongoDB:', error);
      process.exit(1); // Terminate the application on connection failure
    }
  };
  
  module.exports = connectDB;
  