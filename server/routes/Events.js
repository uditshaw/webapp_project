const express=require('express')
const event=require("../controller/eventController.js")

const router = express.Router();
router.route('/').post(event.AddEvent)
router.route('/').get(event.AllEvents)
router.route('/Upcoming').get(event.UpcomingEvent)
router.route('/Ongoing').get(event.OngoingEvent)
router.route('/Past').get(event.PastEvent)
router.route('/:id').get(event.getEventById)
// router.route('/search').get(event.getEventByName)
// router.route('/search').get(event.getEventByName)

module.exports=router;