const express=require('express');
const router=express.Router();
const  {updatepassword,getMe}=require('../controllers/user');
const {protect}=require('../middleware/authMiddelware');
// router.post('/register',protect,isAdmin,registerShareholder)
router.get('/',protect,getMe)
router.put('/:id',protect,updatepassword);
module.exports=router;