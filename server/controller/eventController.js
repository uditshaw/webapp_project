const Event=require('./../Model/userEvents');
var cors=require("cors")
exports.AllEvents=async(req,res)=>{
    try{
        const Events= await Event.find();
        // res.header('Access-Control-Allow-Origin', '*');
        // res.header(
        //   'Access-Control-Allow-Headers',
        //   'Origin, X-Requested-With,Content-Type,Accept,Authorization'
        // );
        // res.header('Access-Control-Allow-Methods', 'GET,POST,PATCH,PUT');
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
    console.log(req.body.status)
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
