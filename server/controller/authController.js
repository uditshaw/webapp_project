const User = require('./../Model/userModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const UserOtpVerification = require("./../Model/userOtpVerification");
const nodemailer = require("nodemailer");
const { CleaningServices } = require('@mui/icons-material');

exports.AllUsers = async (req, res, next) => {
  try {
    console.log('From inside all users')
    const User1 = await User.find({ email: req.body.email })
    res.status(200).json({
      status: 'success',
      data: { User1 }
    })
  } catch {
    res.status(400).json({
      status: 'Failed'
    })
  }
}

exports.isKiitEmail = async (req, res, next) => {
  const regex = new RegExp('^[a-zA-Z0-9_.+-]+@kiit.ac.in')
  email = req.body.email
  const check = email.match(regex)

  if (!check) {
    return res.status(400).json({
      status: 'failed',
      message: 'Please use a valid KIIT email id'
    })
  }

  next()
}

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res
        .status(400)
        .json({ error: 'Email or Password fields cannot be empty' })
    }

    const userLogin = await User.findOne({ email: email })
    const isPasswordMatch = await bcrypt.compareSync(
      password,
      userLogin.password
    )

    if (userLogin && isPasswordMatch) {
      const token = await userLogin.generateAuthToken()

      res.header('Access-Control-Allow-Credentials', true)

      res.cookie('jwtoken', token, {
        expires: new Date(Date.now() + 86400000)
      })
      res.cookie('id', userLogin._id.toString())
      res.cookie('name', userLogin['name'])
      console.log(res.cookie.jwtoken)

      console.log(res.cookie.jwtoken)

      res.status(200).json({
        data: userLogin,
        message: 'User signed in successfully'
      })
    } else {
      return res.status(400).json({ error: 'Invalid Credentials' })
    }
  } catch (error) {}
}
exports.newRegister = async (req, res, next) => {
  const { name, email, password, passwordConfirm, isAdmin } = req.body
  
  if (!name || !email || !password || !passwordConfirm) {
    return res.status(400).json({
      status: 'failed',
      message: 'Please enter all the required fields'
    })
  }

  try {
    const userExist = await User.findOne({ email: email })

    if (userExist) {
      return res
        .status(400)
        .json({ status: 'failed', message: 'Email already exists' })
    } else if (password !== passwordConfirm) {
      return res.status(400).json({
        status: 'failed',
        message: 'Password and confirm password not same'
      })
    }
    next();
  } catch (error) {}
}
exports.loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res
        .status(400)
        .json({ error: 'Email or Password fields cannot be empty' })
    }

    const userLogin = await User.findOne({ email: email })
    const isPasswordMatch = await bcrypt.compareSync(
      password,
      userLogin.password
    )

    if (userLogin && isPasswordMatch) {
      const token = await userLogin.generateAuthToken()

      res.header('Access-Control-Allow-Credentials', true)

      res.cookie('jwtoken', token, {
        expires: new Date(Date.now() + 86400000)
      })

      res.cookie('Admin', userLogin['isAdmin'])
      console.log(res.cookie.jwtoken)

      res.status(200).json({
        data: userLogin,
        message: 'User signed in successfully'
      })
    } else {
      return res.status(400).json({ error: 'Invalid Credentials' })
    }
  } catch (error) {}
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

  const count = await User.countDocuments();
  console.log("Total number of user: " + count + "and count type is " + typeof count);
  if(count === 0){
    req.body.data.isAdmin = "yes";
  }
  // console.log("isAdmin value: "+isAdmin);
    const  newUser=await User.create(req.body.data);
    console.log(req.body.data);
    try {
        const savedUser = await newUser.save();
      } catch (err) {
        res.status(400).json({
            "status": "failed",
            "message": "OTP verification failed due to server error"
        })
      }
}
