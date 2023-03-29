const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please tell us your name"],
  },
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
    validate: {
      //This only works on Save
      validator: function (el) {
        return el == this.password;
      },
      message: "Passwords are not the same",
    },
  },
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

const User = mongoose.model("User", userSchema);
module.exports = User;
