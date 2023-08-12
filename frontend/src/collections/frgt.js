import React, { useEffect, useState } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
export const Frgt=()=>{
    const nav=useNavigate();
    const [name,setname]=useState([]);
    const [email,setgmail]=useState([]);
    const [password,setpassword]=useState([]);
    const Submit=async()=>{
        const res=await axios.post("http://localhost:8000/update/"+email+"/"+password)
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
    return(
        <>
       <label>password</label> <input type="password" onChange={(e)=>setpassword(e.target.value)}></input><br/>
        <label>Gmail</label>
        <input type="gmail" onChange={(e)=>setgmail(e.target.value)}/><br/>
        <button onClick={Submit}>Submit</button><br/>
        </>
    )
}