import classNames from "classnames";
import React from "react";
import { useStore } from "../../StoreProvider";
import { RANDOMIZER_SECTIONS } from "./constants";
import "./Header.css";

const Header = () => {
  const {
    appState: { state, setActive, setActiveRandomizer },
  } = useStore();

  const handleClick = ({
    target: {
      dataset: { section },
    },
  }) => {
    setActive(section);
  };

  return (
    <header className="main__header">
      <h3 className="header__title">Phasmophobia Toolbox</h3>
      <span className="header__links">
        <span
          className={`header__link-${
            state.evidence.visible ? "active" : "inactive"
          }`}
          data-section="evidence"
          onClick={handleClick}
        >
          Identification
        </span>
        <span
          className={`header__link-${
            state.randomizer.visible ? "active" : "inactive"
          }`}
          data-section="randomizer"
          onClick={handleClick}
        >
          Randomizer
        </span>
        {state.randomizer.visible ? (
          <div>
            {RANDOMIZER_SECTIONS.map(({ id, display }) => (
              <span
                key={id}
                onClick={() => setActiveRandomizer(id)}
                role="link"
                className={classNames("randomizer__section_link", {
                  "randomizer__section_link--active":
                    state.randomizer.activeSection === id,
                })}
              >
                {display}
              </span>
            ))}
          </div>
        ) : (
          ""
        )}
      </span>
    </header>
  );
};

export default Header;
