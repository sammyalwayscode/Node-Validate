const mongoose = require("mongoose");
const MONGODB_URI = "mongodb://localhost/testValidate";

mongoose.connect(MONGODB_URI);
mongoose.connection
  .on("open", (streme) => {
    console.log("Connected to Local Base Sucessfully");
  })
  .once("error", (streme) => {
    console.log("Failed to comnnect to Database");
  });
