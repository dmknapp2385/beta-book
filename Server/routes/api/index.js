const climbRoutes = require("./climb-routes");
const userRoutes = require("./user-routes");
const router = require("express").Router();

router.use("/climbs", climbRoutes);
router.use("/users", userRoutes);

module.exports = router;
