const mongoose=require('mongoose')
exports.connect = async () => {
    try {
      await mongoose.connect("mongodb://localhost:27017/student");
      console.log("Connected to mongoDB.");
    } catch (error) {
      throw error;
    }
  };
  
  mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
  });