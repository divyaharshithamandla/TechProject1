import React, { useEffect, useState } from "react";
import axios from 'axios';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
//import './../App.css';
import './LoginApp.css';
export const Problem=()=>{
    const nav=useNavigate();
    const [dis,setdis]=useState([]);
    const [name,setName]=useState([]);
    const [auto,setauto]=useState([]);
    const [text,setText]=useState([]);

    const Submit=async()=>{
        try{
            const res=await axios.get('http://localhost:8000/show/'+name)
            {
            if(res.data)
            {

               // alert(res.data.Text)
                //document.write(res.data.Text);
                setText(res.data.Text);
                text.setText(res.data.Text)
                
            }
            else{
                alert("can't find");
            }
        }
    }
    catch(e){

    }
}
const Nav=()=>{
    nav('/');
}
    return(
        <div align="center"> <button onClick={Nav} id="Align">logout</button>
       <table border="1" class="center"><center>
            <input name="name" type="text" placeholder="enter name" onChange={(e)=>setName(e.target.value)}></input><br/>
            <textarea rows="4" cols="50" id="text" name="text" placeholder="problem"n onChange={(e)=>setText(e.target.value)}></textarea><br/>
            <button onClick={Submit}>Retreive</button><br/></center>
            </table>{text}
       </div>
    )
}