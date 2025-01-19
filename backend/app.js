const express=require("express");
const app=express();
const userRoute=require("./routes/userRoutes");
const db=require("./connect");

const cors=require("cors");
app.use(cors())
app.use(express.json())
app.use("/api", userRoute);


  const start = async ()=>{
    try {
        await db()
        app.listen("3000", console.log('Server is working...'))
    } catch (error) {
        console.log(error)
    }
}
start();
