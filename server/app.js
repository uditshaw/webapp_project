const express =require('express')
const auth=require('./routes/Auth')
const app=express();
app.use(express.json());
app.use('/api/v1/users',auth);

module.exports=app;