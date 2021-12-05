const express = require("express");
const router = express.Router();
const config = require("config");
const User = require("../models/User")
const jwt = require("jsonwebtoken");



//get all users
router.get("/" , async(req , res)=>{
  try {
    const users = await User.find({})
    return res.json(users)

  } catch (error) {
    console.log(error.message);
  }
})




module.exports = router;
