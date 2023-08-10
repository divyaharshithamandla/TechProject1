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
app.post('/input/:name/:email/:age',async(req,res)=>
{
    const details=await db.collection('Divya').insertOne({Name:req.params.name,Gmail:req.params.email,Age:req.params.age})
    res.json(details);
})

app.get('/output/:name/:email',async(req,res)=>
{
    const details=await db.collection("Divya").findOne({Name:req.params.name})
    res.json(details);
})
app.get('/input/:name/:email',async(req,res)=>
{
    const details=await db.collection("Divya").updateOne({Gmail:req.params.email,$Set:{Name:req.params.name,CName:req.params.cname}})
    res.json(details);
})
app.get('/all',async(req,res)=>
{
    const result=await db.collection("Divya").find().toArray();
    res.json(result);
})


connectToDB(()=>{
    app.listen(8000,()=>{
        console.log("Server Running At port 8000");
    })
})