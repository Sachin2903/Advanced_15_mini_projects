import "./App.css";
import axios from "axios";
import { useRef } from "react";
import Input from "./component/atoms/input/input";
import { Button } from "./component/atoms/button/button";

function App() {
  const input = useRef("");

  async function sendOtp(finalNumber) {
    try {
      const resp = await axios.post(
        "https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP",
        {
          mobile: finalNumber,
        }
      );

      
        alert("Success, Soon You Will Receive a OTP on Your Mobile-Number");

      input.current.value = "";
    } catch {
      alert("Wait For 4min To Generate New OTP");
    }
  }

  function checkNumber() {
    let number = input.current.value;

    number.charAt(0) >= 6 && number.charAt(0) <= 9 && number.length === 10
      ? sendOtp(Number(number))
      : alert("Enter a Valid Indian Number");
  }

  return (
    <div className="App">
      <div className="btwdiv">
        <h1>OTP Generator</h1>
        <span>
          <Input
            refstate={input}
            placedata="Enter your Mobile Number"
            intype="number"
            inclassnam="otpin"
          />

          <Button
            checkNumber={checkNumber}
            btndata="Get OTP"
            btnclassname="otpbtn"
          />
        </span>
      </div>
    </div>
  );
}

export default App;
