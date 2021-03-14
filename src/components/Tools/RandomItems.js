import React from "react";
import classNames from "classnames";
import Icon from "../Icon";
import { ITEMS, ITEM_TYPES, ITEM_TYPES_DESCRIPTION } from "./constants";

const Result = ({ item }) => (
  <span
    key={(item && item.id) || "emptyResult"}
    className={classNames("randomizer__result", "randomizer__fadeIn")}
  >
    <span>{(item && item.display) || ""}</span>
  </span>
);

const randomItemTypes = Object.entries({
  evidence: "search",
  objectives: "check",
  tools: "build",
  junk: "delete_outline",
});

const RandomItems = () => {
  const [state, setState] = React.useState({});

  const updateState = (update) =>
    setState((prevState) => ({
      ...prevState,
      ...update,
    }));

  React.useEffect(() => {
    let initialState = Object.values(ITEM_TYPES).reduce(
      (initialState, type) => {
        return {
          ...initialState,
          [type]: ITEMS.filter((i) => {
            return i.types.includes(type);
          }),
        };
      },
      {}
    );
    initialState = {
      ...initialState,
      randomItem: null,
      activeType: null,
      hoverText: null,
      selectedText: null,
    };
    setState(initialState);
  }, []);

  const randomizer = (array) => array[Math.floor(Math.random() * array.length)];
  const handleClick = (e) => {
    const { description, type } = e.target.dataset;
    updateState({
      activeType: type,
      selectedText: description,
    });
    const limit = 15;
    let counter = 0;
    const spinner = setInterval(() => {
      if (counter <= limit) {
        const random = randomizer(state[type]);
        if (!state.randomItem || state.randomItem.id !== random.id) {
          updateState({
            randomItem: random,
          });
        }
        counter++;
      } else {
        clearInterval(spinner);
      }
    }, 25);
  };

  const handleHoverIn = (e) => {
    const { description } = e.target.dataset;
    updateState({
      hoverText: description,
    });
  };

  const handleHoverOut = () => updateState({ hoverText: null });

  const isActive = React.useCallback(
    (type) => state && state.activeType === type,
    [state]
  );

  return state ? (
    <React.Fragment>
      <span className="randomizer__label">Randomizer</span>
      <span className="randomizer__controls">
        {randomItemTypes.map(([type, icon]) => (
          <Icon
            onClick={handleClick}
            icon={icon}
            key={type}
            data-type={ITEM_TYPES[type]}
            data-description={ITEM_TYPES_DESCRIPTION[type]}
            classes={[
              "randomizer__controls--icon",
              isActive(ITEM_TYPES[type]) ? "grey-active" : "grey-inactive",
            ]}
            size="large"
            onMouseEnter={handleHoverIn}
            onMouseLeave={handleHoverOut}
          />
        ))}
      </span>

      <Result item={state.randomItem} />
      {/* <span className="randomizer__description">
        <span
          className={classNames({
            randomizer__hoverText:
              state.hoverText && state.hoverText !== state.selectedText,
            randomizer__selectedText:
              (state.selectedText && !state.hoverText) ||
              state.hoverText === state.selectedText,
            randomizer__default: !state.selectedText && !state.hoverText,
          })}
        >
          {state.hoverText ||
            state.selectedText ||
            "Click an icon to generate a random item"}
        </span>
      </span> */}
    </React.Fragment>
  ) : null;
};

export default RandomItems;
