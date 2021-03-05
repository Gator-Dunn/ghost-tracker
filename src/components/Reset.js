import React from 'react';

export const Reset = ({ evidence: { resetEvidence }, ghosts: { resetGhosts }}) => {
  const handleClick = () => {
    resetEvidence();
    resetGhosts();
  }
  return (
    <button onClick={handleClick}>Reset</button>
  )
}