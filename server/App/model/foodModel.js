const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    text: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
      enum: ["breakfast", "lunch", "dinner"],
    },
  },
  {
    timestamps: true,
  },
);

let foodModel = mongoose.model("food", foodSchema);
module.exports = { foodModel };
