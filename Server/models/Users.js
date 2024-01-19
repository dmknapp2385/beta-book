const { text } = require("body-parser");
const { Schema, model, Types } = require("mongoose");
const { Climb } = require("./Climbs");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    first: {
      type: String,
      trim: true,
    },
    last: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      required: true,
      match: [/.+@.+\..+/, "Must match an email address!"],
    },
    username: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
      minlength: 8,
    },
    height: {
      type: String,
      trim: true,
    },
    apeindex: {
      type: Number,
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
    climbs: [
      {
        type: Schema.Types.ObjectId,
        ref: "Climb",
      },
    ],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

// pre-save middleware to create password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);
module.exports = User;

//TODO: add validators for height, ape index
