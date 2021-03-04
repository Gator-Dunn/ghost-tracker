import React from "react";
import { DataProvider } from "../DataProvider";
import { STATUSES, STATUS_STRINGS } from "../constants";
import { selectValidEvidence } from "../selectors";

export const Evidence = () => {
  const { actions, data } = React.useContext(DataProvider);
  const { evidence, loaded } = data;
  const { setEvidence } = actions;

  const handleClick = (status, key, name) => {
    const validEvidence = selectValidEvidence(name, data);

    const newEvidence = evidence.map((e) => {
      const isValidEvidence = validEvidence.includes(e.name);
      const statusIndex =
        STATUSES.indexOf(status) === STATUSES.length - 1
          ? 0
          : STATUSES.indexOf(status) + 1;

      console.log("isInvalidEvidence", { name: e.name, validEvidence });

      if (e.key !== key) {
        return {
          ...e,
          status: isValidEvidence ? e.status : STATUSES[2],
          statusString: isValidEvidence ? e.statusString : STATUS_STRINGS[2],
        };
      }

      return {
        ...e,
        status: isValidEvidence ? STATUSES[statusIndex] : STATUSES[2],
        statusString: isValidEvidence
          ? STATUS_STRINGS[statusIndex]
          : STATUS_STRINGS[2],
        valid: isValidEvidence,
      };
    });

    setEvidence(newEvidence);
  };

  return (
    loaded &&
    evidence.map(({ key, name, status, statusString }) => (
      <span
        className="Evidence-item"
        onClick={() => handleClick(status, key, name)}
        key={key}
      >
        <span className="Evidence-status">{status}</span>
        <span className={`Evidence-name-${statusString}`}>{name}</span>
      </span>
    ))
  );
};
