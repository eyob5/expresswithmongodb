const asyncHandler = require('express-async-handler');
const bcrypt=require('bcryptjs');
// const fs=require('fs')
const BReport = require('../model/boardreport');
// const getReport=asyncHandler(async (req,res)=>{
//     const {email}=await Report.findById(req.user.id);
//     res.json(report);
// })
const createReport=asyncHandler(async(req,res)=>{
    const {originalname, path}=req.file;
    const{reporttype,boardreport}=req.body;
    // if(!reporttype){
    //   res.status(404);
    //   throw new Error("please add the report type");
    // }
  // const report=await BReport.findOne()
  // if(report){
  //   res.status(404);
  //   throw new Error("report already created");
  // }
    //   if(req.file){
  //  postreport.adminreport=req.file.path
  // }
  const postreport=await BReport.create({
    reporttype:originalname,
    boardreport:path
  });
  //   if(req.file){
  //  postreport.adminreport=req.file.path
  // }
  console.log(req.file);
  if(postreport){
    res.status(201).json({
      _id:postreport.id,
      reporttype:postreport.reporttype,
      boardreport:postreport.boardreport,
    });
  }
    else{
      res.status(400);
      throw new Error("can not create");

    }
})
const getReport=asyncHandler(async(req,res)=>{
  const report=await BReport.find();
    res.send(report);
})
module.exports={
    createReport,
    getReport,
}

