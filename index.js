const express=require('express');
const dotenv=require('dotenv').config() //allows to have .env files
const port=process.env.PORT || 5000;
const bodyParser= require('body-parser');
const mongoose=require('mongoose');
const app=express();
mongoose.connect(process.env.MONGO_URL);
mongoose.Promise=global.Promise;
app.use(bodyParser.json());
// const shareroutes=require('./routes/shareapi');
// const adminroutes=require('./routes/adminapi');
// const userroutes=require('./routes/loginapi')
app.use('/api',require('./routes/shareapi'));
app.use('/api',require('./routes/adminapi'));
app.use('/api',require('./routes/loginapi'));
app.listen(port,()=>{
    console.log(`server is running at port ${port}....`);
})