const mongoose=require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.DB).then(()=>{
    console.log("mongodb conneted");

}).catch((err)=>{
    console.log("error while miongoose ankit");
})

const userSchema=mongoose.Schema({
name:String,
email:{
    type:String,
    unique:true
},
password:String,
profilepic:{
    type:String,
    default:"/"
}
});




module.exports=mongoose.model("user",userSchema);
