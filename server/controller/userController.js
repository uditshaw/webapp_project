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