const express=require('express')
const event=require("../controller/eventController.js")

const router = express.Router();
router.route('/add').post(event.AddEvent)
router.route('/delete').post(event.deleteEvent);
router.route('/').post(event.getEventByFilter)
router.route('/').get(event.AllEvents)
router.route('/Upcoming').get(event.UpcomingEvent)
router.route('/Ongoing').get(event.OngoingEvent)
router.route('/Edit').post(event.Editvent)
router.route('/Past').get(event.PastEvent)
router.route('/:id').get(event.getEventById)



module.exports=router;