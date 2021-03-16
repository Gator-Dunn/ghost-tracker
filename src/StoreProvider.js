import React from "react";
import useGhosts from "./reducers/useGhosts";
import useEvidence from "./reducers/useEvidence";

const StoreContext = React.createContext();

const StoreProvider = ({children}) => {
  const ghosts = useGhosts();
  const evidence = useEvidence();

  const value = { ghosts, evidence };
  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

const useStore = () => {
  const context = React.useContext(StoreContext);
  if (context === undefined) {
    throw new Error('useStore must be used within an StoreProvider');
  }
  return context;
}

export {
  StoreProvider,
  useStore,
}