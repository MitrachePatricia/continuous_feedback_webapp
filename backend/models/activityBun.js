const Sequelize = require('sequelize')
const bodyParser = require('body-parser');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'webdb1.db'
})
const User = require("./usersBun");
function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

let Activity = sequelize.define('activity', {
    _id : {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey:true
    },
    activityname : Sequelize.STRING,
    activityDescription : Sequelize.STRING,
    startTime : Sequelize.STRING,
    endTime : Sequelize.STRING,
    activityCode : {
        type:Sequelize.STRING,
        defaultValue: makeid(10),
    },
    createdBy : {
        type: Sequelize.STRING,
    },
    feedback :{
        type : Sequelize.STRING,
        defaultValue: ""

    }
   
},{
    timestamps : false
})
async function ceva(){
    await sequelize.sync({force : true})

}

module.exports = Activity