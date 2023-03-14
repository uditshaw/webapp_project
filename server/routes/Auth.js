const express=require('express')
const auth=require("../controller/authController.js")

const router = express.Router();
router.route('/register').post(auth.checkEmail,auth.register)

module.exports=router;