const express=require("express");
const app=express();
const Sequelize = require('sequelize')
const bodyParser = require('body-parser');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'webdb1.db'
})

// let user = sequelize.define('user', {
//     _id : {
//         type: DataTypes.UUID,
//         defaultValue: DataTypes.UUIDV4
//     },
//     userName : Sequelize.STRING,
//     userMail : Sequelize.STRING,
//     userPassword : Sequelize.STRING,
//     userRole : Sequelize.STRING,
//     activities : Sequelize.ARRAY,
   
// },{
//     timestamps : false
// })

// let activity = sequelize.define('activity', {
//     _id : {
//         type: Sequelize.UUID,
//         defaultValue: Sequelize.UUIDV4
//     },
//     activityname : Sequelize.STRING,
//     activityDescription : Sequelize.STRING,
//     startTime : Sequelize.STRING,
//     endTime : Sequelize.STRING,
//     activityCode : Sequelize.STRING,
//     createdBy : Sequelize.STRING,
   
   
// },{
//     timestamps : false
// })
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const userRoute=require("./routes/userRoutes");
const activityRoute=require("./routes/activityRoutes");
const db=require("./connect");
const userTable = require("./tables/users")
const activityTable = require("./tables/activity")


const cors=require("cors");
app.use(cors())
app.use(express.json())
app.use("/api", userRoute);
app.use("/api", activityRoute);


  const start = async ()=>{
    try {
        await db()
        await userTable()
        await activityTable()
        app.listen("3000", console.log('Server is working...'))
    } catch (error) {
        console.log(error)
    }
}
start();
