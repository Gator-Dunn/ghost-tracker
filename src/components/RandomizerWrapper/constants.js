import { nanoid } from "nanoid";
import { ITEM_TYPES } from "../Tools/constants";

export const RANDOMIZERS = [
  {
    label: "Evidence Items",
    filter: ITEM_TYPES.evidence,
    key: nanoid(),
    gridAreas: {
      counter: "EvidenceCounter",
      controls: "EvidenceControls",
      result: "EvidenceResult",
      items: "EvidenceItems",
    },
    speed: 55,
  },
  {
    label: "Objective Items",
    filter: ITEM_TYPES.objectives,
    key: nanoid(),
    gridAreas: {
      counter: "ObjectivesCounter",
      controls: "ObjectivesControls",
      result: "ObjectivesResult",
      items: "ObjectivesItems",
    },
    speed: 55,
  },
  {
    label: "Junk Items",
    filter: ITEM_TYPES.junk,
    key: nanoid(),
    speed: 55,
    gridAreas: {
      counter: "JunkCounter",
      controls: "JunkControls",
      result: "JunkResult",
      items: "JunkItems",
    }
  },
];
