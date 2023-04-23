const asyncHandler = require('express-async-handler');
const bcrypt=require('bcryptjs');
const shareNew = require('../model/news');
const createNews=asyncHandler(async(req,res)=>{
    const post = await shareNew.create({
        // img: req.body.img,
        sharenews:req.body.sharenews
      })
      res.status(200).json(post)
    })
const getNews=asyncHandler(async(req,res)=>{
  const news=await shareNew.find();
  if(!news){
    res.status(500)
    throw new Error('cannot fetch a news')
  }
  res.status(200).json(news);
})
module.exports={
    createNews,
    getNews,
}

