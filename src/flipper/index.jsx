import React, { useState } from "react";
import Clock from "./clock";
import Counter from "./counter";
import styles from "./styles.module.scss";

const Flip = ({ as }) => {
  const [isTimer, setIsTimer] = useState(true);
  const title = !isTimer ? "We are launching soon" : "Current time";
  return (
    <div>
      <h2 className={styles.title} onClick={() => setIsTimer(!isTimer)}>
        <span style={{ cursor: "pointer" }}>
          SWITCH AS: {!isTimer ? "CLOCK" : "COUNTDOWN"}
        </span>
      </h2>
      {isTimer ? <Counter title={title} /> : <Clock title={title} />}
    </div>
  );
};

export default Flip;
