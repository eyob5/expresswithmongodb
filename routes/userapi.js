const express=require('express');
const router=express.Router();
const  {updatepassword}=require('../controllers/user');
const {protect}=require('../middleware/authMiddelware');
// router.post('/register',protect,isAdmin,registerShareholder)
router.put('/:id',protect,updatepassword);
module.exports=router;