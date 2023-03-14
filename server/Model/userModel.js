const mongoose = require('mongoose');

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please tell us your name']
    },
    email:{
        type:String,
        required:[true, 'Please provide your email'],
        unique: true,
        lowercase: true
    },
    photo:String,
    password:{
        type:String,
        required:[true,'Provide a password'],
        minlength:8
    },
    passwordConfirm:{
        type:String,
        required:[true,'Provide a confirm password'],
        minlength:8,
        validate:{
            //This only works on Save
            validator:function(el){
                return el==this.password;
            },
            message:'Passwords are not the same'
        }
    }
});
const User = mongoose.model('User',userSchema);
module.exports=User;