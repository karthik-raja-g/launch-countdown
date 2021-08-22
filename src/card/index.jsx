import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import useDebounce from '../useDebounce';

const Card = ({ value, label }) => {
  const [temp, setTemp] = useDebounce(value < 10 || value === 60 ? `0${value}` : 0, 400)
  const [flip, setFlip] = useState(false)
  useEffect(() => {
    if(value === 0) return;
    setTemp(value < 10 ? `0${value}` : value);
    setFlip(!flip)
  },[value])
  return (
    <section className={styles.counter}>
      <div className={styles.cardContainer}>
        <div
          className={`${styles.card} ${styles.top} ${
            !flip ? styles.flipper : ""
          }`}
        >
          <p>{!flip ? temp : value < 10 ? `0${value}` : value}</p>
        </div>
        <div
          className={`${styles.card}  ${flip ? styles.flipper : ""} ${
            styles.flipCard
          }`}
        >
          <p>{flip ? temp : value < 10 ? `0${value}` : value}</p>
        </div>
        <div className={`${styles.card} ${styles.bottom}`}>
          <p>{temp}</p>
        </div>
      </div>
      <p className={styles.label}>{label}</p>
    </section>
  );
};

export default Card
