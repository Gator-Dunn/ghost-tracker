import React from "react";
import classNames from "classnames";
import { useStore } from "../../StoreProvider";
import { SECONDARY_EVIDENCE } from "./constants";
import Icon from "../Icon";
import "./SecondaryEvidence.css";

const SecondaryEvidence = () => {
  const {
    evidence: {
      state: { validGhosts },
      toggleGhostEvidence,
    },
    ghosts: { toggleGhost },
  } = useStore();
  const [selectedGhost, setSelectedGhost] = React.useState();
  const [visible, setVisible] = React.useState(false);

  const handleClick = (ghost) => {
    if (selectedGhost && ghost.ghostName === selectedGhost) {
      setSelectedGhost(null);
    } else {
      setSelectedGhost(ghost.ghostName);
    }
    toggleGhost(ghost.ghostName);
    toggleGhostEvidence(ghost);
  };

  const highlighted = React.useCallback(
    (ghostName) => validGhosts.includes(ghostName),
    [validGhosts]
  );

  return (
    <span className="secondaryEvidence">
      <span
        onClick={() => setVisible(!visible)}
        className={classNames("secondaryEvidence__evidence__header", {
          "secondaryEvidence__evidence__header--open": visible,
        })}
      >
        <span>Secondary Evidence</span>
        <Icon
          classes={[
            "size-large",
            "expander",
            "secondaryEvidence__header--expander",
          ]}
          icon={visible ? "expand_less" : "expand_more"}
        />
      </span>
      <span
        className={classNames("secondaryEvidence__evidence", {
          "secondaryEvidence__evidence--hidden": !visible,
        })}
      >
        {SECONDARY_EVIDENCE.map(
          ({ description, icons = [], key, ...ghost }) => {
            return (
              <React.Fragment key={key}>
                <span
                  onClick={() => handleClick(ghost)}
                  key={key}
                  className="secondaryEvidence__evidence--item"
                >
                  {icons.map(
                    ({ icon, classes }) =>
                      icon && (
                          <Icon
                            key={`${key}_${icon}`}
                            classes={[
                              ...classes,
                              "secondaryEvidence__evidence--icon",
                            ]}
                            icon={icon}
                          />
                      )
                  )}
                  <span
                    className={classNames("secondaryEvidence___description", {
                      "secondaryEvidence___description--highlighted": highlighted(
                        ghost.ghostName
                      ),
                      "secondaryEvidence___description--disabled": !highlighted(
                        ghost.ghostName
                      ),
                      "secondaryEvidence___description--selected":
                        selectedGhost === ghost.ghostName,
                    })}
                  >
                    <span>{description}</span>
                  </span>
                </span>
              </React.Fragment>
            );
          }
        )}
      </span>
    </span>
  );
};

export default SecondaryEvidence;
