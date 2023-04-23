//to connect to database we require mongoose
const mongoose=require('mongoose');
const schema=mongoose.Schema;
const shareSchema=new schema({
    firstname:{
        type:String,
        required:[true,"name filled is required"]
    },
    middlename:{
        type:String,
        required:[true,"name filled is required"]
    },
    lastname:{
        type:String,
        required:[true,"name filled is required"]
    },
    country:{
    type:String,
    required:[true,"name filled is required"]
    },
    city:{
        type:String,
        required:[true,"name filled is required"]
        },
        subcity:{
        type:String,
        required:[true,"name filled is required"]
        },
        wereda:{
            type:String,
            required:[true,"name filled is required"]
            },
            email:{
                type:String,
                required:[true,"name filled is required"] 
            },
            password:{
                type:String,
                required:[true,"name filled is required"] 
            },
            isAdmin: {
                type:Boolean,
                default:false,
            },
            houseNo:{
                type:String,
                required:[true,"name filled is required"]
                },
                phoneNo:{
                    type:String,
                    required:[true,"name filled is required"]
                    },
                    shareamount:{
                        type:String,
                        required:[true,"name filled is required"]
                        },
                        paidbirr:{
                            type:String,
                            required:[true,"name filled is required"]
                            }
},{
   timestamps:true
})
const Shareholders=mongoose.model('Shareholder',shareSchema);
module.exports=Shareholders;
