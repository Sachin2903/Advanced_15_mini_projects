
import Image from "./components/Atoms/image/image";
import './App.css';
import React,{ useEffect, useState } from 'react';
function App() {
  
 const [imagesrc,setimagesrc]=useState('');

  
 async function ingfun(){
  const responce=await fetch("https://dog.ceo/api/breeds/image/random");
  const resobj= await responce.json();
  setimagesrc(resobj.message);
}
  
  useEffect(()=>{ingfun()},[])
 

 
  return (
    
      
      
     
 <Image imgdata="Loading..." imagesrc={imagesrc} imgclassnam="img"/>
      

    
  )
}

export default App;
