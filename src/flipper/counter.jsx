import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import Card from "../card";
import { getCurrentDateTime } from "./helper";

const Clock = ({ title }) => {
  const { date, hours: hrs, minutes: min, seconds: sec } = getCurrentDateTime();
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);
  const [canMount, setCanMount] = useState(false);

  // To initiate
  useEffect(() => {
    setSeconds(parseInt(sec))
    setMinutes(parseInt(min))
    setHours(parseInt(hrs))
    setDays(parseInt(date))
    setInterval(() => {
      setSeconds((value) => value + 1);
    }, 1000);
    setTimeout(() => {
      setCanMount(true);
    }, 500);
  }, []);

  // For reseting seconds
  useEffect(() => {
    if (seconds === 60) {
      setSeconds(0);
      if (minutes === 59) {
        setMinutes(0);
        if (hours === 23) {
          setHours(0);
          setDays(days + 1);
        } else {
          setHours(hours + 1);
        }
      } else {
        setMinutes(minutes + 1);
      }
    }
  }, [seconds]);
  return (
    <>
      {title && <h2 className={styles.title}>{title}</h2>}
      <div className={`${styles.countdown} ${canMount ? styles.show : ''}`}>
        <Card value={days} label="days" />
        <Card value={hours} label="hours" />
        <Card value={minutes} label="minutes" />
        <Card value={seconds} label="seconds" />
      </div>
    </>
  );
};

export default Clock;
