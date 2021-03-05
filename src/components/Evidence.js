import React from "react";
import { STATUS } from "../constants";

export const Evidence = ({evidence: { state, incrementStatus }}) => {
  const evidenceMap = React.useMemo(() => {
    const confirmed = state.confirmed.map((evidenceName) => ({
      evidenceName,
      statusIcon: STATUS.confirmed.icon,
      statusText: STATUS.confirmed.text,
    }));
    const excluded = state.excluded.map((evidenceName) => ({
      evidenceName,
      statusIcon: STATUS.excluded.icon,
      statusText: STATUS.excluded.text,
    }));
    const unconfirmed = state.unconfirmed.map((evidenceName) => ({
      evidenceName,
      statusIcon: STATUS.unconfirmed.icon,
      statusText: STATUS.unconfirmed.text,
    }));
    const all = [...confirmed, ...excluded, ...unconfirmed];
    all.sort((a, b) => a.evidenceName.localeCompare(b.evidenceName));

    return all;
  }, [state]);

  return evidenceMap.map((e, key) => (
    <span
      className="Evidence-item"
      onClick={() => incrementStatus(e.evidenceName)}
      key={key}
    >
      <span className="Evidence-status">{e.statusIcon}</span>
      <span className={`Evidence-name-${e.statusText}`}>{e.evidenceName}</span>
    </span>
  ));
};
