const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
  console.log(`you are using port ${PORT}`)
})
// if i didn't enter date I handle this

app.get("/api",(req,res)=>{
  const date = new Date()
  const unix = date.getTime()
  const utc = date.toUTCString()
  res.json({unix:unix,utc:utc})
})

app.get("/api/:date",(req,res)=>{
const date_string = req.params.date
let date;
let unix;
let uTc;
//case 1 if date is not exist
if(!date_string){
  date = new Date(date_string)
}
//case 2 if data is unix in millisecond
 else  if(/^\d+$/.test(date_string)){
date = new Date(parseInt(date_string))
  }
//case 3 otherwise correct date
else{
  date = new Date(date_string)
const inputDate = date_string.split("-").map(Number)
const fullyear = date.getFullYear()
const monthYear = date.getMonth() + 1
// validation this date we created
if(inputDate[0] !==fullyear || inputDate[1]!==monthYear){
  res.json({error:"invalid date"})
  return
}
}
if(!isNaN(date)){
  unix = date.getTime()
  uTc = date.toUTCString()
  res.json({unix:unix,utc:uTc})
}else{
  res.json({error:"invalid date"})
}
})