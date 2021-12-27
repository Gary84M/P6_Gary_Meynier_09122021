const express = require("express");
const router = express.Router();

const userCtrl = require("../controllers/user");
const max = require("../middleware/limiter");

router.post("/signup", userCtrl.signup);
router.post("/login", max, userCtrl.login);

module.exports = router;
