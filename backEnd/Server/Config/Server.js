const express = require('express');
const app = express();
const PORT = process.env.PORT || "3150";

const server = app.listen(PORT, ()=>{
  
    console.log("==============Server Response======================");
    console.log(` Connected on Port : ${PORT}`);
    
});

module.exports = server;
