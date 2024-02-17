const mongoose = require("mongoose");
const dbName = "testing";

const connectToDB = async () => {
  try {
    await mongoose.connect(`mongodb://127.0.0.1/${dbName}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectToDB;
