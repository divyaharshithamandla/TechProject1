import React, { useEffect, useState } from "react";
import axios from 'axios';
import { BrowserRouter,Route,Routes,Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
//import './LoginApp.css';
import './../App.css';
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
                    nav('/show');
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
    const Nav=()=>{
        nav('/');
    }
    
    return (
        <><body/>
        <div class-Name="Image" align="center">
            <button onClick={Nav} id="Align">home</button>
       <table border="2" class="center">
        <center>
        <tr><td><label/>Gmail</td><td><input type="gmail" onChange={(e)=>setgmail(e.target.value)}/></td></tr>
        <br/>
        <tr><td><label/>Password</td><td><input type="password" id="psd1" onChange={(e)=>setpassword(e.target.value)}></input></td></tr><br/>
        <tr><td><label/>reenter password</td><td><input type="password" id="psd2"></input></td></tr><br/>
        <td><button onClick={Submit}>Submit</button><br/></td>
        already have an account:
        <Link to="/input">login</Link>
        </center>
       </table>
       </div>
        </>
    )
}