const express=require("express");
const app=express();

const userModel =require("./model/user.js")
require("dotenv").config();

app.use(express.json());
app.get("/",(req,res)=>{
    res.send("hello tajpur");

});

app.get("/create",async(req,res)=>{
    const user= await userModel.create(req.body);
    res.send(user);

})

app.listen(3000,()=>{
    console.log("ankit server");
})

//https://verscel-first.vercel.app/