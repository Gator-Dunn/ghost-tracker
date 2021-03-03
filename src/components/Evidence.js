import React from "react";
import { DataProvider } from "../DataProvider";
import { STATUSES, STATUS_STRINGS } from "../constants";

export const Evidence = ({setEvidence}) => {
  const { evidence, loaded } = React.useContext(
    DataProvider
  );

  const handleClick = (status, key) => {
    const newEvidence = evidence.map((e) => {
      const statusIndex =
        STATUSES.indexOf(status) === STATUSES.length - 1
          ? 0
          : STATUSES.indexOf(status) + 1;

      const newStatus = e.key === key ? STATUSES[statusIndex] : e.status;
      const newStatusString =
        e.key === key ? STATUS_STRINGS[statusIndex] : e.statusString;
      return {
        ...e,
        status: newStatus,
        statusString: newStatusString,
      };
    });

    setEvidence(newEvidence);
  };

  return (
    loaded && evidence.map(({ key, name, status, statusString }) => (
      <span
        className="Evidence-item"
        onClick={() => handleClick(status, key)}
        key={key}
      >
        <span className="Evidence-status">{status}</span>
        <span className={`Evidence-name-${statusString}`}>{name}</span>
      </span>
    ))
  )
};
