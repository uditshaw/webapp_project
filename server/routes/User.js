const express=require('express')
const user=require("../controller/userController.js")

const router = express.Router();
router.route('/').get(user.AllUsers);
router.route('/removeAdmin').post(user.removeAdmin);
router.route('/makeAdmin').post(user.makeAdmin);
router.route('/AddEvent').post(user.AddEvent);
module.exports=router;