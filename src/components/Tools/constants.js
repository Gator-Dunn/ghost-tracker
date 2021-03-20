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
    category: ITEM_CATEGORIES.starter,
    types: [ITEM_TYPES.evidence]
  },
  {
    id: "ghostWritingBook",
    display: "Ghost Writing Book",
    category: ITEM_CATEGORIES.starter,
    types: [ITEM_TYPES.evidence]
  },
  {
    id: "photoCamera",
    display: "Photo Camera",
    category: ITEM_CATEGORIES.starter,
    types: [ITEM_TYPES.evidence, ITEM_TYPES.objectives, ITEM_TYPES.special]
  },
  {
    id: "emfReader",
    display: "EMF Reader",
    category: ITEM_CATEGORIES.starter,
    types: [ITEM_TYPES.evidence]
  },
  {
    id: "videoCamera",
    display: "Video Camera",
    category: ITEM_CATEGORIES.starter,
    types: [ITEM_TYPES.evidence]
  },
  {
    id: "uvFlashlight",
    display: "UV Flashlight",
    category: ITEM_CATEGORIES.starter,
    types: [ITEM_TYPES.evidence, ITEM_TYPES.light]
  },
  {
    id: "flashlight",
    display: "Flashlight",
    category: ITEM_CATEGORIES.starter,
    types: [ITEM_TYPES.light]
  },
  {
    id: "objectiveBoard",
    display: "Objective Board",
    category: ITEM_CATEGORIES.van,
    types: [ITEM_TYPES.tools]
  },
  {
    id: "siteMap",
    display: "Site Map",
    category: ITEM_CATEGORIES.van,
    types: [ITEM_TYPES.tools]
  },
  {
    id: "sanityMonitor",
    display: "Sanity Monitor",
    category: ITEM_CATEGORIES.van,
    types: [ITEM_TYPES.tools]
  },
  {
    id: "siteActivityMonitor",
    display: "Site Activity Monitor",
    category: ITEM_CATEGORIES.van,
    types: [ITEM_TYPES.tools]
  },
  {
    id: "soundMonitor",
    display: "Sound Monitor",
    category: ITEM_CATEGORIES.van,
    types: [ITEM_TYPES.tools]
  },
  {
    id: "cameraSystem",
    display: "Camera System",
    category: ITEM_CATEGORIES.van,
    types: [ITEM_TYPES.tools]
  },
  {
    id: "ouijaBoard",
    display: "Ouija Board",
    category: ITEM_CATEGORIES.onsite,
    types: [ITEM_TYPES.photos, ITEM_TYPES.special]
  },
  {
    id: "voodooDoll",
    display: "Voodoo Doll",
    category: ITEM_CATEGORIES.onsite,
    types: [ITEM_TYPES.photos]
  },
  {
    id: "boneEvidence",
    display: "Bone Evidence",
    category: ITEM_CATEGORIES.onsite,
    types: [ITEM_TYPES.photos]
  },
  {
    id: "candle",
    display: "Candle",
    category: ITEM_CATEGORIES.purchasable,
    types: [ITEM_TYPES.light]
  },
  {
    id: "Crucifix",
    display: "Crucifix",
    category: ITEM_CATEGORIES.purchasable,
    types: [ITEM_TYPES.tools]
  },
  {
    id: "glowStick",
    display: "Glow Stick",
    category: ITEM_CATEGORIES.purchasable,
    types: [ITEM_TYPES.evidence]
  },
  {
    id: "headMountedCamera",
    display: "Head Mounted Camera",
    category: ITEM_CATEGORIES.purchasable,
    types: [ITEM_TYPES.junk]
  },
  {
    id: "infraredLightSensor",
    display: "Infrared Light Sensor",
    category: ITEM_CATEGORIES.purchasable,
    types: [ITEM_TYPES.junk, ITEM_TYPES.light]
  },
  {
    id: "lighter",
    display: "Lighter",
    category: ITEM_CATEGORIES.purchasable,
    types: [ITEM_TYPES.light, ITEM_TYPES.tools]
  },
  {
    id: "motionSensor",
    display: "Motion Sensor",
    category: ITEM_CATEGORIES.purchasable,
    types: [ITEM_TYPES.objectives]
  },
  {
    id: "parabolicMicrophone",
    display: "Parabolic Microphone",
    category: ITEM_CATEGORIES.purchasable,
    types: [ITEM_TYPES.objectives]
  },
  {
    id: "saltShaker",
    display: "Salt Shaker",
    category: ITEM_CATEGORIES.purchasable,
    types: [ITEM_TYPES.objectives, ITEM_TYPES.evidence]
  },
  {
    id: "sanityPills",
    display: "Sanity Pills",
    category: ITEM_CATEGORIES.purchasable,
    types: [ITEM_TYPES.tools]
  },
  {
    id: "smudgeSticks",
    display: "Smudge Sticks",
    category: ITEM_CATEGORIES.purchasable,
    types: [ITEM_TYPES.objectives, ITEM_TYPES.tools]
  },
  {
    id: "soundSensor",
    display: "Sound Sensor",
    category: ITEM_CATEGORIES.purchasable,
    types: [ITEM_TYPES.junk]
  },
  {
    id: "strongFlashlight",
    display: "Strong Flashlight",
    category: ITEM_CATEGORIES.purchasable,
    types: [ITEM_TYPES.tools]
  },
  {
    id: "thermometer",
    display: "Thermometer",
    category: ITEM_CATEGORIES.purchasable,
    types: [ITEM_TYPES.evidence]
  },
  {
    id: "tripod",
    display: "Tripod",
    category: ITEM_CATEGORIES.purchasable,
    types: [ITEM_TYPES.other, ITEM_TYPES.tools]
  },
]