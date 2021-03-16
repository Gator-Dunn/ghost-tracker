import React from "react";
import { useStore } from "../../StoreProvider";
import "./Controls.css";

const ResetButton = () => {
  const {
    evidence: { resetEvidence },
    ghosts: { resetGhosts },
  } = useStore();
  const handleClick = () => {
    resetEvidence();
    resetGhosts();
  };
  return (
    <button className="resetButton__button" onClick={handleClick}>
      Reset
    </button>
  );
};

export default ResetButton;
