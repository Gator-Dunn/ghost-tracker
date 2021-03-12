import React from "react";
import RandomItems from './RandomItems';
import ResetButton from './ResetButton';
import "./Controls.css";

const Controls = () => {
  return (
    <span className="controls">
      <RandomItems />
      <ResetButton />
    </span>
  )
}

export default Controls;
