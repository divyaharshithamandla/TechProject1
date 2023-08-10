import React from "react";
import {useNavigate} from 'react-router-dom';
function Login(){
    const nav=useNavigate();
    const Divya=()=>{
        nav('/new');
    }

    return(
        <body style={{backgroundColor:"lavender",width:"100%",height:"100vh"}}>
        <div align="center">
             name:
            <input type="text"></input><br/>
            password:<input type="password"></input><br/>
            <button onClick={Divya}>Submit</button>
        </div>
        </body>
    );
}
export default Login;