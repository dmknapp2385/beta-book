const router = require("express").Router();

const {
  getClimbs,
  createClimb,
  getOneClimb,
  deleteAll,
  deleteClimb,
  updateClimb,
  searchClimb,
} = require("../../controllers/climb-controller");

//GET climbs matching name
router.route("/search/:name").get(searchClimb);

//GET all climbs api/climbs, delete all or post
router.route("/").get(getClimbs).delete(deleteAll).post(createClimb);

//GET one climb POST one to update and DELETE api/climbs/:id
router.route("/:id").get(getOneClimb).delete(deleteClimb).put(updateClimb);

module.exports = router;
