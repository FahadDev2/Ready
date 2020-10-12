const express = require("express");
const router = express.Router();
const passport = require("passport");



router.post("/register", (req,res)=>{
    console.log('hello');
});


module.exports = router;