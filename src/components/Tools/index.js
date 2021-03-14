import React from "react";
import RandomItems from "./RandomItems";
import Timer from "./Timer";
import './Tools.css';

const Tools = () => {
  return (
    <span className="tools__container">
      <RandomItems />
      <hr className="tools__divider" />
      <Timer />
    </span>
  );
};

export default Tools;
