import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import useDebounce from '../useDebounce';

const Card = ({ value }) => {
  // const value = 34
  const [temp, setTemp] = useDebounce(value < 10 ? `0${value}` : value, 400)
  const [flip, setFlip] = useState(false)
  useEffect(() => {
    if(value === 0) return;
    setTemp(value < 10 ? `0${value}` : value);
    setFlip(!flip)
  },[value])
  return (
    <div className={styles.cardContainer}>
      <div
        className={`${styles.card} ${styles.top} ${
          !flip ? styles.flipper : ''
        }`}
      >
        <p>{!flip ? temp : value < 10 ? `0${value}` : value}</p>
      </div>
      <span className={`${styles.cut} ${styles.right}`}/>
      <span className={`${styles.cut} ${styles.left}`}/>
      <div
        className={`${styles.card}  ${
          flip ? styles.flipper : ''
        } ${styles.flipCard}`}
      >
        <p>{flip ? temp : value < 10 ? `0${value}` : value}</p>
      </div>
      <div className={`${styles.card} ${styles.bottom}`}>
        <p>{temp}</p>
      </div>
    </div>
  );
};

export default Card
