const express=require('express')
const auth=require("../controller/authController.js")

const router = express.Router();
router.route('/register').get(auth.AllUsers)
router.route('/register').post(auth.checkName,auth.checkEmail,auth.checkPasswords
    ,auth.comparePasswords,auth.sendOtpVerificationEmail)

router.route('/verifyOTP').post(auth.otpVerification,auth.register);

module.exports=router;