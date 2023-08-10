import React from 'react';
import {useNavigate} from 'react-router-dom';
function RoadMatter(){
    const nav=useNavigate();
    const Home=()=>{
        nav('/');
    }
    return(
        <div>
        <p>Roads are under gone through many destructions.The water being stagnant on the roads would have caused severe diseaes to surrounded people in the rainy season.</p><br/>
      <button onClick={Home}>submit</button>
      </div>
    );
}
export default RoadMatter;