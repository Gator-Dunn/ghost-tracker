import randomColor from "randomcolor";
import { EVIDENCE_NAMES, GHOSTS, GHOST_NAMES, STATUS } from "../constants";

import {
  ITEMS,
  ITEM_CATEGORIES,
  ITEM_TYPES,
} from "../components/Tools/constants";

const COLORS = randomColor({ count: ITEMS.length });
const RANDOMIZER_ITEMS = ITEMS.filter(
  (item) =>
    ![ITEM_CATEGORIES.onsite, ITEM_CATEGORIES.van].includes(item.category)
).map((item, index) => ({
  ...item,
  color: COLORS[index],
  checked: true,
  disabled: false,
  removed: false,
}));

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
  randomizer: {
    all: RANDOMIZER_ITEMS,
    filters: Object.values(ITEM_TYPES).reduce(
      (filters, filter) => ({
        ...filters,
        [filter]: true,
      }),
      {}
    ),
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
  },
};
