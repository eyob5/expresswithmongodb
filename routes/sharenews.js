const express=require('express');
const router=express.Router();
const {protect,isAdmin}=require('../middleware/authMiddelware');
const { createNews, getNews } = require('../controllers/sharenews');
router.post('/',protect,createNews)
router.get('/',protect,getNews)
// router.put('/',updateNews)
// router.delete('/',deleteNews)
module.exports=router;