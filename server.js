var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();
var path = require("path");
var data= require('./test2_moduleB');
function onHttpStart(){
    console.log("Express http server listening on: " + HTTP_PORT);
}

app.get("/", (req, res) => {
    let resText = "<h2>Declaration(text size in heading 2)</h2> <br>";
    resText += "<a> The rest text is displayed in paragraph as shown in screenshot. </a><br><br>";
    resText += "<a> I acknowledge the College's Academic intgrity Policy - and my own integrity - remain in effect whether my work is <br> done remotely or onsite Any test or assignment is an act of trust between me and my instructor, and especially with <br> my classmates... even when no one is wathcing. I declare I will not break that trust.</a> <br><br>";
    resText += "<a> Name:</a><b><mark> Ali Asadullah</b></mark><br> <br>";
    resText += "<a> Student Number:</a><mark><b>174606210</b></mark><br> <br>";
    resText += "<a href = './CPA'> Click to visit CPA Students </a><br> <br>";
    resText += "<a href = './highGPA'> Click to see who has the highest GPA </a><br> <br>";

    res.send(resText);
}
,
app.get("/CPA",function (req,res) {
    data.getCPA()
    .then((data) => res.json(data))
    .catch((err)=> res.json({"message": err}))
    }  
,
app.get("/highGPA",function (req,res) {
    data.highGPA()
    .then((data) => res.json(data))
    .catch((err)=> res.json({"message": err}))
    }  


)));
app.use((req, res) => {
    res.status(404).send("error 404 page not found!");
  });

  data.initialize()
.then((data)=>{
  app.listen(HTTP_PORT, onHttpStart);
})
.catch(()=>{
  console.log("error")
})
  