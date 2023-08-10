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

function App() {
  
  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<UseImages/>}/>
      <Route path="/renew" element={<RoadMatter/>}/>
      <Route path="/new" element={<HospitalMatter/>}/>
      <Route path="/input" element={<Input/>}/>
      <Route path="/Registrationdb" element={<Registrationdb/>}/>
      <Route path="/RoadMat" element={<UseImages/>}/>
      
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