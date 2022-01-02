import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import Card from "../card";
import { getCurrentDateTime } from "./helper";

const Counter = ({ title }) => {
  const [seconds, setSeconds] = useState(60);
  const [minutes, setMinutes] = useState(59);
  const [hours, setHours] = useState(23);
  const [days, setDays] = useState(30);
  const [canMount, setCanMount] = useState(false);

  // To initiate
  useEffect(() => {
    const { date } = getCurrentDateTime();
    setSeconds(parseInt(10));
    setMinutes(parseInt(1));
    setHours(parseInt(1));
    setDays(parseInt(date));
    setInterval(() => {
      setSeconds((value) => value - 1);
    }, 1000);
    setTimeout(() => {
      setCanMount(true);
    }, 500);
  }, []);

  // For reseting seconds
  useEffect(() => {
    if (seconds === 0) {
      setSeconds(60);
      if (minutes === 1) {
        setMinutes(59);
        if (hours === 1) {
          setHours(23);
          setDays(days - 1);
        } else {
          setHours(hours - 1);
        }
      } else {
        setMinutes(minutes - 1);
      }
    }
  }, [seconds]);
  return (
    <>
      {title && <h2 className={styles.title}>{title}</h2>}
      <div className={`${styles.countdown} ${canMount ? styles.show : ""}`}>
        <Card value={days} label="days" />
        <Card value={hours} label="hours" />
        <Card value={minutes} label="minutes" />
        <Card value={seconds} label="seconds" />
      </div>
    </>
  );
};

export default Counter;
