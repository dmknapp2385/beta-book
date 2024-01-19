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
    //TODO!!!!!!select -password when done testing
    users: async () => {
      const usersData = await User.find({})
        .populate({ path: "climbs", select: "-__v" })
        .select("-__v");

      return usersData;
    },
    climbs: async () => {
      const climbsData = await Climb.find({}).populate({
        path: "userId",
        select: "-__v",
      });

      return climbsData;
    },
    climb: async (parent, { _id }) => {
      const climbData = await Climb.findOne({ _id }).populate({
        path: "userId",
        select: "-__v",
      });
      return climbData;
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
    deleteUser: async (parent, { userId }) => {
      const updatedClimbs = await Climb.deleteMany({ userId: userId });
      const updatedUser = await User.findByIdAndDelete({ _id: userId });
      return await User.find({});
    },
    updateUser: async (parent, { input }, context) => {
      if (context.user) {
        const userData = await User.findByIdAndUpdate(
          { _id: context.user._id },
          {
            $set: {
              first: input.first,
              last: input.last,
              username: input.username,
              email: input.email,
              height: input.height,
              apeindex: input.apeindex,
              home: input.home,
              apeindex: input.apeindex,
            },
          },
          { new: true }
        );
        return userData;
      }
      throw new AuthenticationError("You need to be logged in");
    },
    addClimb: async (parent, { input }, context) => {
      if (context.user) {
        const climb = await Climb.create(input);
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $addToSet: { climbs: climb._id } },
          { new: true, runValidators: true }
        ).populate({
          path: "climbs",
          select: "-__v",
        });

        return updatedUser;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    removeClimb: async (parent, { climbId }, context) => {
      if (context.user) {
        const deletedclimb = await Climb.findByIdAndDelete({ _id: climbId });

        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { climbs: climbId } },
          { new: true }
        ).populate({
          path: "climbs",
          select: "-__v",
        });

        return updatedUser;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    updateClimb: async (parent, { activityId, input }, context) => {
      if (context.user) {
        const updatedClimb = await Climb.findOneAndUpdate(
          { _id: climbId },
          {
            $set: {
              name: input.name,
              grade: input.grade,
              location: input.location,
              beta: input.beta,
              date: input.date,
            },
          },
          { new: true }
        );
        return updatedClimb;
      }
    },
  },
};

module.exports = resolvers;
