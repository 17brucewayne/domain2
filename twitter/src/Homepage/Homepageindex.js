import './Homepageindex.css';
import Navbar2 from './navbar2';
import Left from './leftcomponent';
import Mid from "./midcomponent";
import Right from './rightcomponent';
import { useState } from 'react';


function Homepage() {
  const[op,setOp]=useState("")
  const call=(op)=>{
    setOp(op)
    
  }
  return (
    <>
     <Navbar2 onClick={call}/>
     <Left call={call}/>
     <Mid op={op}/>
     

     
    </>
  );
}

export default Homepage;