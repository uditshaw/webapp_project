const app=require('./app');
const db=require('./dbconfig');
app.listen(8000,()=>{
    db.connect();
    console.log('server started')
})