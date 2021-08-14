import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";

const Card = () => {
  const [val, setVal] = useState(0);
  return (
    <>
      <div className={styles.cardContainer}>
        <div className={`${styles.card} ${styles.top}`}>
          <p>{val < 10 ? `0${val}` : val}</p>
        </div>
        <div className={`${styles.wedge} ${styles.left}`}></div>
        <div className={styles.flipper}></div>
        <div className={`${styles.wedge} ${styles.right}`}></div>
        <div className={`${styles.card} ${styles.bottom}`}>
          <p>{val < 10 ? `0${val}` : val}</p>
        </div>
      </div>
      <button onClick={() => setVal((prev) => prev + 1)}>up</button>
      <button onClick={() => setVal((prev) => prev - 1)}>down</button>
      <input value={val} onChange={(e) => setVal(e.target.value)} />
    </>
  );
};

export default Card;
