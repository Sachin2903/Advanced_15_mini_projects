import Image from "./components/Atoms/image/image";
import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
function App() {
  const [imagesrc, setimagesrc] = useState("");

  async function ingfun() {
    const responce = await axios.get("https://dog.ceo/api/breeds/image/random");
    setimagesrc(responce.data.message);
  }

  useEffect(() => {
    ingfun();
  }, []);

  return <Image imgdata="Loading..." imagesrc={imagesrc} imgclassnam="img" />;
}

export default App;
