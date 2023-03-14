const User=require('./../Model/userModel');
exports.checkEmail=(req,res,next)=>{
    console.log("Inside the middleware")
    const regex = new RegExp('^[a-zA-Z0-9_.+-]+@kiit.ac.in');
   email=req.body.email;
   const check=email.match(regex);
    if(!check)
    {
        console.log('inside');
      return res.status(400).json({
            "status":"failed",
            "message":"Please use a valid KIIT mail id"
        })
      
    }
    next();
   
}
exports.register= async(req,res)=>{

    const  newUser=await User.create(req.body);
    try {
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
      } catch (err) {
        
      }
}