import cors from 'cors';
import express from 'express';
import { connectToDB, db } from './db.js';
const app=express();
app.use(express.json());
app.use(cors());
//check server//
app.get('/',(req,res)=>{
    res.send("server is running")
})
app.post('/input/:email/:password/:age',async(req,res)=>
{
    const details=await db.collection('Divya').insertOne({Gmail:req.params.email,Password:req.params.password,Age:req.params.age})
    res.json(details);
})

app.get('/output/:email/:password',async(req,res)=>
{
    const details=await db.collection("Divya").findOne({Gmail:req.params.email})
    res.json(details);
})

app.post('/update/:email/:newpassword',async (req,res)=>{
  
    const details = await db.collection('Divya').findOneAndUpdate({Gmail:req.params.email},{$set:{Password:req.params.newpassword}})
    res.json(details);
})
app.get('/all',async(req,res)=>
{
    const result=await db.collection("Divya").find().toArray();
    res.json(result);
})
app.get('/output/:email',async(req,res)=>
{
    const details=await db.collection("Divya").findOne({Gmail:req.params.email})
    res.json(details);
})


connectToDB(()=>{
    app.listen(8000,()=>{
        console.log("Server Running At port 8000");
    })
})