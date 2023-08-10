import React, { useEffect, useState } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
export const Input=()=>
{   const nav=useNavigate();
    const [dis,setdis]=useState([]);
    const [name,setname]=useState([]);
    const [email,setgmail]=useState([]);
    const [mail,setmail]=useState([]);
    const [auto,setauto]=useState([]);

    const Show=async()=>{
     
        const res=await axios.get("http://localhost:8000/output/"+name)
        {
             if(res.data)
             {
                setdis(res.data.Name)
                setgmail(res.data.Gmail)
             }
             else{
                alert("not found");
             }
        }
    
    }
   
    const Submit=async()=>
    {
        try
        {
            const res=await axios.get("http://localhost:8000/output/"+name+"/"+email)
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
        <>
        <input type="text" onChange={(e)=>setname(e.target.value)}></input>
        <label>Gmail<input type="gmail" onChange={(e)=>setgmail(e.target.value)}/></label>
        
        <button onClick={Submit}>Submit</button><br/>
        <button onclick={nav('/forgot')}>Forget password</button><br/>
        <button onClick={Show}>Show</button>{dis}<br/>{email}<br/>
        <div>
            {
                auto.map((keer)=>
                (
                    <>
                    
                    {auto.Name}
                    {auto.Gmail}

                    
                     </>
                ))
            }
        </div>
        
        </>
    )
}