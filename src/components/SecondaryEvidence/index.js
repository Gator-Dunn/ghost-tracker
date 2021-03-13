import React from "react";
import classNames from "classnames";
import { useStore } from "../../StoreProvider";
import { SECONDARY_EVIDENCE } from "./constants";
import Icon from "../Icon";
import "./SecondaryEvidence.css";

const Secondary = () => {
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
        className={classNames({
          "secondaryEvidence__evidence__header": true,
          "secondaryEvidence__evidence__header--open": visible,
        })}
      >
        Secondary Evidence{" "}
        <Icon
          classes={["size-large", "expander"]}
          icon={visible ? "expand_less" : "expand_more"}
        />
      </span>
      <ul
        className={classNames({
          "secondaryEvidence__evidence--visible": visible,
          "secondaryEvidence__evidence--hidden": !visible,
        })}
      >
        {SECONDARY_EVIDENCE.map(
          ({ description, icons = [], key, ...ghost }) => {
            return (
              <li onClick={() => handleClick(ghost)} key={key}>
                <React.Fragment>
                  <span className="secondaryEvidence__evidence--icons">
                    {icons.map(({ icon, classes }) => (
                      <Icon
                        key={`${key}_${icon}`}
                        classes={classes}
                        icon={icon}
                      />
                    ))}
                  </span>
                  <span
                    className={classNames({
                      "secondaryEvidence__evidence__description": true,
                      "secondaryEvidence__evidence__description--highlighted": highlighted(
                        ghost.ghostName
                      ),
                      "secondaryEvidence__evidence__description--disabled": !highlighted(
                        ghost.ghostName
                      ),
                      "secondaryEvidence__evidence__description--selected":
                        selectedGhost === ghost.ghostName,
                    })}
                  >
                    <span>{description}</span>
                  </span>
                </React.Fragment>
              </li>
            );
          }
        )}
      </ul>
    </span>
  );
};

export default Secondary;
