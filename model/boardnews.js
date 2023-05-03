const mongoose=require('mongoose');
const schema=mongoose.Schema;
const news=new schema({
    // img: {
    //     type:String,
    // },
    boardnew: {
        type:String,
        required:[true, 'please add news']
    },
},
{
    timestamps:true,
})
const BoardNew=mongoose.model('BoardNews',news);
module.exports=BoardNew;
