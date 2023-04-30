const climbRoutes = require("./climb-routes");
const router = require("express").Router();

router.use("/climbs", climbRoutes);

module.exports = router;
