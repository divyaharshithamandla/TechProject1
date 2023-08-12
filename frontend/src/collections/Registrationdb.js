import React, { useEffect, useState } from "react";
import axios from 'axios';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
export const Registrationdb=()=>
{ 
    const nav=useNavigate();
    const [dis,setdis]=useState([]);
    const [name,setname]=useState([]);
    const [email,setgmail]=useState([]);
    const [mail,setmail]=useState([]);
    const [age,setage]=useState([]);
    const [auto,setauto]=useState([]);
    const [password,setpassword]=useState([]);

    
    const Submit=async()=>
    {
        var input1Value = document.getElementById('psd1').value;
        var input2Value = document.getElementById('psd2').value;
        if (input1Value === input2Value) {


        try
        {
            
            const res=await axios.post("http://localhost:8000/input/"+email+"/"+password+"/"+age)
            {
                if(res.data)
                {
                    nav('/RoadMat');
                }
                else
                {
                    alert("try again");
                }
            }
        }
        catch(e)
        {
            console.log(e)
        }
    }
    else {
        alert("invalid")
    }
   
    }
    useEffect(()=>{
        axios.get("http://localhost:8000/all")
        .then((result)=>
            {
                setauto(result.data);
            })
    })
    
    
    return (
        <>
        <form action="/submit" method="post"/>
        <center>
        <label/>Password<input type="password" id="psd1" onChange={(e)=>setpassword(e.target.value)}></input><br/>
        <label/>reenter password<input type="password" id="psd2"></input>
        
        <label>Gmail<input type="gmail" onChange={(e)=>setgmail(e.target.value)}/></label>
        <br/>
        <label/>Age<input type="number" onChange={(e)=>setage(e.target.value)}></input><br/>
        
        <button onClick={Submit}>Submit</button><br/></center>
       
        
        </>
    )
}