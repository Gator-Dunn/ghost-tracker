export const STATUS = {
  unconfirmed: {
    class: "grey-disabled",
    icon: "radio_button_unchecked",
    text: "unconfirmed",
  },
  confirmed: {
    class: "green-good",
    icon: "radio_button_checked",
    text: "confirmed",
  },
  excluded: {
    class: "red-stop",
    icon: "not_interested",
    text: "excluded",
  },
}

export const EVIDENCE_MAP = {
  emf: "EMF Level 5",
  fingerprints: "Fingerprints",
  freezing: "Freezing",
  orbs: "Ghost Orbs",
  writing: "Ghost Writing",
  box: "Spirit Box",
};

export const EVIDENCE_NAMES = Object.values(EVIDENCE_MAP);

export const EVIDENCE = Object.entries(EVIDENCE_MAP).map(([key, name]) => ({
  key,
  name,
  statusIcon: STATUS.unconfirmed.icon,
  statusText: STATUS.unconfirmed.text,
}));

export const GHOSTS = [
  {
    name: "banshee",
    evidence: [
      EVIDENCE_MAP.emf,
      EVIDENCE_MAP.fingerprints,
      EVIDENCE_MAP.freezing,
    ],
    valid: true,
  },
  {
    name: "demon",
    evidence: [EVIDENCE_MAP.freezing, EVIDENCE_MAP.box, EVIDENCE_MAP.writing],
    valid: true,
  },
  {
    name: "jinn",
    evidence: [EVIDENCE_MAP.emf, EVIDENCE_MAP.orbs, EVIDENCE_MAP.box],
    valid: true,
  },
  {
    name: "mare",
    evidence: [EVIDENCE_MAP.freezing, EVIDENCE_MAP.orbs, EVIDENCE_MAP.box],
    valid: true,
  },
  {
    name: "oni",
    evidence: [EVIDENCE_MAP.emf, EVIDENCE_MAP.box, EVIDENCE_MAP.writing],
    valid: true,
  },
  {
    name: "phantom",
    evidence: [EVIDENCE_MAP.emf, EVIDENCE_MAP.freezing, EVIDENCE_MAP.orbs],
    valid: true,
  },
  {
    name: "poltergeist",
    evidence: [EVIDENCE_MAP.orbs, EVIDENCE_MAP.fingerprints, EVIDENCE_MAP.box],
    valid: true,
  },
  {
    name: "revenant",
    evidence: [
      EVIDENCE_MAP.emf,
      EVIDENCE_MAP.fingerprints,
      EVIDENCE_MAP.writing,
    ],
    valid: true,
  },
  {
    name: "shade",
    evidence: [EVIDENCE_MAP.emf, EVIDENCE_MAP.orbs, EVIDENCE_MAP.writing],
    valid: true,
  },
  {
    name: "spirit",
    evidence: [
      EVIDENCE_MAP.box,
      EVIDENCE_MAP.fingerprints,
      EVIDENCE_MAP.writing,
    ],
    valid: true,
  },
  {
    name: "wraith",
    evidence: [
      EVIDENCE_MAP.freezing,
      EVIDENCE_MAP.fingerprints,
      EVIDENCE_MAP.box,
    ],
    valid: true,
  },
  {
    name: "yurei",
    evidence: [EVIDENCE_MAP.freezing, EVIDENCE_MAP.orbs, EVIDENCE_MAP.writing],
    valid: true,
  },
];

export const GHOST_EVIDENCE_MAP = GHOSTS.reduce(
  (map, ghost) => ({
    ...map,
    [ghost.name]: ghost.evidence,
  }),
  {}
);

export const GHOST_NAMES = GHOSTS.map((g) => g.name);

export const GHOST_NAME_MAP = GHOST_NAMES.reduce(
  (ghosts, ghost) => ({
    ...ghosts,
    [ghost]: ghost,
  }),
  {}
);

export const SECONDARY_EVIDENCE = [
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
      {
        icon: "bolt",
        classes: ["yellow-bright"],
      },
    ],
    description:
      "While hunting, moves fast while far away if breaker is on",
  },
  {
    ghostName: GHOST_NAME_MAP.jinn,
    icon: "directions_run",
    key: "normal_hunt_speed_with_power_off",
    icons: [
      {
        icon: "directions_run",
        classes: ["inverted"],
      },
      {
        icon: "bolt",
        classes: ["inverted"],
      },
    ],
    description:
      "While hunting, moves normal speed if breaker is off",
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
].map((s) => ({
  ...s,
  icons: [
    ...s.icons,
    "Secondary-evidence-icon",
  ],
  evidence: GHOST_EVIDENCE_MAP[s.ghostName],
}));
