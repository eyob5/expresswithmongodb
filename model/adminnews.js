const mongoose=require('mongoose');
const schema=mongoose.Schema;
const news=new schema({
    // img: {
    //     type:String,
    // },
    adminnews: {
        type:String,
        required:[true, 'please add news']
    },
},
{
    timestamps:true,
})
const AdminNews=mongoose.model('AdminNew',news);
module.exports=AdminNews;
