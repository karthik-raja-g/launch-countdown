import React, { useState, useEffect } from "react";
import "./App.css";
import facebook from "./assets/facebook.svg";
import instagram from "./assets/instagram.svg";
import pinterest from "./assets/pinterest.svg";
import Card from "./card";

function App() {
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(0)
  const [days, setDays] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      if(seconds === 60) {
        setMinutes(minutes + 1)
        setSeconds(1)
        return;
      }
      setSeconds((value) => value + 1)
    },1000)
  },[seconds])

  useEffect(() => {
    if(minutes === 59) {
      setHours(hours + 1)
      setMinutes(0)
    }
  },[minutes])

  useEffect(() => {
    if(hours === 24) {
      setDays(days + 1)
      setHours(0)
    }
  },[hours])
  
  return (
    <div className="App">
      <main>
        <h1 className="title">{days}-{hours}-{minutes}-{seconds}</h1>
        <div className="countdown">
          <Card value={seconds}/>
          {/* <Card path="ease-in-out" val={hours}/>
          <Card path="ease-in" val={minutes}/>
          <Card path="linear" val={seconds}/> */}
          {/* <Card path="ease"/> */}
        </div>
      </main>
      <footer>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <img alt="Facebook" src={facebook} />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <img alt="Instagram" src={instagram} />
        </a>
        <a
          href="https://www.pinterest.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <img alt="Pinterest" src={pinterest} />
        </a>
      </footer>
    </div>
  );
}

export default App;
