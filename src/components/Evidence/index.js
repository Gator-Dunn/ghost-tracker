import React from "react";
import classNames from "classnames";
import { useStore } from "../../StoreProvider";
import Icon from "../Icon";
import { EVIDENCE_CSS_MAP, STATUS } from "./constants";
import "./Evidence.css";

const Evidence = () => {
  const {
    evidence: { toggleExclude, toggleConfirm, state },
  } = useStore();

  const isActive = React.useCallback(
    (evidence, type) => state[type].includes(evidence),
    [state]
  );

  const evidenceMap = React.useMemo(() => {
    const confirmed = state.confirmed.map((evidenceName) => ({
      class: STATUS.confirmed.class,
      evidenceName,
      statusIcon: STATUS.confirmed.icon,
      statusText: STATUS.confirmed.text,
    }));
    const excluded = state.excluded.map((evidenceName) => ({
      class: STATUS.excluded.class,
      evidenceName,
      statusIcon: STATUS.excluded.icon,
      statusText: STATUS.excluded.text,
    }));
    const unconfirmed = state.unconfirmed.map((evidenceName) => ({
      class: STATUS.unconfirmed.class,
      evidenceName,
      statusIcon: STATUS.unconfirmed.icon,
      statusText: STATUS.unconfirmed.text,
    }));
    const all = [...confirmed, ...excluded, ...unconfirmed];
    all.sort((a, b) => a.evidenceName.localeCompare(b.evidenceName));

    return all;
  }, [state]);

  const handleClick = (e) => {
    const {
      target: {
        dataset: { evidence, action },
      },
    } = e;
    switch (action) {
      case "exclude":
        toggleExclude(evidence);
        break;
      case "confirm":
        toggleConfirm(evidence);
        break;
      default:
        break;
    }
  };

  return (
    <span className="evidence__items">
      {evidenceMap.map((e, key) => (
        <span className="evidence__item" key={key}>
          <span className="evidence__status">
            <span onClick={handleClick}>
              <Icon
                data-evidence={e.evidenceName}
                data-action="exclude"
                icon="not_interested"
                classes={[
                  "evidence__status__exclude",
                  isActive(e.evidenceName, "excluded")
                    ? "red-stop"
                    : "grey-disabled",
                ]}
                size="large"
              />
            </span>
            <span onClick={handleClick}>
              <Icon
                data-evidence={e.evidenceName}
                data-action="confirm"
                icon="task_alt"
                classes={[
                  "evidence__status__confirm",
                  isActive(e.evidenceName, "confirmed")
                    ? "green-good"
                    : "grey-disabled",
                ]}
                size="large"
              />
            </span>
          </span>
          <span
            className={classNames(
              "evidence__item--name",
              `evidence__${EVIDENCE_CSS_MAP[e.evidenceName]}`,
              `evidence__name-${e.statusText}`
            )}
          ></span>
        </span>
      ))}
    </span>
  );
};

export default Evidence;
