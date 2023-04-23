const express=require('express');
const router=express.Router();
const  {createReport, getReport}=require('../controllers/AdminReport');
const {protect,isAdmin}=require('../middleware/authMiddelware');
const upload = require('../middleware/upload');
router.post('/',protect,isAdmin,upload.single('adminreport'),createReport)
router.get('/',protect,getReport)
module.exports=router;





















// router.put('/user/:id',async(req,res)=>{
//   const{Email,password}=req.body;
//   const salt=await bcrypt.genSalt(10);
//     const hashedPassword=await bcrypt.hash(password,salt);
//     const user=await Shareholders.findByIdAndUpdate({_id:req.params.id},{Email,
//       password:hashedPassword,});
//        const oneuser=await Shareholders.findOne({_id:req.params.id});
//        res.json(oneuser);
//     });
// module.exports=router;