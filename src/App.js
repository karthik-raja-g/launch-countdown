import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons'
import "./App.css";
import Card from "./card";

function App() {
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(0)
  const [days, setDays] = useState(0)
  const [flipHours, setFlipHours] = useState(false)
  const [flipDays, setFlipDays] = useState(false)
  const [flipMinutes, setFlipMinutes] = useState(false)

  // To initiate
  useEffect(() => {
    setInterval(() => {
      setSeconds((value) => value + 1)
    },1000)
  },[])

  // For reseting seconds 
  useEffect(() => {
    if(seconds === 60) {
      setFlipMinutes(true)
      setSeconds(0)
      if(minutes === 60) {
        setMinutes(0)
        if(hours === 24) {
          setHours(0)
          setDays(days + 1)
        } else {
          setHours(hours + 1)
        }
      } else {
        setMinutes( minutes + 1 )
      }
      return;
    }
    setFlipMinutes(false)
    setFlipHours(false)
    setFlipDays(false)
  },[seconds])

  // // Flip minutes
  // useEffect(() => {
  //   if(!flipMinutes) return
  //   if(minutes === 60) {
  //     setFlipHours(true)
  //     setMinutes(0)
  //     return;
  //   }
  //   setMinutes( minutes + 1 )
  // },[flipMinutes])

  // // Flip hours
  // useEffect(() => {
  //   if(!flipHours) return
  //   if(hours === 24) {
  //     setFlipDays(true)
  //     setHours(0)
  //     return;
  //   }
  //   setHours( hours + 1 )
  // },[flipHours])

  // // Flip days
  // useEffect(() => {
  //   if(!flipDays) return
  //   setDays( days + 1 )
  // },[flipDays])
  
  return (
    <div className="App">
      <main>
        <h2 className="title">We're launching soon</h2>
        <div className="countdown">
          <Card value={days} label="days"/>
          <Card value={hours} label="hours"/>
          <Card value={minutes} label="minutes"/>
          <Card value={seconds} label="seconds"/>
        </div>
      </main>
      <footer>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FontAwesomeIcon icon={faFacebookSquare}/>
        </a>
        <a
          href="https://www.pinterest.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FontAwesomeIcon icon={faPinterest}/>
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FontAwesomeIcon icon={faInstagram}/>
        </a>
      </footer>
    </div>
  );
}

export default App;
