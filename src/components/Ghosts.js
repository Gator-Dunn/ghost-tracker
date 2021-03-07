import React from "react";
import "../styles/Ghosts.css";
import { actionTypes } from "../reducers/useGhosts";

export const Ghosts = ({
  ghosts: { dispatch, state, toggleGhost },
  evidence: {
    state: { validGhosts },
    toggleGhostEvidence,
  },
}) => {
  const ghostMap = React.useMemo(() => {
    const valid = state.valid.map((ghostName) => ({
      ghostName,
      status: "valid",
    }));
    const invalid = state.invalid.map((ghostName) => ({
      ghostName,
      status: "invalid",
    }));
    const all = [...valid, ...invalid].sort((a, b) =>
      a.ghostName.localeCompare(b.ghostName)
    );
    return all;
  }, [state]);

  React.useEffect(() => {
    dispatch({ payload: validGhosts, type: actionTypes.filter });
  }, [dispatch, validGhosts]);

  const handleClick = (ghost) => {
    toggleGhost(ghost.ghostName);
    toggleGhostEvidence(ghost);
  };

  return ghostMap
    ? ghostMap.map((ghost) => (
        <span
          key={ghost.ghostName}
          onClick={() => handleClick(ghost)}
          className={`Tag-ghost-${ghost.status}`}
        >
          {ghost.ghostName}
        </span>
      ))
    : null;
};
