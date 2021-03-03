import React from "react";

const data = {
  evidence: [],
  ghosts: [],
  invalidGhosts: [],
  loaded: false,
  selectedGhost: '',
};

export const DataProvider = React.createContext(data);
