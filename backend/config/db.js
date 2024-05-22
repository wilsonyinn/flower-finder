// config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/flower-finder', {
      connectTimeoutMS: 30000,  // Increase connection timeout to 30 seconds
      socketTimeoutMS: 45000    // Increase socket timeout to 45 seconds
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;