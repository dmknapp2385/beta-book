const { Climb, User } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .populate({
            path: "climbs",
            select: "-__v",
          })
          .select("-__v -password");

        return userData;
      }

      throw new AuthenticationError("Not Logged In");
    },
    climbs: async (parent, args) => {
      const climbData = await Climb.find({}).populate({
        path: "userId",
        select: "-__v",
      });
      return climbData;
    },
  },
};
