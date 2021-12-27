const express = require("express");
const router = express.Router();
const reqLimiter = require("../middleware/limiter");

const userCtrl = require("../controllers/user");

router.post("/signup", userCtrl.signup);
router.post("/login", reqLimiter.limiter, userCtrl.login);

module.exports = router;
