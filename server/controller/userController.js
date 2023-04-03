const UserData=require('./../Model/userModel');
var cors=require("cors")
exports.AllUsers=async(req,res)=>{
    try{
        const User= await UserData.find();
        res.status(200).json({
            status:"success",
            data:{User}
        })
    }
    catch(err)
    {
        res.status(400).json({
            status:"Failed"
        })

    }
}
exports.makeAdmin= async(req,res)=>{

    try {
        const updateDocument = {
            $set: {
               isAdmin:"yes"
            }
         };
        const savedEvent = await UserData.updateOne(req.body.query,updateDocument);
        
        console.log(savedEvent);
        res.status(200).json(savedEvent);
      } catch (err) {
        
      }
}
exports.removeAdmin= async(req,res)=>{

    try {
        var myquery = { _id: req.body.id };
        var newvalues = { $set: {isAdmin:"no"}};
        const savedEvent = await UserData.updateOne(myquery,newvalues);
     
    console.log("i");
        res.status(200).json({"message":"hi"})
      } catch (err) {
        
      }
}
exports.AddEvent= async(req,res)=>{
console.log(req.body.id)
console.log(req.body)
    try {
        var myquery = { _id: req.body.id };
        var newvalues = { $push: {events:req.body.eventId}};
        const savedEvent = await UserData.updateOne(myquery,newvalues);
     
    console.log("i");
        res.status(200).json({"message":"hi"})
      } catch (err) {
        
      }
}
