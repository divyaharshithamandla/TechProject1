import React, { useEffect, useState } from "react";
import axios from 'axios';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
//import './../App.css';
import './LoginApp.css';
export const AdminInsert=()=>{
    const nav=useNavigate();
    const [dis,setdis]=useState([]);
    const [name,setName]=useState([]);
    const [auto,setauto]=useState([]);
    const [text,setText]=useState([]);

    const Submit=async()=>{
        try{
        const res=await axios.post('https://app-services.onrender.com/updateAdmin/'+name+"/"+text)
        {
          if(res.data.Name)
          {

              alert('saved')
              //setdis(res.data.email); 
              //setdis(res.data.password);
              
          }
          else{
            
            const res=await axios.post('https://app-services.onrender.com/insert/'+name+"/"+text)
                {
                   
                    if(res.data)
                    {
                        

                        alert('saved')
                        // setdis(res.data.email);
                        // setdis(res.data.password);
                        
                    }
                    else{
                        alert("inappropriate try")
                    }
                }
          }
        }
    }
    catch(e){
        console.log(e)
    }
    }


useEffect(()=>{
    axios.get("https://app-services.onrender.com/all")
    .then((result)=>
        {
            setauto(result.data);
        })
})
const Nav=()=>{
    nav('/');
}
    return(
        <div align="center"> 
         <button onClick={Nav} id="Align">logout</button>
       <table border="1" class="center">
       <center> <input name="name" type="text" placeholder="gmail" onChange={(e)=>setName(e.target.value)}></input><br/></center>
       <center> <textarea rows="4" cols="50" id="text" name="text" placeholder="problem"n onChange={(e)=>setText(e.target.value)}></textarea><br/></center>
       <center>  <button onClick={Submit}>Submit</button></center>
            </table>
       </div>
    )
}