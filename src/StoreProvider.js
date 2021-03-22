import React from "react";
import useAppState from "./reducers/useAppState";
import useEvidence from "./reducers/useEvidence";
import useGhosts from "./reducers/useGhosts";

const StoreContext = React.createContext();

const StoreProvider = ({ children }) => {
  const ghosts = useGhosts();
  const evidence = useEvidence();
  const appState = useAppState();

  const value = {
    ghosts,
    evidence,
    appState,
  };
  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

const useStore = () => {
  const context = React.useContext(StoreContext);
  if (context === undefined) {
    throw new Error("useStore must be used within an StoreProvider");
  }
  return context;
};

export { StoreProvider, useStore };
