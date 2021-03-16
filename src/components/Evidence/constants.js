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
};

export const EVIDENCE_MAP = {
  emf: "EMF Level 5",
  fingerprints: "Fingerprints",
  freezing: "Freezing",
  orbs: "Ghost Orbs",
  writing: "Ghost Writing",
  box: "Spirit Box",
};

export const EVIDENCE_CSS_MAP = Object.entries(EVIDENCE_MAP).reduce(
  (acc, [key, val]) => ({ ...acc, [val]: key }),
  {}
);