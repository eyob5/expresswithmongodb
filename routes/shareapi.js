const express=require('express');
const router=express.Router();
const Shareholders=require('../model/share');
router.get('/share',(req,res)=>{
    Shareholders.find().then(share=>res.json(share));
    // res.json({type:'GET'})
})
router.get('/share/:id',(req,res)=>{
    Shareholders.findById({_id:req.params.id}).then(share=>res.json(share));
    // res.json({type:'GET'})
})
router.post('/share',(req,res)=>{
    // console.log(req.body);
    // let share=new share(req.body);
    // share.save();
    Shareholders.create(req.body).then(share=>res.json(share));
    // res.json({
    //     type:'POST',
    //     name:req.body.name,
    //     last:req.body.last
    // })
})
router.put('/share/:id',(req,res)=>{
    Shareholders.findByIdAndUpdate({_id:req.params.id},req.body).then(()=>{
        Shareholders.findOne({_id:req.params.id}).then(share=>res.json(share));
    });
})
router.delete('/share/:id',(req,res)=>{
    Shareholders.findByIdAndRemove({_id:req.params.id}).then(share=>res.json(share));
})
module.exports=router;