const UserData = require("./../Model/userModel");
var cors = require("cors");
exports.AllUsers = async (req, res) => {
  try {
    const User = await UserData.find();
    res.status(200).json({
      status: "success",
      data: { User },
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed",
    });
  }
};
exports.getUsers = async (req, res) => {
  try {
    const User = await UserData.find({_id:req.body.id});
    console.log(User[0].events)
    k=User[0].events;
    res.status(200).json({
      status: "success",
      data: { k },
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed",
    });
  }
};
exports.getUser = async (req, res) => {
  try {
    const User = await UserData.find({_id:req.body.id});
    console.log("inside user con"+req.body.id)
    res.status(200).json({
      status: "success",
      data: { User },
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed",
    });
  }
};
exports.makeAdmin = async (req, res) => {
  try {
    var myquery = { _id: req.body.id };
    var newvalues = { $set: { isAdmin: "yes" } };
    const savedEvent = await UserData.updateOne(myquery, newvalues);
    // const updateDocument = {
    //   $set: {
    //     isAdmin: "yes",
    //   },
    // };
    // const savedEvent = await UserData.updateOne(req.body.query, updateDocument);

    console.log(savedEvent);
    res.status(200).json(savedEvent);
  } catch (err) {}
};
exports.removeAdmin = async (req, res) => {
  try {
    var myquery = { _id: req.body.id };
    var newvalues = { $set: { isAdmin: "no" } };
    const savedEvent = await UserData.updateOne(myquery, newvalues);

    console.log("i");
    res.status(200).json({ message: "hi" });
  } catch (err) {}
};
exports.AddEvent = async (req, res) => {
  console.log(req.body.id);
  console.log(req.body);

  try {
    const User= await UserData.find({ _id: req.body.id })
    // console.log("inside " + User);

    var myquery = { _id: req.body.id };
    var newvalues = { $push: { events: req.body.eventId } };
    const savedEvent = await UserData.updateOne(myquery, newvalues);

    console.log("i");
    res.status(200).json({data:User});
  } catch (err) {

  }
};

exports.removeUser = async (req, res) => {
  console.log(req.body.id);
  try {
    var myquery = { _id: req.body.id };
    const savedUser = await UserData.deleteOne(myquery);
    res.status(200).json({ message: "user deleted"});
  } catch (err) {
    console.log("Error in removeUser() : "+err);
  }
};