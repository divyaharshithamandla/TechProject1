import React, { useEffect, useState } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
export const Frgt=()=>{
    const nav=useNavigate();
    const [name,setname]=useState([]);
    const [email,setgmail]=useState([]);
    const Submit=async()=>{
        const res=await axios.get("http://localhost:8000/input/"+name+"/"+email)
        {
          if(res.data)
          {
              nav('/Registrationdb');
          }
          else{
            alert("can't find");
          }
        }
    }
    return(
        <>
       <label>Name</label> <input type="text" onChange={(e)=>setname(e.target.value)}></input><br/>
        <label>Gmail</label>
        <input type="gmail" onChange={(e)=>setgmail(e.target.value)}/><br/>
        <button onClick={Submit}>Submit</button><br/>
        </>
    )
}