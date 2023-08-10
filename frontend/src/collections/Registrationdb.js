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

    
    const Submit=async()=>
    {
        try
        {
            const res=await axios.post("http://localhost:8000/input/"+name+"/"+email+"/"+age)
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
    useEffect(()=>{
        axios.get("http://localhost:8000/all")
        .then((result)=>
            {
                setauto(result.data);
            })
    })
    return (
        <><center>
        <label/>Name<input type="text" onChange={(e)=>setname(e.target.value)}></input><br/>
        <label>Gmail<input type="gmail" onChange={(e)=>setgmail(e.target.value)}/></label>
        <br/>
        <label/>Age<input type="text" onChange={(e)=>setage(e.target.value)}></input><br/>
        
        <button onClick={Submit}>Submit</button><br/></center>
        <div>
            {
                auto.map((keer)=>
                (
                    <>
                    
                    {auto.Name}
                    {auto.Gmail}
                    {auto.Age}

                    
                     </>
                ))
            }
        </div>
        
        </>
    )
}