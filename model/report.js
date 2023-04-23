const mongoose=require('mongoose');
const schema=mongoose.Schema;
const report=new schema({
    reporttype: {
        type:String,
        required:[true, 'please add report type'],
    },
    adminreport: {
        type:String,
        // required:[true, 'please add report'],
    },
},
{
    timestamps:true,
})
const Report=mongoose.model('AdminReport',report);
module.exports=Report;


        