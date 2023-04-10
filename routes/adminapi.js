const express=require('express');
const router=express.Router();
const Admin=require('../model/admin');
// const adminData=[{
//     email:"Eyob@5gamil.com",
//     password:"1234"
// }]
router.get('/admin',(req,res)=>{
    Admin.find().then(admin=>res.json(admin));
})
router.get('/admin/:id',(req,res)=>{
    Admin.findById({_id:req.params.id}).then(admin=>res.json(admin));
})
router.post('/admin',(req,res)=>{
    Admin.create(req.body).then(admin=>res.json(admin));
});
// Admin.insertMany(adminData).then(value=>console.log("successfully saved")).catch(err=>console.log(err));
module.exports=router;