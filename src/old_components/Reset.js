import React from 'react';

export const Reset = ({ evidence: { resetEvidence }, ghosts: { resetGhosts }}) => {
  const handleClick = () => {
    resetEvidence();
    resetGhosts();
  }
  return (
    <button className="Button-reset" onClick={handleClick}>Reset</button>
  )
}