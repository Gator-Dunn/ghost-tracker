export const ITEM_CATEGORIES = {
  starter: "STARTER_ITEMS",
  van: "VAN_EQUIPMENT",
  onsite: "ONSITE_EQUIPMENT",
  purchasable: "PURCHASABLE_EQUIPMENT",
}

export const ITEM_TYPES = {
  evidence: "EVIDENCE_ITEMS",
  objectives: "OBJECTIVE_ITEMS",
  photos: "PHOTO_ITEMS",
  junk: "JUNK_ITEMS",
  special: "SPECIAL_ITEMS",
  lights: "LIGHT_SOURCE_ITEMS",
  tools: "TOOL_ITEMS",
  other: "OTHER_ITEMS",
};

export const ITEM_TYPES_DESCRIPTION = {
  evidence: "Items used for gathering direct evidence",
  objectives: "Items used for completing objectives",
  photos: "Items worth photo money",
  junk: "Useless crap or favored treasure?",
  special: "SPECIAL_ITEMS",
  lights: "Light sources",
  tools: "Items that are useful for general gameplay",
  other: "Let's be real, this is just the tripod",
}

export const ITEMS = [
  {
    id: "spiritBox",
    display: "Spirit Box",
    displayShort: "Spirit Box",
    category: ITEM_CATEGORIES.starter,
    types: [ITEM_TYPES.evidence]
  },
  {
    id: "ghostWritingBook",
    display: "Ghost Writing Book",
    displayShort: "Ghost Book",
    category: ITEM_CATEGORIES.starter,
    types: [ITEM_TYPES.evidence]
  },
  {
    id: "photoCamera",
    display: "Photo Camera",
    displayShort: "Photo",
    category: ITEM_CATEGORIES.starter,
    types: [ITEM_TYPES.evidence, ITEM_TYPES.objectives, ITEM_TYPES.special]
  },
  {
    id: "emfReader",
    display: "EMF Reader",
    displayShort: "EMF",
    category: ITEM_CATEGORIES.starter,
    types: [ITEM_TYPES.evidence]
  },
  {
    id: "videoCamera",
    display: "Video Camera",
    displayShort: "Video",
    category: ITEM_CATEGORIES.starter,
    types: [ITEM_TYPES.evidence]
  },
  {
    id: "uvFlashlight",
    display: "UV Flashlight",
    displayShort: "UV Light",
    category: ITEM_CATEGORIES.starter,
    types: [ITEM_TYPES.evidence, ITEM_TYPES.light]
  },
  {
    id: "flashlight",
    display: "Flashlight",
    displayShort: "Light",
    category: ITEM_CATEGORIES.starter,
    types: [ITEM_TYPES.light]
  },
  {
    id: "objectiveBoard",
    display: "Objective Board",
    displayShort: "Objective Board",
    category: ITEM_CATEGORIES.van,
    types: [ITEM_TYPES.tools]
  },
  {
    id: "siteMap",
    display: "Site Map",
    displayShort: "Site Map",
    category: ITEM_CATEGORIES.van,
    types: [ITEM_TYPES.tools]
  },
  {
    id: "sanityMonitor",
    display: "Sanity Monitor",
    displayShort: "Sanity Monitor",
    category: ITEM_CATEGORIES.van,
    types: [ITEM_TYPES.tools]
  },
  {
    id: "siteActivityMonitor",
    display: "Site Activity Monitor",
    displayShort: "Activity Monitor",
    category: ITEM_CATEGORIES.van,
    types: [ITEM_TYPES.tools]
  },
  {
    id: "soundMonitor",
    display: "Sound Monitor",
    displayShort: "Sound Monitor",
    category: ITEM_CATEGORIES.van,
    types: [ITEM_TYPES.tools]
  },
  {
    id: "cameraSystem",
    display: "Camera System",
    displayShort: "Camera System",
    category: ITEM_CATEGORIES.van,
    types: [ITEM_TYPES.tools]
  },
  {
    id: "ouijaBoard",
    display: "Ouija Board",
    displayShort: "Ouija",
    category: ITEM_CATEGORIES.onsite,
    types: [ITEM_TYPES.photos, ITEM_TYPES.special]
  },
  {
    id: "voodooDoll",
    display: "Voodoo Doll",
    displayShort: "Voodoo Doll",
    category: ITEM_CATEGORIES.onsite,
    types: [ITEM_TYPES.photos]
  },
  {
    id: "boneEvidence",
    display: "Bone Evidence",
    displayShort: "Bone",
    category: ITEM_CATEGORIES.onsite,
    types: [ITEM_TYPES.photos]
  },
  {
    id: "candle",
    display: "Candle",
    displayShort: "Candle",
    category: ITEM_CATEGORIES.purchasable,
    types: [ITEM_TYPES.light]
  },
  {
    id: "Crucifix",
    display: "Crucifix",
    displayShort: "Crucifix",
    category: ITEM_CATEGORIES.purchasable,
    types: [ITEM_TYPES.tools]
  },
  {
    id: "glowStick",
    display: "Glow Stick",
    displayShort: "Glow Stick",
    category: ITEM_CATEGORIES.purchasable,
    types: [ITEM_TYPES.evidence]
  },
  {
    id: "headMountedCamera",
    display: "Head Mounted Camera",
    displayShort: "Head Cam",
    category: ITEM_CATEGORIES.purchasable,
    types: [ITEM_TYPES.junk]
  },
  {
    id: "infraredLightSensor",
    display: "Infrared Light Sensor",
    displayShort: "Light Sensor",
    category: ITEM_CATEGORIES.purchasable,
    types: [ITEM_TYPES.junk, ITEM_TYPES.light]
  },
  {
    id: "lighter",
    display: "Lighter",
    displayShort: "Lighter",
    category: ITEM_CATEGORIES.purchasable,
    types: [ITEM_TYPES.light, ITEM_TYPES.tools]
  },
  {
    id: "motionSensor",
    display: "Motion Sensor",
    displayShort: "Motion Sensor",
    category: ITEM_CATEGORIES.purchasable,
    types: [ITEM_TYPES.objectives]
  },
  {
    id: "parabolicMicrophone",
    display: "Parabolic Microphone",
    displayShort: "Parabolic",
    category: ITEM_CATEGORIES.purchasable,
    types: [ITEM_TYPES.objectives]
  },
  {
    id: "saltShaker",
    display: "Salt Shaker",
    displayShort: "Salt",
    category: ITEM_CATEGORIES.purchasable,
    types: [ITEM_TYPES.objectives, ITEM_TYPES.evidence]
  },
  {
    id: "sanityPills",
    display: "Sanity Pills",
    displayShort: "Pills",
    category: ITEM_CATEGORIES.purchasable,
    types: [ITEM_TYPES.tools]
  },
  {
    id: "smudgeSticks",
    display: "Smudge Sticks",
    displayShort: "Smudge",
    category: ITEM_CATEGORIES.purchasable,
    types: [ITEM_TYPES.objectives, ITEM_TYPES.tools]
  },
  {
    id: "soundSensor",
    display: "Sound Sensor",
    displayShort: "Sound Sensor",
    category: ITEM_CATEGORIES.purchasable,
    types: [ITEM_TYPES.junk]
  },
  {
    id: "strongFlashlight",
    display: "Strong Flashlight",
    displayShort: "Strong Light",
    category: ITEM_CATEGORIES.purchasable,
    types: [ITEM_TYPES.tools]
  },
  {
    id: "thermometer",
    display: "Thermometer",
    displayShort: "Thermo",
    category: ITEM_CATEGORIES.purchasable,
    types: [ITEM_TYPES.evidence]
  },
  {
    id: "tripod",
    display: "Tripod",
    displayShort: "Tripod",
    category: ITEM_CATEGORIES.purchasable,
    types: [ITEM_TYPES.other, ITEM_TYPES.tools]
  },
]