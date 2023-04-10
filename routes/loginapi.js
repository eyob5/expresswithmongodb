const express=require('express');
const router=express.Router();
const Login=require('../model/userlogin');
router.get('/user',(req,res)=>{
  Login.find().then(user=>res.json(user));
})
router.get('/user/:id',(req,res)=>{
  Login.findById({_id:req.params.id}).then(user=>res.json(user));
})
router.post('/user',(req,res)=>{
    Login.create(req.body).then(user=>res.json(user));
    // console.log(req.body.email);
  
});
router.put('/user/:id',(req,res)=>{
    Login.findByIdAndUpdate({_id:req.params.id},req.body).then(()=>{
       Login.findOne({_id:req.params.id}).then(user=>res.json(user));
    });
})
module.exports=router;