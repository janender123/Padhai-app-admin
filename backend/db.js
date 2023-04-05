const mongoose = require("mongoose");

// Replace the following with your MongoDB Atlas connection string
const mongoURI =
  "mongodb+srv://janender0707:Sharma%401@test-atlas.1zs8ply.mongodb.net/test?retryWrites=true&w=majority";

const connectToMongo = () => {
  mongoose.connect(
    mongoURI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) {
        console.log("Error connecting to MongoDB Atlas", err);
      } else {
        console.log("Connected to MongoDB Atlas");
      }
    }
  );
};

module.exports = connectToMongo;
