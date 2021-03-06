import {
  EVIDENCE_NAMES,
  GHOSTS,
  GHOST_NAMES,
  STATUS,
} from "../constants";

export const INITIAL_STATE = {
  evidence: {
    all: EVIDENCE_NAMES,
    confirmed: [],
    excluded: [],
    unconfirmed: EVIDENCE_NAMES,
    status: STATUS,
    ghosts: GHOSTS,
    validEvidence: EVIDENCE_NAMES,
    validGhosts: GHOST_NAMES,
  },
  ghosts: {
    all: GHOST_NAMES,
    valid: GHOST_NAMES,
    invalid: [],
    evidence: GHOSTS,
  },
};
