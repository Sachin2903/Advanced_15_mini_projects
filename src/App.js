import { Button } from './components/Atoms/buttons/buttons';
import { Input } from './components/Atoms/input/input';
import './App.css';
import { useRef } from 'react';
function App() {
  const inputRef=useRef();

  function funchange(){
    inputRef.current.type="file";
    inputRef.current.click();
  }
  return (
    <div className="betweendiv">
      <h1>Pick the file By Sachin Chaturvedi</h1>
       <span>
       <Input reftype={inputRef} stylee="inputstylee" hints="press to change th type ==> "/>
       <Button name="Pick the file" classnam="buttonstylee" clickfun={funchange}/>    
       </span>
    </div>
  );
}

export default App;
