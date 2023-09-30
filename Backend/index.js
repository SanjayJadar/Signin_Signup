const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

                                                                    // Middlewares
const server = express();
server.use(express.json()); 
server.use(cors()); 

                                                                // Connection to database
mongoose.connect('mongodb://127.0.0.1:27017/sign')
.then(()=>console.log('DataBase Connected'))
.catch((err)=>console.log(err))

                                                                    // Schema 
const schema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
const UserSchema = mongoose.model('users', schema);

                                                                // Check and Post the user to database
server.post('/signup', async(req, res) => {
    const {username, password} = req.body;

    const data = {
        username:username,
        password:password
    }
    try{
        const check = await UserSchema.findOne({username:username});
        if(check){
            res.json("exist");
        }
        else{
            res.json("notexist")
            await UserSchema.insertMany([data]);
        }
    }catch(e){
        res.json("fail")
    }
})

                                                                            // Verify and Login user 
server.post('/login', async(req, res)=>{
    const {username, password} = req.body;
    try{
        const check = await UserSchema.findOne({username:username});
        if(check){
            res.json("exist");
        }
        else{
            res.json("notexist")
        }
    }catch(e){
        res.json("notexist")
    }
})

                                                                    //Server Connection
server.listen(2000, ()=>{
    console.log('Server is connected');
})