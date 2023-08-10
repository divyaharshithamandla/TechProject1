import React from 'react';
import {useNavigate} from 'react-router-dom';
function HospitalMatter(){
    const nav=useNavigate();
    const Home=()=>{
        nav('/');
    }
    return(
        <div>
        <p>Hospitals don't even provide minimum facilities for the people.</p><br/>
      <button onClick={Home}>submit</button>
      </div>
    );
}
export default HospitalMatter;