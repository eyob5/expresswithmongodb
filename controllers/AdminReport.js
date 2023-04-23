const asyncHandler = require('express-async-handler');
const bcrypt=require('bcryptjs');
const Report=require('../model/report');
// const getReport=asyncHandler(async (req,res)=>{
//     const {email}=await Report.findById(req.user.id);
//     res.json(report);
// })
const createReport=asyncHandler(async(req,res)=>{
    const {reporttype}=req.body;
    if(!reporttype){
      res.status(404);
      throw new Error("please add the report type");
    }
  // const report=await Report.findOne()
  // if(report){
  //   res.status(404);
  //   throw new Error("report already created");
  // }
  const postreport=await Report.create({
    reporttype:req.body.reporttype,
    adminreport:req.file.path
  });
  //   if(req.file){
  //  postreport.adminreport=req.file.path
  // }
  if(postreport){
    res.status(201).json({
      _id:postreport.id,
      reporttype:reporttype,
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
    res.send(report);
})
module.exports={
    createReport,
    getReport,
}

