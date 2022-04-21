const express = require("express");
const PORT = 3343;
require("./Config/db");
const app = express();
const routerPat = require("./Router/Router");
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("App is Ready TO Validate");
});

app.use(routerPat);

app.listen(PORT, () => {
  console.log("Server Listing to PORT...");
});
