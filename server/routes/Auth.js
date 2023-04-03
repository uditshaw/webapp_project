const express = require("express");
const auth = require("../controller/authController.js");
const cookieParser = require('cookie-parser')
const router = express.Router();
const jwt=require('jsonwebtoken');
router.use(cookieParser());
router.route("/login").post(auth.isKiitEmail, auth.login);

router.route("/register").get(auth.AllUsers);
router.route("/register").post(auth.isKiitEmail, auth.newRegister);

module.exports = router;

// router.route("/register").post(auth.checkName,auth.checkEmail,auth.checkPasswords,auth.comparePasswords,auth.register);
