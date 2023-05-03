const express=require('express');
require('dotenv').config() //allows to have .env files
const port=process.env.PORT || 5000;
const bodyParser= require('body-parser');
const {errorHandler}=require('./middleware/errorMiddleware');
const mongoose=require('mongoose');
const app=express();
mongoose.connect(process.env.MONGO_URL);
mongoose.Promise=global.Promise;
app.use(bodyParser.json());
app.use('/api/share',require('./routes/shareapi'));
app.use('/api/user',require('./routes/userapi'));
app.use('/api/login',require('./routes/loginapi'));
app.use('/api/boardreport',require('./routes/boardreport'));
app.use('/api/adminnews',require('./routes/adminnews'));
app.use('/api/boardnews',require('./routes/boardnews'));
app.use(errorHandler);
app.all('*', (req,res,next) => {
 res.send("page not found");
console.log("error");
next();
})
app.listen(port,()=>{
    console.log(`server is running at port ${port}....`);
})