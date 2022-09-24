const express = require("express");
const app = express();
const dotenv = require("dotenv").config({path: '../.env'})
const port = process.env.PORT

app.set("view engine", "ejs")

app.use("/", require("./routes/userRoutes"))

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});