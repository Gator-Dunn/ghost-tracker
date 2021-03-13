import React from "react";
import RandomItems from "./RandomItems";
import Timer from "./Timer";

const Tools = () => {
  return (
    <span className="tools__container">
      <RandomItems />
      <Timer />
    </span>
  );
};

export default Tools;
