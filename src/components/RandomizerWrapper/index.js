import React from "react";
import { useStore } from "../../StoreProvider";
import Randomizer from "../Randomizer";
import { RANDOMIZERS } from "./constants";
import "./RandomizerWrapper.css";

const RandomizerWrapper = () => {
  const {
    appState: { state },
  } = useStore();
  return (
    <div className="randomizer__wrapper">
      {RANDOMIZERS.filter((r) => r.filter === state.randomizer.activeSection).map(
        ({ filter, gridAreas, key, label, speed }) => (
          <Randomizer
            filter={filter}
            gridAreas={gridAreas}
            key={key}
            keyName={key}
            label={label}
            speed={speed}
          />
        )
      )}
    </div>
  );
};

export default RandomizerWrapper;
