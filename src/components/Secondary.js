import React from "react";
import { GHOST_NAME_MAP } from '../constants';

const SECONDARY_EVIDENCE = [
    {
      ghost: GHOST_NAME_MAP.wraith,
      name: "no_salt_footsteps",
      description: "No footsteps in salt",
    },
    {
      ghost: GHOST_NAME_MAP.phantom,
      name: "disappears_on_camera",
      description: "Disappears when its photo is taken",
    },
    {
      ghost: GHOST_NAME_MAP.phantom,
      name: "slow_hunt_blink",
      description: "Blinks slowly while hunting",
    },
    {
      ghost: GHOST_NAME_MAP.revenant,
      name: "hunt_speed_los",
      description: "Twice as fast while hunting with line of sight",
    },
    {
      ghost: GHOST_NAME_MAP.revenant,
      name: "hunt_speed_no_los",
      description: "Twice as slow while hunting without line of sight",
    },
    {
      ghost: GHOST_NAME_MAP.banshee,
      name: "hunts_above_sixty_five_percent",
      description: "Starts hunt above sixty-five percent"
    }
  ];

export const Secondary = () => {
  return null;
  // return (
  //   SECONDARY_EVIDENCE.map((s) => {
  //     return (
  //       <div key={s.name}>{s.ghost} | {s.description}</div>
  //     )
  //   })
  // );
};
