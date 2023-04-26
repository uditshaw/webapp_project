const User = require("./../Model/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
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
  const regex = new RegExp("^[a-zA-Z0-9_.+-]+@kiit.ac.in");
  email = req.body.email;
  const check = email.match(regex);

  if (!check) {
    return res.status(400).json({
      status: "failed",
      message: "Please use a valid KIIT email id",
    });
  }

  next();
};

exports.login = async (req, res) => {
  try {
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

      res.header("Access-Control-Allow-Credentials", true);

      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 86400000),
      });
      res.cookie("id", userLogin._id.toString());
      res.cookie("name", userLogin["name"]);
      console.log(res.cookie.jwtoken);

      console.log(res.cookie.jwtoken);

      res.status(200).json({
        data: userLogin,
        message: "User signed in successfully",
      });
    } else {
      return res.status(400).json({ error: "Invalid Credentials" });
    }
  } catch (error) {}
};
exports.newRegister = async (req, res) => {
  const { name, email, password, passwordConfirm, isAdmin } = req.body;

  if (!name || !email || !password || !passwordConfirm) {
    return res.status(400).json({
      status: "failed",
      message: "Please enter all the required fields",
    });
  }

  try {
    const userExist = await User.findOne({ email: email });

    const count = await Schema.countDocuments();
    console.log("Logging the count of documents in database", count);

    if (userExist) {
      return res
        .status(400)
        .json({ status: "failed", message: "Email already exists" });
    } else if (password !== passwordConfirm) {
      return res.status(400).json({
        status: "failed",
        message: "Password and confirm password not same",
      });
    } else {
      const user = new User({
        email,
        password,
        passwordConfirm,
        name,
        isAdmin,
      });
      await user.save();
      res
        .status(201)
        .json({ status: "success", message: "User registered successfully" });
    }
  } catch (error) {}
};
exports.loginAdmin = async (req, res) => {
  try {
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

      res.header("Access-Control-Allow-Credentials", true);

      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 86400000),
      });

      res.cookie("Admin", userLogin["isAdmin"]);
      console.log(res.cookie.jwtoken);

      res.status(200).json({
        data: userLogin,
        message: "User signed in successfully",
      });
    } else {
      return res.status(400).json({ error: "Invalid Credentials" });
    }
  } catch (error) {}
};
