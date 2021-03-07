import React from "react";
import classNames from "classnames";
import { SECONDARY_EVIDENCE } from "../constants";
import { Icon } from "./Icon";
import "../styles/Secondary.css";

export const Secondary = ({
  evidence: {
    state: { validGhosts },
    toggleGhostEvidence,
  },
  ghosts: { toggleGhost },
}) => {
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
    <React.Fragment>
      <span
        onClick={() => setVisible(!visible)}
        className={classNames({
          "Secondary-evidence-header": true,
          "Secondary-evidence-header-open": visible,
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
          "Secondary-evidence-visible": visible,
          "Secondary-evidence-hidden": !visible,
        })}
      >
        {SECONDARY_EVIDENCE.map(
          ({ description, icons = [], key, ...ghost }) => {
            return (
              <li onClick={() => handleClick(ghost)} key={key}>
                <React.Fragment>
                  <span className="Secondary-evidence-icons">
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
                      "Secondary-evidence-description": true,
                      "Secondary-evidence-description-highlighted": highlighted(
                        ghost.ghostName
                      ),
                      "Secondary-evidence-description-disabled": !highlighted(
                        ghost.ghostName
                      ),
                      "Secondary-evidence-description-selected":
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
    </React.Fragment>
  );
};
