const express = require("express");
const multer = require("multer");
const event = require("../controller/eventController.js");
const router = express.Router();

// Image storage path
const imgconfig = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./uploads");
  },
  filename: (req, file, callback) => {
    callback(null, `image-${Date.now()}.${file.originalname}`);
  },
});

// Image filter
const isImage = (req, file, callback) => {
  if (file.mimetype.startsWith("image")) {
    callback(null, true);
  } else {
    callback(new Error("Only image files can be uploaded"));
  }
};

const upload = multer({
  storage: imgconfig,
  fileFilter: isImage,
});
router.route("/getEvents").post(event.getEvents);
router.route("/add").post(upload.single("photo"), event.AddEvent);

router.route("/delete").post(event.deleteEvent);
router.route("/").post(event.getEventByFilter);
router.route("/").get(event.AllEvents);
router.route("/Upcoming").get(event.UpcomingEvent);
router.route("/AddEventToEvents").post(event.AddEventToEvents);
router.route("/Ongoing").get(event.OngoingEvent);
router.route("/Edit").post(event.Editvent);
router.route("/Past").get(event.PastEvent);

router.route("/:id").get(event.getEventById);
// router.route('/search').get(event.getEventByName)
// router.route('/search').get(event.getEventByName)

module.exports = router;
