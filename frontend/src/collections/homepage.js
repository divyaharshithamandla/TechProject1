import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import { Input } from './input.js';
import { Registrationdb } from './Registrationdb.js';
//import './../App.css';
import './LoginApp.css';

export const Home=()=>{
    const nav=useNavigate();
const input=()=>{
    nav('/input');
}
const reg=()=>{
    nav('/Registrationdb')
}

    return(
        <div align="center">
            <center><button onClick={input} laign="center">Login</button></center><br/><br/>
            <button onClick={reg}>Sign up</button>
        </div>
       
    )
}