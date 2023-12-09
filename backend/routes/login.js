const express=require('express');
const User=require('../models/user');
const { createTokenForUser } = require('../service/authentication');
const bcrypt=require('bcrypt');
const router=express.Router();

router.post('/',async (req,res)=>{
    try {
        const {email,password}=req.body;
        const user=await User.findOne({email});
        if(!user)res.send("invalid email");

        const result=await bcrypt.compare(password,user.password);
        if(!result)res.send("invalid password");
        const token=createTokenForUser(user);
        user.token=token;
        user.password=null;
         res.status(200).cookie('token',token).json(user);
    } catch(error){
        console.log("login ke post me error ha"+error)
    }
})

module.exports=router;