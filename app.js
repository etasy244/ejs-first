//jshint esversion:6

const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
//const ejs = require("ejs");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

//using ejs
app.set('view engine', 'ejs');

//home route
app.get('/',function (req,res) {
   // res.sendFile(__dirname+"/index.html");
    let today = new Date() ;
    let currentDay = today.getDay();
    let day ="";
    if (currentDay= 6 || currentDay== 0) {
        day = "Weekend";
    }else {
        day = "Weekday";
    }
    //view to render
    res.render('list', {kindOfDay: day});

    
});

//listen to this port
app.listen(3000,function(){
console.log("Server started at port 3000");
});
