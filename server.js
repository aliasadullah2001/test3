

//https://dull-pear-gharial-gear.cyclic.app/
var HTTP_PORT = process.env.PORT || 8080;
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var express = require("express");
var app = express();
var path = require("path");
var data= require('./test2_moduleB');
app.set('view engine', '.hbs');
app.use(express.static('public'));
app.engine('.hbs', exphbs.engine({extname : ".hbs",  
helpers: {

    navLink : function(url, options){ 
    
            return '<li' + ((url == app.locals.activeRoute) ? ' class="active" ' : '') + '><a href="' + url + '">' + options.fn(this) + '</a></li>';},
          
    equal   : function (lvalue, rvalue, options) {

              if (arguments.length < 3)

              throw new Error("Handlebars Helper equal needs 2 parameters");
              
              if (lvalue != rvalue) {
                return options.inverse(this);} 
              
              else {
                
                return options.fn(this);}

    }
}

})) 
app.set('view engine', '.hbs');
app.use(express.static('public'));

function onHttpStart() {
    console.log("Express http server listening on: " + HTTP_PORT);
  }
  app.use(function(req,res,next){ 
    let route = req.baseUrl + req.path;
    app.locals.activeRoute = (route == "/") ? "/" : route.replace(/\/$/, "");
    next();
  
  });

  app.use(bodyParser.urlencoded({extended:true}));
  // setup a 'route' to listen on the default url path

  app.get("/", (req, res) => {
      res.render('home');
  }
  
,

app.get("/highGPA", (req, res)=>{
  data_prep.highGPA().then((data)=>{
      let resText = `<h2> Highest GPA: </h2>
      <p> Student ID: ${data.studId} </p>
      <p> Name:  ${data.name} </p>
      <p> Program: ${data.program} </p>
      <p> GPA: ${data.gpa} </p> `;
      res.send(resText);
  });

}
,
app.get("/CPA",function (req,res) {
  data.getCPA()
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
  

