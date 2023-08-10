import React, { useEffect, useState } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
export const frgt=()=>{
    const nav=useNavigate();
    const [name,setname]=useState([]);
    const [email,setgmail]=useState([]);
    const Submit=async()=>{
        const res=await axios.get("http://localhost:8000/output/"+name+"/"+email)
        {
          if(res.data)
          {
              
          }
          else{
            alert("can't find");
          }
        }
    }
    return(
        <>
        <input type="text" onChange={(e)=>setname(e.target.value)}></input>
        <label>Gmail<input type="gmail" onChange={(e)=>setgmail(e.target.value)}/></label>
        
        <button onClick={Submit}>Submit</button><br/>
        </>
    )
}