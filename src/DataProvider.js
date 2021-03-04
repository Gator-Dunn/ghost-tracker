import React from "react";

const state = {
  data: {
    evidence: [],
    ghosts: [],
    invalidGhosts: [],
    loaded: false,
    selectedGhost: '',
    validEvidence: [],
  },
  actions: {}
};

export const DataProvider = React.createContext(state);
