const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://college:college123@myatlasclusteredu.tchpdvk.mongodb.net/?retryWrites=true&w=majority&appName=myAtlasClusterEDU"
  )
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error);
  });

const newSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  pass: {
    type: String,
    required: true,
  },
});

// Consider using bcrypt for password hashing before saving
const collection = mongoose.model("studentdata", newSchema);

module.exports = collection;
