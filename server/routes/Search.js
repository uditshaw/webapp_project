const express=require('express')
const event=require("../controller/eventController.js")
const router=express.Router();

router.route('').get(event.getEventByName)

module.exports=router;