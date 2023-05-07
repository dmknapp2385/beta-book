const { Climb } = require("../models");

const climbController = {
  //get all climbs
  getClimbs(req, res) {
    Climb.find()
      .select("-__v")
      .then((dbClimbdata) => res.json(dbClimbdata))
      .catch((err) => res.json(err));
  },

  // create climb
  createClimb({ params, body }, res) {
    Climb.create(body).then((data) => res.json(data));
  },

  // get one climb by id
  getOneClimb({ params }, res) {
    Climb.findById({ _id: params.id })
      .select("-__v")
      .then((dbClimb) => res.json(dbClimb))
      .catch((err) => res.json(err));
  },

  //get climb by search params name=?
  searchClimb({ params }, res) {
    Climb.find({ name: { $regex: params.name, $options: "i" } })
      .select("-__v")
      .then((dbClimb) => res.json(dbClimb))
      .catch((err) => res.json(err));
  },

  //update climb by id
  updateClimb({ params, body }, res) {
    Climb.findOneAndUpdate({ _id: params.id }, body, {
      new: true,
      runValidators: true,
    })
      .then((response) => res.json(response))
      .catch((err) => res.json(err));
  },

  //delete one climb by id
  deleteClimb({ params }, res) {
    Climb.deleteOne({ _id: params.id }).then((response) => {
      if (response.deletedCount === 0) {
        res.status(404).json({ message: "No climb found with thid Id" });
        return;
      }
      res.json({ message: "Climb Deleted" });
    });
  },

  // delete all climbs
  deleteAll(req, res) {
    Climb.deleteMany()
      .then((response) =>
        res.json({ message: `${respons.deletedCount} climbs(s) deleted` })
      )
      .catch((err) => res.json(err));
  },
};

module.exports = climbController;
