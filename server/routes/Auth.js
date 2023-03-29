const express = require("express");
const auth = require("../controller/authController.js");

const router = express.Router();
router.route("/register").post(auth.checkEmail, auth.register);

router.route("/login").post(auth.checkEmail, auth.login);

module.exports = router;
