const router = require("express").Router();

const {
  getUsers,
  login,
  createUser,
  getOneUser,
  updateUser,
  deleteUser,
  deleteAll,
} = require("../../controllers/user-controller");

//GET all users api/users, DELETE all or POST
router.route("/").get(getUsers).delete(deleteAll).post(createUser);

//Login user
router.route("/login").post(login)

//GET one cimb, PUT to update, DELETE one climb api/climbs/:id

router.route("/:id").get(getOneUser).delete(deleteUser).put(updateUser);

module.exports = router;
