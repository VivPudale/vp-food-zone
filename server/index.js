let express = require("express");
let mongoose = require("mongoose");
const cors = require("cors");
const { connectionToMongoDB } = require("./App/connections/mongo");
const { foodRouter } = require("./App/routes/foodRouter");
require("dotenv").config();

let app = express();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

//Connection to MongoDB
connectionToMongoDB();

//Routes
app.use("/api/food", foodRouter);

//Connection to PORT
app.listen(process.env.PORT);
console.log("Server is running");
