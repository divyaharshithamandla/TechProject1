// import logo from './logo.svg';
// import './App.css';


import Test from'./NewEx.js';
import Divya from "./divya";
import Div3 from './Exnew.js';
import Login from './Login_page.js';
import UseImages from './Registration.js';
import RoadMatter from './RoadMat.js';
import HospitalMatter from './HospitalMat.js';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { Input } from './collections/input.js';
import { Registrationdb } from './collections/Registrationdb.js';
import {Frgt} from './collections/frgt.js';
import { Retreival } from './collections/textretreival.js';
import { AdminInsert } from './collections/adminRep.js';
import { Problem } from './collections/dispalyProblem.js';
import { Home } from './collections/homepage.js';
function App() {
  
  return (
    <>
    
    <BrowserRouter>
    <Routes>
    <Route path="/in" element={<Retreival/>}/>
      <Route path="/input" element={<Input/>}/>
      <Route path="/renew" element={<RoadMatter/>}/>
      <Route path="/new" element={<HospitalMatter/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/Registrationdb" element={<Registrationdb/>}/>
      <Route path="/RoadMat" element={<UseImages/>}/>
      <Route path="/forgot" element={<Frgt/>}/>
      <Route path="/admin" element={<AdminInsert/>}/>
      <Route path="/show" element={<Problem/>}/>
    </Routes>
  </BrowserRouter>
    {/*<BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/new" element={<Div3/>}/>
    </Routes>
  </BrowserRouter>*/}

</>
    

  );
}

export default App;