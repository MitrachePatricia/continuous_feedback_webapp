const Sequelize = require('sequelize')
const bodyParser = require('body-parser');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'webdb1.db'
})

let User = sequelize.define('users', {
    _id : {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey:true
    },
    userName : Sequelize.STRING,
    userMail : Sequelize.STRING,
    userPassword : Sequelize.STRING,
    userRole : Sequelize.STRING,
    activitiesIds : {
        type: Sequelize.STRING,
        defaultValue: ""
    // set(val) {
    //    this.setDataValue('activities',val.join(','));
    // },
    },
   
},{
    timestamps : false
})

module.exports = User