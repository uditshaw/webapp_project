const User=require('./../Model/userModel');

exports.AllUsers = async (req,res,next) => {
    try {
        const User1 = await User.find({email: req.body.email});
        res.status(200).json({
            status:"success",
            data:{User1}
        })
    } catch {
        res.status(400).json({
            status:"Failed"
        })
    }
}

exports.checkName=(req,res,next) => {
    console.log("Inside checkName");
    name = req.body.name;
    if(!name){
        console.log("No name entered");
        return res.status(400).json({
            "status": "failed",
            "message": "Please enter your Name"
        })
    }
    next();
}
exports.checkEmail= async(req,res,next) => {
    console.log("Inside checkEmail")
    const regex = new RegExp('^[a-zA-Z0-9_.+-]+@kiit.ac.in');
    email=req.body.email;
    const check=email.match(regex);
    const User1 = await User.findOne({email: email});

    if(!check)
    {
        console.log('inside');
        return res.status(400).json({
            "status":"failed",
            "message":"Please use a valid KIIT email id"
        })
      
    } 
    else if(User1!==null && User1.email === email) {
        console.log("Email already exists");
        return res.status(400).json({
            "status": "failed",
            "message": "Email ID already exists"
        })
    }
    next();
   
}
exports.comparePasswords = (req,res,next) => {
    const pass = req.body.password;
    const passConf = req.body.passwordConfirm;

    if(pass !== passConf) {
        console.log("Passwords does not match");
        return res.status(400).json({
            "status": "failed",
            "message": "Passwords did not match"
        })
    }
    next();
}
exports.register= async(req,res)=>{

    const  newUser=await User.create(req.body);
    try {
        const savedUser = await newUser.save();
        res.status(200).json({
            "status":"success",
            "message": "User Registration Successful",
            savedUser
        });
      } catch (err) {
        
      }
}