const express=require('express');
const router=express.Router();
const {protect,isAdmin,isBoardMember, isShareholder}=require('../middleware/authMiddelware');
const { createBoardNews, getBoardNews } = require('../controllers/boardnews');
router.post('/',protect,isBoardMember,createBoardNews)
router.get('/',protect,isAdmin,getBoardNews)
// router.put('/',protect,isBoardMember,updateNews)
// router.delete('/',protect,isBoardMember,deleteNews)
module.exports=router;