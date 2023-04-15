const asyncHandler = require('express-async-handler');
const bcrypt=require('bcryptjs');
const Report=require('../model/report');
// const getReport=asyncHandler(async (req,res)=>{
//     const {email}=await Report.findById(req.user.id);
//     res.json(report);
// })
const createReport=asyncHandler(async(req,res)=>{
    const {adminreport}=req.body;
    if( !adminreport){
      res.status(404);
      throw new Error("please fill all filed");
    }
  const report=await Report.findOne({adminreport});
  if(report){
    res.status(404);
    throw new Error("'report already created'");

  }
  const postreport=await Report.create(req.body);
  if(postreport){
    res.status(201).json({
      _id:postreport.id,
      adminreport:postreport.adminreport,
    });
  }
    else{
      res.status(400);
      throw new Error("can not create");

    }
})
const getReport=asyncHandler(async(req,res)=>{
  const report=await Report.find();
    res.json(report);
    // console.log(report.adminreport)
})
module.exports={
    createReport,
    getReport,
}
