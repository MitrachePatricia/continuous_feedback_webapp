const mongoose=require("mongoose");

const activityschema=new mongoose.Schema({

    activityname: {
        type:String,
        trim: true
    },

    activityDescription : {
        type:String, 
        trim: true
    },

    startTime:{
        type:Date
    },

    activityCode : {
        type:Number, 
        trim: true
    }

})

module.exports=mongoose.model("activity", activityschema);