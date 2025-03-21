const express=require("express");
const app=express();

const userModel =require("./model/user.js")
require("dotenv").config();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("hello tajpur jiii");

});

 app.get("/create",async(req,res)=>{
     const user= await userModel.create(req.body);
     res.send(user);

 })


 app.get("/get",async(req,res)=>{
    const user= await userModel.find();
    res.send(user);

})
app.listen(3000,()=>{

    console.log("ankit server");
})


////DB="mongodb+srv://tyagiiankit254:gxb7U9V5crQa2KG9@cluster2.cmiii.mongodb.net/"
//7B98CYSFndxQ7Wyn