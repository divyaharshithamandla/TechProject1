import React, { useEffect, useState } from "react";
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import './LoginApp.css';

export const Input=()=>
{   const nav=useNavigate();
    const [dis,setdis]=useState([]);
    const [name,setname]=useState([]);
    const [email,setgmail]=useState([]);
    const [mail,setmail]=useState([]);
    const [auto,setauto]=useState([]);
    const [password,setpassword]=useState([]);

    const Show=async()=>{
     
        const res=await axios.get("https://app-services.onrender.com/output/"+email+"/"+password)
        {
             if(res.data)
             {
                setgmail(res.data.email);
                setpassword(res.data.password);
                
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
            const res=await axios.get("https://app-services.onrender.com/output/"+email+"/"+password)
            {
                if(res.data)
                {
                    nav('/show');
                }
                else
                {
                    const res=await axios.get("https://app-services.onrender.com/admin/"+email)
                    {
                        if(res.data)
                        {
                            nav('/admin');
                        }
                        else{
                            alert('inappropriate trial')
                        }
                    }

                }
            }
        }
        catch(e)
        {
            console.log(e)
        }
    }
    const Forgot=()=>{
        nav('/forgot');
    }
    const Nav=()=>{
        nav('/');
    }
    // useEffect(()=>{
    //     axios.get("http://localhost:8000/all")
    //     .then((result)=>
    //         {
    //             setauto(result.data);
    //         })
    // })
    return (
        <> <div align="center">
        <button onClick={Nav} id="Align">home</button>
        <table border="1" class="center"><center>
        <tr><td><label/>Gmail</td><td><input type="gmail" onChange={(e)=>setgmail(e.target.value)}/></td></tr><br/>
        <tr><td><label/>Password</td><td><input type="password" id="psd1" onChange={(e)=>setpassword(e.target.value)}></input></td></tr><br/>
        <button onClick={Submit}>Submit</button><br/>
        <button onClick={Forgot}>Forget password</button><br/>
        <button onClick={Show}>Show</button>{dis}<br/>{email}
        </center>don't have an account:
            <Link to = '/Registrationdb'>SIGN UP</Link>

        
        </table></div>
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