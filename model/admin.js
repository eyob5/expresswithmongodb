const mongoose=require('mongoose');
const bcrypt=require('bcryptjs')
const schema=mongoose.Schema;
const adminSchema=new schema({
    email:{
        type:String,
        required:[true,"admin email is required"]
    },
    password:{
        type:String,
        required:[true,"admin password is required"]
    },
},
{
    timestamps:true
}
)
adminSchema.pre('save',async function(next){
    if(!this.isModified('password')){
       next();
    }
    this.password=await bcrypt.hash(this.password,10);
})
const Admin=mongoose.model('Admin',adminSchema);
module.exports=Admin;
