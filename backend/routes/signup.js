const express=require('express');
const router=express.Router();
const bcrypt=require('bcrypt');
const {createTokenForUser} =require('../service/authentication')
const User=require('../models/user');

router.post("/",async (req,res)=>{
    const {username,email,password}=req.body.credentials;
    // console.log(req.body);
    console.log("post"+JSON.stringify(req.body));
    try {
        const hashedPassword=await bcrypt.hash(password,10);
        const user=await User.create({
            username,email,password:hashedPassword
        }).then().catch((error)=>console.log(error));
        const token=createTokenForUser(user);
        user.password=null;
        user.token=token;
        console.log(token);
        res.json(user);
    } catch (error) {
        console.log("sinup ke post me rerror arha ha "+error);
        res.json({success:false})
    }
})
module.exports=router;
