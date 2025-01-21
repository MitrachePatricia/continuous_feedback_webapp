
const Sequelize = require('sequelize')
const bodyParser = require('body-parser');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'webdb1.db'
})
const User=require("../models/usersBun");
const createUser=async (req, res)=>{
    try{
        const body=req.body;
        await sequelize.sync({force : true})
        let userNew = new User(body)
        const user=await userNew.save(body);
        if(user){
            res.status(201).json(user); 
        }
    }
    catch(err){
        res.status(400).json(err);
    }
}

const loginUser=async(req, res)=>{
    try{
        const body=req.body;
        
        const user=await User.findOne({where: {userName:body.userName, userPassword:body.userPassword}});
        // const pass=await User.findOne({where:{userPassword:body.userPassword}});
        // const uname=await User.findOne({where:{userName:body.userName}});
        if(user){
            console.log("??????")
            res.status(200).json(user);
        }
        // else if(!pass && uname || pass && !uname){
        //     res.status(401).json(pass);
        // }
        else{
            res.status(404).json({msg:"User not found"});
            
        }
    }
    catch(err){
        res.status(400).json(err);

    }
}



module.exports={createUser, loginUser}
