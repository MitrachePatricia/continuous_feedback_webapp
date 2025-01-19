
const uri = "mongodb+srv://mireamaria22:OSRsQDzvzg1jszXj@cluster0.jhnqi.mongodb.net/webProject?retryWrites=true&w=majority"
//const uri = "mongodb+srv://mireamaria22:OSRsQDzvzg1jszXj@cluster0.jhnqi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const mongoose = require('mongoose')


const connectDB = () =>{
    return mongoose
    .connect(uri)
    .then(()=>{
        console.log("Connected to mongo")
    })
    .catch((err)=>{
        console.log(err)
    })
}
    module.exports = connectDB