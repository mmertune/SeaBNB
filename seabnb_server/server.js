const express = require("express");
const app = express();
const dotenv = require("dotenv").config({path: '../.env'})
const port = process.env.PORT
const connectDB = require(`./config/db`)
app.set("view engine", "ejs")

//middleware
connectDB()
app.use(express.json())
app.use(express.urlencoded({extended:"false"}))


app.use("/api/users/", require("./routes/userRoutes"))

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});