//jshint esversion:6

const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/',function (req,res) {
    res.sendFile(__dirname+"/index.html");
    let date = new Date() ;
    // if (date.getDay()== 6 || date.getDay()== 0) {
    //   res.send("weekend");
    // }else {
    //     res.send("work day");
    // }
    
    
});

app.listen(3000,function(){
console.log("Server started at port 3000");
});
