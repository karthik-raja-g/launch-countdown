import React from "react";
import Clock from "./clock";
import Counter from "./counter";

const Flip = ({ title, as }) =>
  as === "counter" ? <Counter title={title} /> : <Clock title={title} />;

export default Flip;
