const express=require('express');
const router=express.Router();
const {protect,isAdmin,isBoardMember}=require('../middleware/authMiddelware');
const { createAdminNews, getAdminNews } = require('../controllers/adminnews');
router.post('/',protect,isAdmin,createAdminNews)
router.get('/',protect,getAdminNews)
// router.get('/',protect,isAdmin,getAdminNews)
// router.put('/',updateNews)
// router.delete('/',deleteNews)
module.exports=router;