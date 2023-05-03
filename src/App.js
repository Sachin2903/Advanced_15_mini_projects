import "./App.css";
import { useRef } from "react";
import Input from "./component/atoms/input/input";
import { Button } from "./component/atoms/button/button";

function App() {
  const input = useRef("");

  function sendOtp(finalNumber) {
    fetch("https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        mobile: finalNumber,
      }),
    })
      .then((res) => {
        if (res.status === 200)
          alert("Success, Soon You Will Receive a OTP on Your Mobile-Number");
        else {
          alert("Wait For 4min To Generate New OTP");
        }
        input.current.value = "";
      })
      .catch((err) => {
        alert("Try after some time website is on mentainence");
      });
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
