const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userOtpVerificationSchema = new Schema({
    email: String,
    otp: String,
    createdAt: Date,
    expiresAt: Date,
});

const UserOtpVerification = mongoose.model(
    "UserOtpVerification",
    userOtpVerificationSchema
);

module.exports = UserOtpVerification;