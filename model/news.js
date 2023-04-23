const mongoose=require('mongoose');
const schema=mongoose.Schema;
const news=new schema({
    // img: {
    //     type:String,
    // },
    sharenews: {
        type:String,
        required:[true, 'please add news']
    },
},
{
    timestamps:true,
})
const shareNew=mongoose.model('New',news);
module.exports=shareNew;
