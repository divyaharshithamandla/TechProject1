import React from 'react';
import {useNavigate} from 'react-router-dom';
function UseImages(){
    const nav=useNavigate();
    const Road=()=>{
    nav('/renew');
}
const Hospital=()=>{
    nav('/new');
}
    return(
        <div>
            
        <button style={{padding: "15px",margin: "70px"}} onClick={Road}><img src="road.jpg" alt="road" width="150px" style={{margin: "50px"}} /></button>
        <button  style={{padding: "10px",margin:"70px"}} onClick={Hospital}><img src="school.jpg" alt="school" style={{margin: "50px"}}/></button>
        </div>
    );
}

export default UseImages;