//const fs = require("fs");
import fs from"fs";
import express from "express";
const app = express()
const PORT = 5000;

app.get('/', function (req, res) {
  res.send('<br> to create use /createfile <br>'+"to read use /readfile")
})

app.get("/createfile",  (req, res) => {
  const{time,file} = TimeStamp();
  
fs.writeFile(`./Backup/${file}.txt`,time,(err) => {
if (err)  console.log(err);
  else console.log("file created successfully");
})
res.send("file created successfully");
})


app.get("/readfile", (req, res) => {  
fs.readdir("./Backup/",(err,files) => {
if (files.length == 0){
  res.send("no files in directory");
}
  else {
    let filelist = "files in directory <br>";
    files.forEach((file)=>{
filelist += file + "<br>";
    })
    res.send(filelist);
  }
})
})

app.listen(PORT,()=>{
    console.log(`App is listening on port ${PORT}`)
})

function TimeStamp(){
  var d = Date.now();
var date = new Date(d);
var day = date.getDate();
var month = date.getMonth();
var year = date.getFullYear();
var hrs = date.getHours();
var mins = date.getMinutes();
var secs = date.getSeconds();
var time= hrs+":"+mins+":"+secs;
var file = day+"_"+month+"_"+year+"_"+hrs+"_"+mins+"_"+secs;
    

 return {time,file};
 }

//  console.log(TimeStamp());