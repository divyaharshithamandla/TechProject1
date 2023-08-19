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
app.post('/input/:email/:password',async(req,res)=>
{
    const details=await db.collection('Divya').insertOne({Gmail:req.params.email,Password:req.params.password})
    res.json(details);
})
app.post('/insert/:name/:text',async(req,res)=>
{
    const details=await db.collection('Admin').insertOne({Name:req.params.name,Text:req.params.text})
    res.json(details);
})
app.get('/show/:name',async(req,res)=>
{
    const details=await db.collection("Admin").findOne({Name:req.params.name})
    res.json(details);
})
app.get('/admin/:name',async(req,res)=>
{
    const details=await db.collection("Admin").findOne({Gmail:req.params.name})
    res.json(details);
})

app.post('/updateAdmin/:name/:text',async (req,res)=>{
  
    const details = await db.collection('Admin').findOneAndUpdate({Name:req.params.name},{$set:{Text:req.params.text}})
    res.json(details);
})
app.get('/output/:email/:password',async(req,res)=>
{
    const details=await db.collection("Divya").findOne({Gmail:req.params.email,Password:req.params.password})
    res.json(details);
})
app.get('/output/:email',async(req,res)=>
{
    const details=await db.collection("Divya").findOne({Gmail:req.params.email,Password:req.params.password})
    res.json(details);
})

app.post('/update/:email/:newpassword',async (req,res)=>{
  
    const details = await db.collection('Divya').findOneAndUpdate({Gmail:req.params.email},{$set:{Password:req.params.newpassword}})
    res.json(details);
})
app.post('/updateText/:email/:text',async (req,res)=>{
  
    const details = await db.collection('Divya').findOneAndUpdate({Gmail:req.params.email},{$set:{Text:req.params.text}})
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