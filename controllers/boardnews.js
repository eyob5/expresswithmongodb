const asyncHandler = require('express-async-handler');
const bcrypt=require('bcryptjs');
const BoardNew = require('../model/boardNews');
const createBoardNews=asyncHandler(async(req,res)=>{
    const {boardnew}=req.body;
    if(!boardnew){
      res.status(404);
      throw new Error("please fill news");
    }
      const post = await BoardNew.create({
          // img: req.body.img,
          boardnew:req.body.boardnew
        })
        if(post){
        res.status(200).json(post)
        }
        else{
          res.status(400);
          throw new Error("can not create");
        }
      })
const getBoardNews=asyncHandler(async(req,res)=>{
  const news=await BoardNew.find();
  if(!news){
    res.status(500)
    throw new Error('cannot fetch a news')
  }
  res.status(200).json(news);
})
module.exports={
    createBoardNews,
    getBoardNews,
}

