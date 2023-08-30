import React, { useState } from 'react';
import './searchbar.css'; 
import axios from 'axios';
const SearchBar2 = () => {
  const [searchTerm2, setSearchTerm2] = useState('');
  const [name,setName]=useState("");
  // const res1=await axios.get("https://server-vqm4.onrender.com/")

  const handleSearchChange = (event) => {
    setSearchTerm2(event.target.value);
    // const res1=await axios.post("https://server-vqm4.onrender.com/"+name+"/"+mail)
  };
  
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    
  };
const Sub=async()=>{
  const k="charishma"
  //setName("charishma")
  console.log(name)
  try{
  const res1=await axios.get("http://localhost:8000/show/"+k)
  {if(res1.data)
    {
      console.log("connect");
    }
    else{
      alert("alert")
    }
  }
  
}
catch(e){
  console.log(e)
}
}
  return (
    <>
    
    <div className='body1'>
      
    <div className='box1' >
   
    <input
        type="text"
        placeholder="Search for your details"
        value={searchTerm2}
        onChange={handleSearchChange}
      
      />
      
        {/* <a href="#"> 
        </a> */}
        <button onClick={Sub}>search</button>
         
    </div>
    </div>
    </>
  );
};

export default SearchBar2;