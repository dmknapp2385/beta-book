const { text } = require("body-parser");
const { Schema, model, Types } = require("mongoose");

const climbSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    grade: {
      type: String,
      trim: true,
      required: true,
    },
    location: {
      type: String,
      trim: true,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
      trim: true,
    },
    beta: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const Climb = model("Climb", climbSchema);

module.exports = Climb;
