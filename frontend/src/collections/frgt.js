import React, { useEffect, useState } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import './LoginApp.css';
export const Frgt=()=>{
    const nav=useNavigate();
    const [name,setname]=useState([]);
    const [email,setgmail]=useState([]);
    const [password,setpassword]=useState([]);
    const Submit=async()=>{
        const res=await axios.post("https://app-services.onrender.com/update/"+email+"/"+password)
        {
          if(res.data)
          {
              nav('/');
          }
          else{
            alert("can't find");
          }
        }
    }
    const Nav=()=>{
      nav('/');
  }
    return(
        <> <div align="center">
           <button onClick={Nav} id="Align">home</button>
        <table border="1" class="center"><center>
       
        <tr><td><label/>Gmail</td><td><input type="gmail" onChange={(e)=>setgmail(e.target.value)}/></td></tr>
        <br/>
        <tr><td><label/>Password</td><td><input type="password" id="psd1" onChange={(e)=>setpassword(e.target.value)}></input></td></tr><br/>
        
        <button onClick={Submit}>Submit</button><br/>
        
        </center>
        </table></div>
        </>
    )
}