import React, { useEffect, useState } from "react";
import axios from 'axios';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
//import './../App.css';
import './LoginApp.css';
export const Retreival=()=>{
    const nav=useNavigate();
    const [dis,setdis]=useState([]);
    const [email,setgmail]=useState([]);
    const [auto,setauto]=useState([]);
    const [text,setText]=useState([]);
    const Submit=async()=>{
        try{
        const res=await axios.post('http://localhost:8000/updatetext/'+email+"/"+text)
        {
          if(res.data)
          {
              alert('/')
          }
          else{
            alert("can't find");
          }
        }
    }
    catch(e){
        console.log(e)
    }
    }


useEffect(()=>{
    axios.get("http://localhost:8000/all")
    .then((result)=>
        {
            setauto(result.data);
        })
})

    return(
        <div align="center">
        <table border="1" class="center">
            <input name="email" type="gmail" placeholder="gmail" onChange={(e)=>setgmail(e.target.value)}></input><br/>
            <textarea rows="4" cols="50" id="text" name="text" placeholder="problem"n onChange={(e)=>setText(e.target.value)}></textarea><br/>
            <button onClick={Submit}>Retreive</button>
            </table>
       </div>
    )
}