import React from "react";
import classNames from "classnames";
import { GHOST_EVIDENCE_MAP, GHOST_NAME_MAP } from "../constants";

const SECONDARY_EVIDENCE = [
  {
    ghostName: GHOST_NAME_MAP.wraith,
    icons: [
      {
        icon: "do_not_step",
        classes: ["green-neon"],
      },
    ],
    key: "no_salt_footsteps",
    description: "No glowing footsteps from walking in salt",
  },
  {
    ghostName: GHOST_NAME_MAP.phantom,
    icons: [
      {
        icon: "no_photography",
        classes: ["red-stop"],
      },
    ],
    key: "disappears_on_camera",
    description: "Disappears when photo is taken but manifestation continues",
  },
  {
    ghostName: GHOST_NAME_MAP.phantom,
    icons: [
      {
        icon: "highlight",
        classes: ["yellow-caution"],
      },
    ],
    key: "slow_hunt_blink",
    description: "Ghost blinks slowly while hunting",
  },
  {
    ghostName: GHOST_NAME_MAP.revenant,
    key: "hunt_speed_los",
    icons: [
      {
        icon: "directions_run",
        classes: ["red-stop"],
      },
    ],
    description: "Twice as fast while hunting with line of sight",
  },
  {
    ghostName: GHOST_NAME_MAP.revenant,
    key: "hunt_speed_no_los",
    icons: [
      {
        icon: "directions_run",
        classes: ["inverted"],
      },
    ],
    description: "Twice as slow while hunting without line of sight",
  },
  {
    ghostName: GHOST_NAME_MAP.jinn,
    icon: "directions_run",
    key: "fast_closing_speed_during_hunt_with_power",
    icons: [
      {
        icon: "directions_run",
        classes: ["orange-warning"],
      },
    ],
    description:
      "While hunting, closes with player quickly, then slows to normal",
  },
  {
    ghostName: GHOST_NAME_MAP.banshee,
    icons: [
      {
        icon: "psychology",
        classes: ["red-stop"],
      },
    ],
    key: "hunts_above_sixty_five_percent",
    description:
      "Hunts can (rarely) start at one-hundred percent average sanity",
  },
  {
    ghostName: GHOST_NAME_MAP.demon,
    icons: [
      {
        icon: "psychology",
        classes: ["orange-warning"],
      },
    ],
    key: "hunts_above_sixty_percent",
    description: "Hunts can start at sixty-five percent average sanity",
  },
  {
    ghostName: GHOST_NAME_MAP.demon,
    icons: [
      {
        icon: "psychology",
        classes: ["green-good"],
      },
    ],
    key: "no_sanity_loss_on_ouija_success",
    description: "No sanity loss from successful Ouija board questions",
  },
  {
    ghostName: GHOST_NAME_MAP.mare,
    icons: [
      {
        icon: "psychology",
        classes: ["yellow-caution"],
      },
      {
        icon: "emoji_objects",
        classes: ["md-inactive"],
      },
    ],
    key: "hunts_up_to_sixty_percent_in_dark",
    description:
      "Hunts can start at sixty percent average sanity with lights off",
  },
  {
    ghostName: GHOST_NAME_MAP.mare,
    icons: [
      {
        icon: "psychology",
        classes: ["yellow-caution"],
      },
      {
        icon: "emoji_objects",
        classes: ["yellow-bright"],
      },
    ],
    key: "hunts_at_forty_percent_and_below_with_lights_on",
    description: "Can only hunt at forty percent and below with lights on",
  },
  {
    ghostName: GHOST_NAME_MAP.poltergeist,
    icons: [
      {
        icon: "double_arrow",
        classes: ["yellow-caution"],
      },
    ],
    key: "throws_multiple_objects_at_once",
    description: "Can throw multiple items at the same time",
  },
];

const data = SECONDARY_EVIDENCE.map((s) => ({
  ...s,
  evidence: GHOST_EVIDENCE_MAP[s.ghostName],
}));

const Icon = ({ classes, icon }) => (
  <span
    className={classNames({
      "Secondary-evidence-icon": true,
      "material-icons": true,
      "md-18": true,
      ...classes.reduce(
        (list, c) => ({
          ...list,
          [c]: true,
        }),
        {}
      ),
    })}
  >
    {icon}
  </span>
);

export const Secondary = ({
  evidence: {
    state: { validGhosts },
    toggleGhostEvidence,
  },
  ghosts: { toggleGhost },
}) => {
  const [selectedGhost, setSelectedGhost] = React.useState();
  const handleClick = (ghost) => {
    if (selectedGhost && ghost.ghostName === selectedGhost) {
      setSelectedGhost(null);
    } else {
      setSelectedGhost(ghost.ghostName);
    }
    toggleGhost(ghost.ghostName);
    toggleGhostEvidence(ghost);
  };

  const isSelectedGhost = React.useCallback(
    (ghostName) => selectedGhost === ghostName,
    [selectedGhost]
  );

  return (
    <ul className="Secondary-evidence">
      {data.map(({ description, icons = [], key, ...ghost }) => {
        return (
          <li onClick={() => handleClick(ghost)} key={key}>
            <React.Fragment>
              <span className="Secondary-evidence-icons">
                {icons.map(({ icon, classes }) => (
                  <Icon key={`${key}_${icon}`} classes={classes} icon={icon} />
                ))}
              </span>
              <span
                className={classNames({
                  "Secondary-evidence-description": true,
                  "Secondary-evidence-description-highlighted": isSelectedGhost(ghost.ghostName),
                  "Secondary-evidence-description-disabled": !isSelectedGhost(ghost.ghostName)
                })}
              >
                <span>{description}</span>
              </span>
            </React.Fragment>
          </li>
        );
      })}
    </ul>
  );
};
