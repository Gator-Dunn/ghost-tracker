import React from "react";
import { DataProvider } from "../DataProvider";
import { STATUSES, STATUS_STRINGS } from "../constants";

export const Ghosts = () => {
  const [selectedGhost, setSelectedGhost] = React.useState("");
  const { data, actions } = React.useContext(DataProvider);
  const { evidence, ghosts, invalidGhosts, loaded } = data;
  const { setEvidence } = actions;
  const isInvalidGhost = React.useCallback(
    (ghost) => {
      return invalidGhosts && invalidGhosts.includes(ghost.name);
    },
    [invalidGhosts]
  );

  const handleClick = ({ evidence: ghostEvidence, name }) => {
    const selected = selectedGhost === name;
    let newEvidence = [];
    if (!selected) {
      newEvidence = evidence.map((e) => {
        const status = ghostEvidence.includes(e.name);
        return {
          ...e,
          status: status ? STATUSES[1] : STATUSES[0],
          statusString: status ? STATUS_STRINGS[1] : STATUS_STRINGS[0],
          valid: status,
        };
      });
      setSelectedGhost(name);
    } else {
      newEvidence = evidence.map((e) => ({
        ...e,
        status: STATUSES[0],
        statusString: STATUS_STRINGS[0],
      }));
      setSelectedGhost("");
    }

    setEvidence(newEvidence);
  };

  return (
    loaded &&
    ghosts.map((ghost) => (
      <span
        key={ghost.name}
        onClick={() => handleClick(ghost)}
        className={`Tag-ghost-${isInvalidGhost(ghost) ? "invalid" : "valid"}`}
      >
        {ghost.name}
      </span>
    ))
  );
};
