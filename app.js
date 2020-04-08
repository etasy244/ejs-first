//jshint esversion:6

const express = require("express");
const https = require("https");
const request = require("request");
const bodyParser = require("body-parser");
//const ejs = require("ejs");
const app = express();


//using ejs
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

let nextItems = [];

//home route
app.get('/',function (req,res) {
   // res.sendFile(__dirname+"/index.html");
    let today = new Date() ;
    let currentDay = today.getDay();
    let day ="";

    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    //let d = new Date(dateString);
    let dayName = days[currentDay];
    if (currentDay= 6 || currentDay== 0) {
        day = "Weekend";
    }else {
        day = "Weekday";
    }
    //locale date
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
   // let today  = new Date();

    console.log(today.toLocaleDateString("en-US")); // 9/17/2016
    console.log(today.toLocaleDateString("en-US", options)); // Saturday, September 17, 2016
    dayName=today.toLocaleDateString("hi-IN", options);

    //view to render
    res.render('list', {kindOfDay: dayName,newItem: nextItems});
});

app.post("/",function (req,res){
   let nextItem = req.body.newitem;
    console.log(nextItem);
    nextItems.push(nextItem);
    res.redirect("/");

});

//listen to this port
app.listen(3000,function(){
console.log("Server started at port 3000");
});
