const mongoose=require("mongoose");

const userschema=new mongoose.Schema({
    userName : {
        type:String, 
        trim: true
    },
    userMail : {
        type:String, 
        trim: true
    },
    userPassword : {
        type:String, 
        trim: true
    },
    userRole : {
        type:String, 
        trim: true
    },
    activities :{
        type:Array
    }
    

})

module.exports=mongoose.model("user", userschema);






