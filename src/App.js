import { Button } from './components/Atoms/buttons/buttons';
import Image from "./components/Atoms/image/image";
import logo1 from "./././img1.jpeg"
import logo2 from "./././img2.jpg"
import logo3 from "./././img3.jpg"
import logo4 from "./././img4.jpg"

import './App.css';
import { useEffect, useRef } from 'react';
function App() {
  const arr = [logo1, logo2, logo3, logo4];
  const imgRef = useRef(null);
  const countIndex = useRef(0);

  useEffect(() => {
    imgRef.current.src = arr[countIndex.current];
  }, [])

  function funchange() {
    countIndex.current = countIndex.current + 1;
    if (countIndex.current === arr.length) {
      countIndex.current = 0;
    }
    imgRef.current.src = arr[countIndex.current];
  }

  return (
    <div className="betweendiv">
      
      <Image  imgdata="changeimg" imageref={imgRef}  imgclassnam="img"/>

      <Button name="Change Picture" classnam="buttonstylee" clickfun={funchange} />

    </div>
  );
}

export default App;
