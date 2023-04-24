const User=require('./../Model/userModel');
const UserOtpVerification = require("./../Model/userOtpVerification");

const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");

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
exports.checkPasswords = (req,res,next) => {
    if (!req.body.password) {
        console.log("Password not entered");
        return res.status(400).json({
            "status": "failed",
            "message": "Please enter a password"
        })
    } else if (!req.body.passwordConfirm) {
        console.log("Confirmed Password not entered");
        return res.status(400).json({
            "status": "failed",
            "message": "Please confirm your password"
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
let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: 'test.event.reg@gmail.com',
        pass: 'qjqnqbrkedurunsn'
    }
})
exports.sendOtpVerificationEmail = async (req, res) => {

    const { email } = req.body;
    try {
        const otp = `${Math.floor(1000 + Math.random() * 9000)}`;
        console.log(otp);
        const mailOptions = {
            from: '"Event Admin" <test.event.reg@gmail.com>',
            to: email,
            subject: "Verify Your Email",
            html: `<p>Your OTP for email verification : <b>${otp}</b>.<br /><b>THIS OTP EXPIRES IN 2 MINUTES.</b></p>`
        }

        const saltRounds = 10;
        const hashedOTP = await bcrypt.hash(otp, saltRounds);
        const newOtpVerification = await new UserOtpVerification({
            email: email,
            otp: hashedOTP,
            createdAt: Date.now(),
            expiresAt: Date.now() + 120000
        });

        await newOtpVerification.save();
        transporter.sendMail(mailOptions);
        res.status(200).json({
           status: "pending",
           message: "Verification OTP sent to your email",
           data: {
            name: req.body.name,
            email: email,
            password: req.body.password,
            passwordConfirm: req.body.passwordConfirm
           },
        });
    } catch (err) {
        res.status(400).json({
            status: "failed",
            message: err.message,
            email: email
        });
    }
}
exports.otpVerification = async (req, res, next) => {
    try {
        let { otp } = req.body;
        console.log("Inside otpVerification" + otp);
        if (!otp) {
            console.log("Empty OTP Details");
            return res.status(400).json({
                "status": "failed",
                "message": "Empty OTP details are not allowed"
            })
        } else {
            const UserOtpVerificationRecords = await UserOtpVerification.find({
                email,
            });
            if(UserOtpVerificationRecords.length <= 0) {
                return res.status(400).json({
                    "status": "failed",
                    "message": "Account record doesn't exist"
                })
            } else {
                const {expiresAt} = UserOtpVerificationRecords[0];
                const hashedOTP = UserOtpVerificationRecords[0].otp;

                if(expiresAt < Date.now()) {
                    await UserOtpVerification.deleteMany({email});
                    return res.status(400).json({
                        "status": "failed",
                        "message": "OTP has expired"
                    })
                } else {
                    const validOtp = await bcrypt.compare(otp, hashedOTP);
                    if(!validOtp) {
                        return res.status(400).json({
                            "status": "failed",
                            "message": "Invalid OTP. Please check your inbox."
                        })
                    } else {
                        // await User.updateOne({_id: userId});
                        await UserOtpVerification.deleteMany({email});
                        res.status(200).json({
                            "status": "success",
                            "message": "User Registered Successfully",
                            "data": req.body.data,
                        })
                        next();
                    }
                }
            }
        }
    } catch (err) {
        return res.status(400).json({
            "status": "failed",
            "message": err.message
        })
    }
}

exports.register= async(req,res)=>{

    const  newUser=await User.create(req.body.data);
    try {
        const savedUser = await newUser.save();
      } catch (err) {
        res.status(400).json({
            "status": "failed",
            "message": "OTP verification failed due to server error"
        })
      }
}