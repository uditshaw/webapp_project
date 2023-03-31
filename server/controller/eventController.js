const Event = require("./../Model/userEvents");
var cors = require("cors");
const { mergeSlotProps } = require("@mui/base");
exports.AllEvents = async (req, res) => {
  try {
    console.log("Inside All Events Event");

    const Events = await Event.find();
    // res.header('Access-Control-Allow-Origin', '*');
    // res.header(
    //   'Access-Control-Allow-Headers',
    //   'Origin, X-Requested-With,Content-Type,Accept,Authorization'
    // );
    // res.header('Access-Control-Allow-Methods', 'GET,POST,PATCH,PUT');
    res.status(200).json({
      status: "success",
      data: { Events },
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed",
    });
  }
};

exports.AddEvent = async (req, res) => {
  const newEvent = await Event.create(req.body);
  try {
    console.log("Inside Add Event");

    const savedEvent = await newEvent.save();
    res.status(200).json(savedEvent);
  } catch (err) {}
};
exports.UpcomingEvent = async (req, res) => {
  try {
    // console.log("Inside Upcoming Event");
    console.log();
    const Events = await Event.find({ status: "Upcoming" });
    res.status(200).json({
      status: "success",
      data: { Events },
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed",
    });
  }
};
exports.OngoingEvent = async (req, res) => {
  try {
    // console.log("Inside Outgoing Event");
    console.log();
    const Events = await Event.find({ status: "Ongoing" });
    res.status(200).json({
      status: "success",
      data: { Events },
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed",
    });
  }
};
exports.PastEvent = async (req, res) => {
  try {
    // console.log("Inside Past Event");
    console.log();
    const Events = await Event.find({ status: "Past" });
    res.status(200).json({
      status: "success",
      data: { Events },
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed",
    });
  }
};
exports.getEventById = async (req, res) => {
  try {
    // console.log("Inside GetEventById");
    // console.log();
    const Events = await Event.find({ _id: req.params.id });

    res.status(200).json({
      status: "success",
      data: { Events },
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed",
    });
  }
};

// Get Event By Name(Search API)
exports.getEventByName = async (req, res) => {
  const { name } = req.query;

  try {
    // console.log("Inside GetEventByName");
    // console.log();
    const Events = await Event.find({
      name: { $regex: ".*" + name + ".*", $options: "i" },
    });
    if (Events.length > 0) {
      res.status(200).json({
        status: "success",
        data: { Events },
      });
    } else {
      res.status(200).json({
        status: "No results found ",
        data: { Events },
      });
    }
  } catch (err) {
    res.status(400).json({
      status: "Failed",
    });
  }
};
