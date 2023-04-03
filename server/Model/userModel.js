const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const SECRET_KEY = "THISISTHEWEBAPPPROJECTFOREIGHTHSEMESTER";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please tell us your name"],
  },
  isAdmin:{
    type:String},

  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    lowercase: true,
  },
  photo: String,
  password: {
    type: String,
    required: [true, "Provide a password"],
    minlength: 8,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Provide a confirm password"],
    minlength: 8,
    // validate: {
    //   //This only works on Save
    //   validator: function (el) {
    //     return el == this.password;
    //   },
    //   message: "Passwords are not the same",
    // },
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
  events:[]
  
});

userSchema.pre("save", async function (next) {
  console.log("Hi from inside");
  if (this.isModified("password")) {
    console.log("Hi from inside - Hashing your password");
    this.password = bcrypt.hashSync(this.password, 12);
    this.passwordConfirm = bcrypt.hashSync(this.passwordConfirm, 12);
  }
  next();
});

userSchema.methods.generateAuthToken = async function () {
  // Try-catch for error handling using async function
  try {
    let newToken = await jwt.sign({ _id: this._id }, SECRET_KEY);

    // console.log("New token: " + JSON.stringify(newToken));
    this.tokens = this.tokens.concat({ token: newToken });
    await this.save();
    return newToken;
  } catch (error) {
    console.log(error);
  }
};

const User = mongoose.model("User", userSchema);
module.exports = User;
