const jwt=require('jsonwebtoken');
const asyncHandler = require('express-async-handler')
const Shareholders=require('../model/share');
const protect = asyncHandler(async (req, res, next) => {
    let token
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      try {
        // Get token from header
        token = req.headers.authorization.split(' ')[1]
  
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
  
        // Get user from the token
        req.user = await Shareholders.findById(decoded.id).select('-password')
        next()
      } catch (error) {
        console.log(error)
        res.status(401)
        throw new Error('Not authorized')
      }
    }
    if (!token) {
      res.status(401)
      throw new Error('Not authorized,no token')
    }
  })
  const isBoardMember =  (req, res, next) => {
    if (req.user.roll !== 1){
      throw new Error('Not authorized,no boardmember')
    }
    next();
  }
  const isShareholder =  (req, res, next) => {
    if ( req.user.roll !== 0){
      throw new Error('Not authorized,no shareholder')
    }
    next();
  }
  const isAdmin =  (req, res, next) => {
    if (req.user.roll === 0){
      throw new Error('Not authorized,u r shareholder no admin')
    }
    else if(req.user.roll === 1){
      throw new Error('Not authorized,u r boardmember no admin')
    }
    next();
  }
module.exports={protect,isBoardMember,isAdmin,isShareholder};