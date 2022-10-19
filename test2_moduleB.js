const fs = require ('fs');
const { arrayBuffer } = require('stream/consumers');
var students = new Array();
var exports = module.exports={};

exports.initialize = ()=>{

    return new Promise((resolve, reject)=>{
    
        fs.readFile('students.json',(err,data)=>{
            if (err){reject("Failure to read file!");
        } else{
            students = JSON.parse(data);      
        }});
     
                resolve();
            });
    
        }
    exports.getCPA = ()=>{
            return new Promise((resolve , reject)=>{
                if (students.length != 0)
                resolve(students);
                reject("no results returned");
            });
        }
    exports.highGPA = ()=>{
            return new Promise((resolve , reject)=>{
                var highest;
               for(var i =0; i<arr.length ; i++)
               if (highest == null || parseInt(arr[i][prop]) > parseInt(highest[prop]))
               highest =arr[i];
               resolve(students);
               
                reject("no results returned");
            });
        }
       




    
    