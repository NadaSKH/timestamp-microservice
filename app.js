var express = require('express');
var bodyParser = require("body-parser");
var cors = require("cors");


const app = module.exports = express();
app.use(cors());
app.use(bodyParser.json());



app.get('/date/:dateVal',function(req,res,next){
    console.log("IT works");
    var dateVal = req.params.dateVal;

    var dataFormattingOption = {
        year:"numeric",
        month:"long",
        day:"numeric"
    };

    // if(isNaN(dateVal))
    // {
    //     var naturalDate  = new Date(dateVal);
    //     naturalDate = naturalDate.toLocaleDateString("en-eg",dataFormattingOption);
    //     var unixDate = new Date(dateVal).getTime()/1000;
    // }
    if(isNaN(dateVal)){
        var naturalDate = new Date(dateVal);
        console.log("DATE VALUE ",dateVal)
        console.log("NATURAL DATE ",naturalDate)
        if (naturalDate == "Invalid Date"){
          naturalDate = null;
          unixDate = null; 
        } else{
        naturalDate = naturalDate.toLocaleDateString('en-eg', dataFormattingOption);
        var unixDate = new Date(dateVal).getTime()/1000;
        }
      }
      else{
        var unixDate = dateVal;
        var naturalDate = new Date(dateVal *1000);
        naturalDate = naturalDate.toLocaleDateString('en-eg', dataFormattingOption);
      }
    res.json({unix:unixDate, natural:naturalDate})
})

app.listen(3000,()=>{
    console.log("IM LISTENING");
})