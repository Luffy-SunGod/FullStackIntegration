const express=require('express');
const app=express();
const PORT=4000;
const mongoose=require('mongoose');
const cors=require('cors');

app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/fullstack')
app.use(express.urlencoded({ extended: false }));
app.use(express.json())




app.use('/api/signup',require('./routes/signup.js'));
app.use('/api/login',require('./routes/login.js'));


app.listen(PORT,()=>{
    console.log(`servet started at PORT:${PORT}`)
});