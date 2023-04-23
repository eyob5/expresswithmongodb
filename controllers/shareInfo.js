const asyncHandler = require('express-async-handler');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const Shareholders=require('../model/share');
const { generateToken } = require('./login');
const  mongoose = require('mongoose');
const getShare=asyncHandler(async (req,res)=>{
    const share=await Shareholders.find();
    res.json(share);
})
const createShare=asyncHandler(async(req,res)=>{
    const {firstname,middlename,lastname,country,email,password,city,subcity,wereda,houseNo,phoneNo,shareamount,paidbirr}=req.body;
    if( !firstname || !middlename || !lastname  || !country ||!email ||!password || !city || !subcity || !paidbirr|| !wereda || !houseNo || !phoneNo || !shareamount){
      res.status(404);
      throw new Error("please fill all filed");
    }
  const shareExists=await Shareholders.findOne({email});
  if(shareExists){
    res.status(404);
    throw new Error("'shareholder already exists'");

  }
  const salt=await bcrypt.genSalt(10);
  const hashedPassword=await bcrypt.hash(password,salt);
  const share=await Shareholders.create({
      firstname,
      middlename,
      lastname,
      email,
      password:hashedPassword,
      country,
      city,
      subcity,
      wereda,
      houseNo,
      phoneNo,
      shareamount,
      paidbirr
  });
  if(share){
    res.status(201).json({
      _id:share.id,
      firstname:share.firstname,
      token:generateToken(share._id),
    });
  }
    else{
      res.status(400);
      throw new Error("can not create");
    }
})
const updateShare=asyncHandler(async(req,res)=>{
    const {shareamount,paidbirr}=req.body;
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
    res.status(404).json({error: 'no shareholder found'})
      }
        if(!shareamount || !paidbirr){
          res.status(404);
          throw new Error("please add all filed ");
        }
       const share= await Shareholders.findByIdAndUpdate({_id:id},req.body);
          const oneshare=await Shareholders.findOne({_id:id});
            res.json(oneshare);
})
const deleteShare=asyncHandler(async(req,res)=>{
  const {id}=req.params;
  if(!mongoose.Types.ObjectId.isValid(id)){
    res.status(404).json({error: 'no shareholder found'})
  }
  const shareholder = await Shareholders.findById(id)
  if (!shareholder) {
    res.status(400)
    throw new Error('shareholder not found');
  }
  await shareholder.deleteOne()
  res.status(200).json({ id:id })
})
module.exports={
    getShare,
    createShare,
    updateShare,
    deleteShare
}