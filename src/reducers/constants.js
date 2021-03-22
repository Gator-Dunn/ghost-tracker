import {
  EVIDENCE_NAMES,
  GHOSTS,
  GHOST_NAMES,
  STATUS,
} from "../constants";
import { ITEM_TYPES } from "../components/Tools/constants";

export const INITIAL_STATE = {
  evidence: {
    all: EVIDENCE_NAMES,
    confirmed: [],
    excluded: [],
    unconfirmed: EVIDENCE_NAMES,
    status: STATUS,
    ghosts: GHOSTS,
    validGhosts: GHOST_NAMES,
  },
  ghosts: {
    all: GHOST_NAMES,
    valid: GHOST_NAMES,
    invalid: [],
    evidence: GHOSTS,
  },
  appState: {
    evidence: {
      visible: true,
    },
    randomizer: {
      visible: false,
      activeSection: ITEM_TYPES.evidence,
    },
    isDesktopSized: true,
    isTabletSized: false,
    isCellPhoneSized: false,
  }
};
console.log('item types', INITIAL_STATE)
