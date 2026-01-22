let express = require("express");
const { insertFoodData, getFoodData } = require("../controller/foodDataController");
let foodRouter = express.Router();

foodRouter.post("/insert", insertFoodData);
foodRouter.get("/getFoodData", getFoodData )

module.exports = {foodRouter};