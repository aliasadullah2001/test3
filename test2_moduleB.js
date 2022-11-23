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
            return new Promise((resolve, reject)=>{
                let high = 0;
                let highStudent;
                
                for (let i=0; i<students.length; i++)
                {
                    //console.log(students[i].gpa, high);
                    if (students[i].gpa > high)
                    {
                        high = students[i].gpa;
                        highStudent = students[i];
                    }
                }
                (highStudent) ? resolve(highStudent): reject("Failed finding student with highest GPA");
            }); 

        };

       