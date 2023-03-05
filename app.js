// require('dotenv').config()
const express = require("express");
const { fileLoader } = require('ejs');
const app = express();
app.use(express.static('public'))
// const passport = require('passport')

// images used
const marquee = "https://i.ibb.co/YNT2Q9Y/marquee-company.jpg"
const super_dream = "https://i.ibb.co/hdCbBc0/76.jpg"
const dream = "https://i.ibb.co/QkBr66c/51584.jpg"
const Day = "https://i.ibb.co/2cr5c6W/Illustration05.jpg"

// require('./passport')
app.set('view engine','ejs');

const types=["Marquee Company","Super Dream Company","Dream Company","Day Sharing"]
const MC = ["Motorq","Paypal","Adobe","Morgan Stanley","ADDIDAS"]
const SDC = ["Barclay's","Bajaj Finso","Optum","Fredility","Signify"]
const DC = ["Siemens","UIGDS","Bank Of America","Tata","Dell"]
const DS = ["Accenture","Infosys","TCS","Wipro","Campgermini"]

const images = [marquee,super_dream,dream,Day]


app.get("/",function(req,res){
    res.render("home.ejs",{types:types,images:images})
});

app.get("/companies/:types",function(req,res){
     title = req.params.types;
     if(title==types[0]){
        list=MC
     }
     if(title==types[1]){
        list=SDC
     }
     if(title==types[2]){
        list=DC
     }
     if(title==types[3]){
        list=DS
     }
     res.render('companyPage.ejs',{title:title,companies:list})
});



app.listen(3000,function(){
   console.log("server chalu h")
})