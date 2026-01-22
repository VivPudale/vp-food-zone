const { foodModel } = require("../model/foodModel");

const foodData = [
  {
    name: "Boilded Egg",
    price: 10,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "/images/egg.png",
    type: "breakfast",
  },
  {
    name: "RAMEN",
    price: 25,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "/images/ramen.png",
    type: "lunch",
  },
  {
    name: "GRILLED CHICKEN",
    price: 45,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "/images/chicken.png",
    type: "dinner",
  },
  {
    name: "CAKE",
    price: 18,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "/images/cake.png",
    type: "breakfast",
  },
  {
    name: "BURGER",
    price: 23,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "/images/burger.png",
    type: "lunch",
  },
  {
    name: "PANCAKE",
    price: 25,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "/images/pancake.png",
    type: "dinner",
  },
];

//API POST /api/food/insert
let insertFoodData = async (req, res) => {
  try {
    const result = await foodModel.insertMany(foodData);
    res.send({
      status: 1,
      message: "Details saved successfully",
    });
  } catch (error) {
    res.send({
      status: 0,
      message: "Error while saving data",
      error: error,
    });
  }
};

//API GET /api/food/
let getFoodData = async (req, res) => {
  let query = {};
  if (req.query.filter === "All") {
    query = {}
  }else if(req.query.filter){
    query = { type: req.query.filter.toLowerCase()};
  }

  // console.log(typeof(req.query.filter));

  try {
    let result = await foodModel.find(query);
    res.send({
      status: 0,
      message: "Got the data",
      result,
    });
  } catch (error) {
    res.send({
      status: 0,
      message: "Error while getting food data",
      error: error,
    });
  }
};

module.exports = { insertFoodData, getFoodData };
