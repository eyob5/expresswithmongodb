const express=require('express');
const router=express.Router();
const {getShare,createShare,updateShare,deleteShare}=require('../controllers/shareInfo');
const {protect,isAdmin}=require('../middleware/authMiddelware');
router.get('/',protect,isAdmin,getShare);
router.post('/',protect,isAdmin,createShare);
router.put('/:id',protect,isAdmin,updateShare);
router.delete('/:id',protect,isAdmin,deleteShare);
module.exports=router;