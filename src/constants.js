export const STATUS = {
  unconfirmed: {
    icon: "⚪",
    text: "unconfirmed",
  },
  confirmed: {
    icon: "✔️",
    text: "confirmed",
  },
  excluded: {
    icon: "❌",
    text: "excluded",
  },
};

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

export const GHOST_NAMES = GHOSTS.map((g) => g.name);

export const GHOST_NAME_MAP = GHOST_NAMES.reduce(
  (ghosts, ghost) => ({
    ...ghosts,
    [ghost]: ghost,
  }),
  {}
);
