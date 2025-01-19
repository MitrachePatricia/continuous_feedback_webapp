const express=require("express");
const router=express.Router();

const {createUser, loginUser}=require("../controller/userController");

router.route("/user").post(createUser)
router.route("/userLogin").post(loginUser)
module.exports=router;



