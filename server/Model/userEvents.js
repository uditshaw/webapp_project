const mongoose = require('mongoose');

const userSchema= new mongoose.Schema({
    name:{
        type:String,
    },
    description:{
        type:String,
    },
    image:String,
    location:String,
    department:String,
    status:String,
    registration:[]
});
const Event = mongoose.model('Event',userSchema);
module.exports=Event;