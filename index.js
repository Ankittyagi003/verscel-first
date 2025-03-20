const express=require("express");
const app=express();

const userModel =require("./models/user.js")
require("dotenv").config();

app.get("/",(req,res)=>{
    res.send("hello tajpur");

});



app.listen(3000,()=>{
    console.log("ankit server");
})

//https://verscel-first.vercel.app/