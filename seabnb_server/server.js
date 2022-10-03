const express = require("express");
const dotenv = require("dotenv").config({path: '../.env'})
const connectDB = require(`./config/db`)

const port = process.env.PORT
const app = express();

//connect to mongoDB database
connectDB()

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:"false"}))

app.use("/api/users/", require("./routes/userRoutes"))
app.use("/api/cabins/", require("./routes/cabinRoutes"))


app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});