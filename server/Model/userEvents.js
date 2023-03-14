const mongoose = require('mongoose');

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        
    },
    description:{
        type:String,
    },
    photo:String,
    status:String,
});
const User = mongoose.model('User',userSchema);
module.exports=User;