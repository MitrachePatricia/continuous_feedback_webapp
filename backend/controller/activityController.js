const Activity=require("../models/activityBun");
const User = require("../models/usersBun")
const Sequelize = require('sequelize')
const { Op } = require('sequelize');
const bodyParser = require('body-parser');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'webdb1.db'
})




const createActivity=async(req, res)=>{
    try{
        const body=req.body;
        await sequelize.sync({force : true})
        const activity=await Activity.create(body);
        console.log(body.activityDescription);
        res.status(201).json(activity); 
    }
    catch (err){
        res.status(400).json(err);

    }
}


const endActivity = async(req,res)=>{
    try {
        // const {id:activityId} = req.params
        // const activity = await Activity.updateOne({ _id:activityId },{
        //     $set:{
        //         endTime : new Date()
        //     }
        // })

        // if(activity){
        //     res.status(200).json("EndTime populated")
        // }
        // else res.status(404).json("No activity with this id")

        const {id:activityId} = req.params
        const activity = await Activity.update(
            { endTime:new Date().toString() },
            {
                where: {
                    _id : activityId
                },
            }
        )

        if(activity){
            res.status(200).json("EndTime populated")
        }
        else res.status(404).json("No activity with this id")

    } catch (err) {
        res.status(400).json(err)
    }
}

const accessActivity=async(req, res)=>{
    try{
        const {activityCode:activityCode,userId : userId} = req.params;

        const activity=await Activity.findOne({where: {activityCode:activityCode}});
        console.log("activity")
        if(activity){

            if(!activity.endTime){
                
                const user = await User.findByPk(userId)

                if(user && user.activitiesIds.indexOf(activity._id.toString()) == -1){

                    if(user.activitiesIds == undefined){
                        await User.update(
                            { activitiesIds: activity._id.toString() },
                            { where: { _id: userId } }
                          )
                    }
                    else{
                         await User.update(
                            { activitiesIds: user.activitiesIds+","+activity._id.toString() },
                            { where: { _id: userId } }
                          )
                    }
     
                
                //user.activitiesIds = activity._id.toString();
              
                    res.status(200).json({msg:"Activity found and it's available"});
                }
                else res.status(200).json({msg:"Activity found but it's on your list already!"});
             
            }
            else{
                res.status(200).json({msg:"Activity found but it's not available"})
            }
           // res.status(200).json(activity);
        }
        else{
            res.status(404).json({msg:"Activity not found"});
        }
    }
    catch(err){
        res.status(400).json(err);

    }
}
const getAllactivitiesForSpecificUser = async (req,res)=>{
    try {
        const {id:userId} = req.params;
        // const activities = await Activity.findOne({
        //     createdBy : userId
        // })
        const activities = await Activity.findAll({where: {createdBy:userId}});
        if(activities){
            res.status(200).json(activities)
        }
        else res.status(404).json("Nope")
    } catch (err) {
        res.status(400).json(err)
    }
}
const getAllactivitiesForSpecificStudent = async (req,res)=>{
    try {
        const {id:userId} = req.params;
        const user = await User.findByPk(userId)
        let arrayAct = user.activitiesIds.split(",");
        //console.log(user.activitiesIds.split(","))
        //const activity1=await Activity.findOne({where: {_id:arrayAct}});
       
        const activityList = await Activity.findAll({
            where: {
                _id: {
                  [Op.or]: arrayAct,
                },
              },
          });
          console.log("???")
        if(activityList){
            res.status(200).json(activityList)
        }
        else res.status(404).json("Nope")
    } catch (err) {
        res.status(400).json(err)
    }
}

const addFeedback = async (req,res) =>{
    try {
        
        const body = req.body;

        const activity=await Activity.findByPk(body.activityId);

        if(activity){
            await Activity.update(
                { feedback: activity.feedback == "" ? body.feedbackMsg : activity.feedback+";"+body.feedbackMsg },
                { where: { _id: body.activityId } }
              )
              res.status(200).json({"msg":"Feedback Added"})
        }
        else res.status(404).json({"msg":"No activity with this id"})
        

    } catch (err) {
        res.status(400).json(err)
        
    }
}



module.exports={createActivity, accessActivity, endActivity,getAllactivitiesForSpecificUser,getAllactivitiesForSpecificStudent,addFeedback}
