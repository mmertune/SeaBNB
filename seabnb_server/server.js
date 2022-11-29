const express = require("express");
const dotenv = require("dotenv").config({ path: "../.env" });
const connectDB = require(`./config/db`);
const { errorHandler } = require("./middleware/errorMiddleware");

const port = process.env.PORT;
const app = express();

//connect to mongoDB database
connectDB();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: "false" }));
app.use(function (req, res, next) {
  // res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Origin",
    "https://loquacious-florentine-818f36.netlify.app"
  );

  res.header(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );

  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  
  next();
});

//routes
app.use("/api/users/", require("./routes/userRoutes"));
app.use("/api/cabins/", require("./routes/cabinRoutes"));

//middleware
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
