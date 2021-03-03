export const EVIDENCE = {
  emf: "EMF Level 5",
  fingerprints: "Fingerprints",
  freezing: "Freezing",
  orbs: "Ghost Orbs",
  writing: "Ghost Writing",
  box: "Spirit Box",
};

export const GHOSTS = [
  {
    name: "banshee",
    evidence: [EVIDENCE.emf, EVIDENCE.fingerprints, EVIDENCE.freezing],
    valid: true,
  },
  {
    name: "demon",
    evidence: [EVIDENCE.freezing, EVIDENCE.box, EVIDENCE.writing],
    valid: true,
  },
  {
    name: "jinn",
    evidence: [EVIDENCE.emf, EVIDENCE.orbs, EVIDENCE.box],
    valid: true,
  },
  {
    name: "mare",
    evidence: [EVIDENCE.freezing, EVIDENCE.orbs, EVIDENCE.box],
    valid: true,
  },
  {
    name: "oni",
    evidence: [EVIDENCE.emf, EVIDENCE.box, EVIDENCE.writing],
    valid: true,
  },
  {
    name: "phantom",
    evidence: [EVIDENCE.emf, EVIDENCE.freezing, EVIDENCE.orbs],
    valid: true,
  },
  {
    name: "poltergeist",
    evidence: [EVIDENCE.orbs, EVIDENCE.fingerprints, EVIDENCE.box],
    valid: true,
  },
  {
    name: "revenant",
    evidence: [EVIDENCE.emf, EVIDENCE.fingerprints, EVIDENCE.writing],
    valid: true,
  },
  {
    name: "shade",
    evidence: [EVIDENCE.emf, EVIDENCE.orbs, EVIDENCE.writing],
    valid: true,
  },
  {
    name: "spirit",
    evidence: [EVIDENCE.box, EVIDENCE.fingerprints, EVIDENCE.writing],
    valid: true,
  },
  {
    name: "wraith",
    evidence: [EVIDENCE.freezing, EVIDENCE.fingerprints, EVIDENCE.box],
    valid: true,
  },
  {
    name: "yurei",
    evidence: [EVIDENCE.freezing, EVIDENCE.orbs, EVIDENCE.writing],
    valid: true,
  },
];

export const STATUSES = ["⚪", "✔️", "❌"];
export const STATUS_STRINGS = ["default", "active", "inverted"];
