const express=require('express');
const router=express.Router();
const  {createReport, getReport}=require('../controllers/boardreport');
const {protect,isAdmin, isBoardMember}=require('../middleware/authMiddelware');
const upload = require('../middleware/upload');
router.post('/',protect,isBoardMember,upload.single('boardreport'),createReport)
router.get('/',getReport)
module.exports=router;