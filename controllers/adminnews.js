const asyncHandler = require('express-async-handler');
const bcrypt=require('bcryptjs');
const AdminNews = require('../model/adminNews');
const createAdminNews=asyncHandler(async(req,res)=>{
  const {adminnews}=req.body;
  if(!adminnews){
    res.status(404);
    throw new Error("please fill news");
  }
    const post = await AdminNews.create({
        // img: req.body.img,
        adminnews:req.body.adminnews
      })
      if(post){
      res.status(200).json(post)
      }
      else{
        res.status(400);
        throw new Error("can not create");
      }
    })
const getAdminNews=asyncHandler(async(req,res)=>{
  const news=await AdminNews.find();
  if(!news){
    res.status(500)
    throw new Error('cannot fetch a news')
  }
  res.status(200).json(news);
})
module.exports={
    createAdminNews,
    getAdminNews,
}

