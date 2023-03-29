const User = require("./../Model/userModel");
exports.checkEmail = (req, res, next) => {
  console.log("Inside the middleware");
  const regex = new RegExp("^[a-zA-Z0-9_.+-]+@kiit.ac.in");
  email = req.body.email;
  const check = email.match(regex);
  if (!check) {
    console.log("inside");
    return res.status(400).json({
      status: "failed",
      message: "Please use a valid KIIT mail id",
    });
  }
  next();
};
exports.register = async (req, res) => {
  const newUser = await User.create(req.body);
  try {
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (err) {}
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

    if (!userLogin) {
      return res.status(400).json({ error: "User does not exist" });
    }
    res.status(200).json({ message: "User signed in successfully" });
  } catch (error) {
    console.log(error);
  }
};
