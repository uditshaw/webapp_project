const Event=require('./../Model/userEvents');
var cors=require("cors")
exports.AllEvents=async(req,res)=>{
    try{
        const Events= await Event.find();
        res.status(200).json({
            status:"success",
            data:{Events}
        })
    }
    catch(err)
    {
        res.status(400).json({
            status:"Failed"
        })

    }
}

exports.AddEvent= async(req,res)=>{
    const  newEvent=await Event.create(req.body);
    try {
        const savedEvent = await newEvent.save();
        res.status(200).json(savedEvent);
      } catch (err) {
        
      }
}
exports.UpcomingEvent= async(req,res)=>{


    try{
        const Events= await Event.find({status:"Upcoming"});

        res.status(200).json({
            status:"success",
            data:{Events}
        })
    }
    catch(err)
    {
        res.status(400).json({
            status:"Failed"
        })

    }
}
exports.OngoingEvent= async(req,res)=>{

    try{
        const Events= await Event.find({status:"Ongoing"});
        
        res.status(200).json({
            status:"success",
            data:{Events}
        })
    }
    catch(err)
    {
        res.status(400).json({
            status:"Failed"
        })

    }
}
exports.PastEvent= async(req,res)=>{

    try{
        const Events= await Event.find({status:"Past"});
        res.status(200).json({
            status:"success",
            data:{Events}
        })
    }
    catch(err)
    {
        res.status(400).json({
            status:"Failed"
        })

    }
}
exports.getEventById= async(req,res)=>{


    try{
       
        const Events= await Event.find({_id:req.params.id});
     
        res.status(200).json({
            status:"success",
            data:{Events}
        })
    }
    catch(err)
    {
        res.status(400).json({
            status:"Failed"
        })

    }
}
exports.getEventByFilter= async(req,res)=>{
   
    try{
    
        var Events;
       if(req.body.department==' '&&req.body.status==' ')
       {
        Events= await Event.find();
     
       }
       else if(req.body.department==" ")
       {
        Events= await Event.find({status:req.body.status});
       }
        else if(req.body.status==" ")
        {
        Events= await Event.find({department:req.body.department});
        }
        else
        {
        Events= await Event.find({status:req.body.status,department:req.body.department});
   
    }
        res.status(200).json({
            status:"success",
            data:{Events}
        })
    }
    catch(err)
    {
        res.status(400).json({
            status:"Failed"
        })

    }
}
exports.OngoingEvent= async(req,res)=>{

    try{
        const Events= await Event.find({status:"Ongoing"});
        
        res.status(200).json({
            status:"success",
            data:{Events}
        })
    }
    catch(err)
    {
        res.status(400).json({
            status:"Failed"
        })

    }
}
exports.deleteEvent= async(req,res)=>{
  
    try{
        const Events= await Event.deleteOne({_id:req.body.id});
        
        res.status(200).json({
            status:"success",
            data:{Events}
        })
    }
    catch(err)
    {
        res.status(400).json({
            status:"Failed"
        })

    }
}

exports.Editvent= async(req,res)=>{

    try {
        const savedEvent = await Event.updateOne(req.body.query,req.body.param);
        
        console.log(savedEvent);
        res.status(200).json(savedEvent);
      } catch (err) {
        
      }
}
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

exports.AddEventToEvents= async(req,res)=>{
    console.log(req.body.id)
    console.log(req.body)
        try {
            var myquery = { _id: req.body.eventId };
            var newvalues = { $push: {registration:req.body.id}};
            const savedEvent = await Event.updateOne(myquery,newvalues);
         
        console.log(savedEvent);
            res.status(200).json({"message":"hi"})
          } catch (err) {
            
          }
    }