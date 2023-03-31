const User = require("./../Model/userModel");
const bcrypt = require("bcryptjs");

exports.AllUsers = async (req, res, next) => {
  try {
    console.log("From inside all users");
    const User1 = await User.find({ email: req.body.email });
    res.status(200).json({
      status: "success",
      data: { User1 },
    });
  } catch {
    res.status(400).json({
      status: "Failed",
    });
  }
};

exports.isKiitEmail = async (req, res, next) => {
  console.log("Inside isEmail");
  const regex = new RegExp("^[a-zA-Z0-9_.+-]+@kiit.ac.in");
  email = req.body.email;
  const check = email.match(regex);
  // const User1 = await User.findOne({ email: email });

  if (!check) {
    console.log("inside");
    return res.status(400).json({
      status: "failed",
      message: "Please use a valid KIIT email id",
    });
  }
  //  else if (User1 !== null && User1.email === email) {
  //   console.log("Email already exists");
  //   return res.status(400).json({
  //     status: "failed",
  //     message: "Email ID already exists",
  //   });
  // }
  next();
};

exports.login = async (req, res) => {
  try {
    console.log("From inside Login");

    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "Email or Password fields cannot be empty" });
    }

    const userLogin = await User.findOne({ email: email });
    const isPasswordMatch = await bcrypt.compareSync(
      password,
      userLogin.password
    );

    if (userLogin && isPasswordMatch) {
      const token = await userLogin.generateAuthToken();

      console.log("Token = ", token);

      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 86400000), // 86400000 milliseconds = 1 Day
        httpOnly: true,
      });

      res.status(200).json({ message: "User signed in successfully" });
    } else {
      return res.status(400).json({ error: "Invalid Credentials" });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.newRegister = async (req, res) => {
  console.log("Inside New Register");
  const { name, email, password, passwordConfirm } = req.body;

  if (!name || !email || !password || !passwordConfirm) {
    return res
      .status(422)
      .json({ error: "Please enter all the required fields" });
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(422).json({ error: "Email already exists" });
    } else if (password !== passwordConfirm) {
      return res
        .status(422)
        .json({ error: "Password and confirm password not same" });
    } else {
      const user = new User({ email, password, passwordConfirm, name });
      await user.save();
      res.status(201).json({ message: "User registered successfully" });
    }
  } catch (error) {
    console.log(error);
  }
};

// exports.checkName = (req, res, next) => {
//   console.log("Inside checkName");
//   name = req.body.name;
//   if (!name) {
//     console.log("No name entered");
//     return res.status(400).json({
//       status: "failed",
//       message: "Please enter your Name",
//     });
//   }
//   next();
// };
// exports.checkPasswords = (req, res, next) => {
//   console.log("Inside checkPassword");

//   if (!req.body.password) {
//     console.log("Password not entered");
//     return res.status(400).json({
//       status: "failed",
//       message: "Please enter a password",
//     });
//   } else if (!req.body.passwordConfirm) {
//     console.log("Confirmed Password not entered");
//     return res.status(400).json({
//       status: "failed",
//       message: "Please confirm your password",
//     });
//   }
//   next();
// };
// exports.comparePasswords = (req, res, next) => {
//   console.log("Inside comparePasswords");

//   const pass = req.body.password;
//   const passConf = req.body.passwordConfirm;

//   if (pass !== passConf) {
//     console.log("Passwords does not match");
//     return res.status(400).json({
//       status: "failed",
//       message: "Passwords did not match",
//     });
//   }
//   next();
// };
// exports.register = async (req, res) => {
//   console.log("Inside Register");

//   const newUser = await User.create(req.body); // This line is creating problems.
//   console.log("After newUser creation");

//   try {
//     console.log("Just before save method");
//     const savedUser = await newUser.save();
//     res.status(201).json({
//       status: "success",
//       message: "User Registration Successful",
//       savedUser,
//     });
//   } catch (err) {}
// };
