const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const schema=mongoose.Schema;
const user=new schema({
    email:{
        type:String,
        required:[true,"name filled is required"]
    },
    password:{
        type:String,
        required:[true,"password filled is required"]
    },
    // oldpassword:{
    //     type:String, 
    // },
    // newpassword:{
    //     type:String, 
    // },

})
user.pre('save',async function(next){
    if(!this.isModified('password')){
       next();
    }
    this.password=await bcrypt.hash(this.password,10);
})
const Login=mongoose.model('UserLogin',user);
module.exports=Login;


        