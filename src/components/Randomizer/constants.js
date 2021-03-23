import randomColor from "randomcolor";
import { ITEMS, ITEM_TYPES } from "../Tools/constants";

const NAMES = ITEMS.map((i) => i.display);
const COLORS = randomColor({ count: ITEMS.length });
const colorList = [
  "red",
  "green",
  "blue",
  "orange",
  "yellow",
  "purple",
  "pink",
];

const ITEM_TYPE_MAP = Object.values(ITEM_TYPES).reduce((types, type, index) => {
  let items = ITEMS.filter((i) => i.types.includes(type));
  if (type === ITEM_TYPES.all) {
    items = [ITEM_TYPES.evidence, ITEM_TYPES.objectives, ITEM_TYPES.junk]
      .map((it) => ITEMS.filter((i) => i.types.includes(it)))
      .flat();
  }
  const colors = randomColor({
    count: items.length,
    luminosity: "bright",
    hue: colorList[index],
  });

  return {
    ...types,
    [type]: {
      items: [...new Set(items)].sort((a, b) => a.display.localeCompare(b.display)),
      colors,
    },
  };
}, {});

export { COLORS, ITEMS, ITEM_TYPE_MAP, NAMES };
