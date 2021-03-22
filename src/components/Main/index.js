import React from "react";
import EvidenceWrapper from "../EvidenceWrapper";
import RandomizerWrapper from "../RandomizerWrapper";
import { useStore } from "../../StoreProvider";

const Main = () => {
  const {
    appState: { isActive },
  } = useStore();

  if (isActive("evidence")) {
    return <EvidenceWrapper />;
  }
  if (isActive("randomizer")) {
    return <RandomizerWrapper />
  }
};

export default Main;
