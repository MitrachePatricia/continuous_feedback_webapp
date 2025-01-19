const Activity=require("../models/activity");

const createActivity=async(req, res)=>{
    try{
        const body=req.body;
        const activity=await Activity.create(body);
        console.log(body.activityDescription);
        res.status(201).json(activity); 
    }
    catch{
        res.status(400).json(err);

    }
}

const accessActivity=async(req, res)=>{
    try{
        const body=req.body;
        const activity=await Activity.findOne({activityCode:body.activityCode});
        if(activity){
            res.status(200).json({msg:"Activity found"});
        }
        else{
            res.status(400).json({msg:"Activity not found"});
        }
    }
    catch(err){
        res.status(400).json(err);

    }
}

module.exports={createActivity, accessActivity}
