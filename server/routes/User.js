const express=require('express')
const user=require("../controller/userController.js")

const router = express.Router();
router.route('/').get(user.AllUsers);

module.exports=router;