const express = require("express");
const dbconnection = require("./config/db");
const { router } = require("./routes/Userrouts");

const app = express();
app.use(express.json());


app.use('./users',router)
app.listen(8090, () => {
  console.log("expres");
  dbconnection()
});
