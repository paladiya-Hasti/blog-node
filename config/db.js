const mongoose = require("mongoose");

const dbconnection = async () => {
  await mongoose.connect(
    "mongodb+srv://hastipaladiya2001:abcd123@cluster0.kyhti.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  console.log("monogdb connection");
};

module.exports = dbconnection;
