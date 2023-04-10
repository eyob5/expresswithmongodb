//to connect to database we require mongoose
const mongoose=require('mongoose');
const schema=mongoose.Schema;
const shareSchema=new schema({
    FirstName:{
        type:String,
        required:[true,"name filled is required"]
    },
    MiddleName:{
        type:String,
        required:[true,"name filled is required"]
    },
    LastName:{
        type:String,
        required:[true,"name filled is required"]
    },
    Country:{
    type:String,
    required:[true,"name filled is required"]
    },
    City:{
        type:String,
        required:[true,"name filled is required"]
        },
        Subcity:{
        type:String,
        required:[true,"name filled is required"]
        },
        Wereda:{
            type:String,
            required:[true,"name filled is required"]
            },
            HouseNo:{
                type:String,
                required:[true,"name filled is required"]
                },
                PhoneNo:{
                    type:String,
                    required:[true,"name filled is required"]
                    },
                    ShareAmount:{
                        type:String,
                        required:[true,"name filled is required"]
                        }
},{
   timestamps:true
})
const Shareholders=mongoose.model('Shareholder',shareSchema);
module.exports=Shareholders;
