const mongoose=require('mongoose');
const schema=mongoose.Schema;
const report=new schema({
    reporttype: {
        type:String,
        required:[true, 'please add report type'],
    },
    boardreport: {
        type:String,
        // required:[true, 'please add report'],
    },
},
{
    timestamps:true,
})
const BReport=mongoose.model('BoardReport',report);
module.exports=BReport;


        