const { User } = require("../models");

const userController = {
  //get all users
  getUsers(req, res) {
    User.find()
      .select("-__v")
      .then((dbUserdata) => res.json(dbUserdata))
      .catch((err) => res.json(err));
  },

  //create user
  createUser({ params, body }, res) {
    User.create(body).then((data) => res.json(data));
  },

  // get one user by id
  getOneUser({ params }, res) {
    User.findById({ _id: params.id })
      .select("-__v")
      .then((dbUser) => res.json(dbUser))
      .catch((err) => res.json(err));
  },

  //updateUser by id
  updateUser({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.id }, body, {
      new: true,
      runValidators: true,
    })
      .then((response) => res.json(response))
      .catch((err) => res.json(err));
  },

  //delete user by id
  deleteUser({ params }, res) {
    User.deleteOne({ _id: params.id }).then((response) => {
      if (response.deletedCount === 0) {
        res.status(400).json({ message: "NO User found with this id" });
        return;
      }
      res.json({ message: "User Deleted" });
    });
  },

  //delete all users
  deleteAll(req, res) {
    User.deleteMany()
      .then((r) => res.json({ message: `${r.deletedCount}, user(s) deleted` }))
      .catch((e) => res.json(e));
  },
};

module.exports = userController;
