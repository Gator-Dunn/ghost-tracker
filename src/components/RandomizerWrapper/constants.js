import { nanoid } from "nanoid";
import { ITEM_TYPES } from "../Tools/constants";

const RANDOMIZERS = [
  {
    label: "All",
    path: "all",
    filter: ITEM_TYPES.all,
    key: nanoid(),
    speed: 55,
  },
  {
    label: "Evidence",
    path: "evidence",
    filter: ITEM_TYPES.evidence,
    key: nanoid(),
    speed: 55,
  },
  {
    label: "Objectives",
    path: "objectives",
    filter: ITEM_TYPES.objectives,
    key: nanoid(),
    speed: 55,
  },
  {
    label: "Junk",
    path: "junk",
    filter: ITEM_TYPES.junk,
    key: nanoid(),
    speed: 55,
  },
];

export { ITEM_TYPES, RANDOMIZERS };
