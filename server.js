const express=require("express")
const app=express()
app.listen(100)
app.get("/ping",((req,res)=>{
    res.send("pong")
}))
console.log("object")
