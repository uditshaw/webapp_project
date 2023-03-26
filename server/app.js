const express =require('express')
const auth=require('./routes/Auth')
const event=require('./routes/Events')
const search=require('./routes/Search')
const cors=require("cors");
const app=express();
app.use(express.json());
app.use(cors({
    origin: '*'
}));
app.options('*',cors());
app.use('/api/v1/users',auth);
app.use('/api/v1/events',event);
app.use('/api/v1/search',search);

module.exports=app;