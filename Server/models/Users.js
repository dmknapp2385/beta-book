const { text } = require("body-parser");
const { Schema, model, mongoose } = require("mongoose");
const { Climb } = require("./Climbs");

const userSchema = new Schema(
  {
    first: {
      type: String,
      trim: true,
      required: true,
    },
    last: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      // TODO: email validation through mongodb
      type: String,
      trim: true,
      required: true,
    },
    username: {
      type: String,
      trim: true,
      required: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
    },
    height: {
      type: String,
      trim: true,
    },
    age: {
      type: Number,
      trim: true,
    },
    location: {
      type: String,
      trim: true,
    },
    climbs: {
      type: mongoose.ObjectId,
      ref: "Climb",
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

const User = model("User", userSchema);
module.exports = User;
