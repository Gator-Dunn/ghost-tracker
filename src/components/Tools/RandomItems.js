import React from "react";
import classNames from "classnames";
import Icon from "../Icon";
import { ITEMS, ITEM_TYPES } from "./constants";

const randomItemTypes = Object.entries({
  evidence: "search",
  objectives: "check",
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
      selectedText: null,
      unique: true,
      spinning: false,
    };
    setState(initialState);
  }, []);

  const randomizer = (array) => array[Math.floor(Math.random() * array.length)];

  const setRandomItem = (type) => {
    const random = randomizer(state[type]);
    let newItemList;

    if (!random) {
      return;
    }

    if (!state.randomItem || state.randomItem.id !== random.id) {
      newItemList = state[type].filter((i) => i.id !== random.id);
    }

    if (newItemList.length > 0) {
      updateState({
        randomItem: random,
        [type]: newItemList,
      });
    } else {
      updateState({
        randomItem: random,
        [type]: ITEMS.filter((i) => i.types.includes(type))
      });
    }
  };

  const handleClick = (e) => {
    const { type } = e.target.dataset;
    if (state.spinning) {
      return;
    }
    updateState({
      activeType: type,
      spinning: true,
    });

    let counter = 0;
    let modifierCounter = 0;

    const spinner = setInterval(() => {
      if (modifierCounter <= 2) {
        if (counter < state[type].length) {
          counter++;
          updateState({
            randomItem: state[type][counter - 1],
          });
        } else {
          counter = 0;
          modifierCounter++;
        }
      } else {
        setRandomItem(type);
        updateState({
          spinning: false,
        });
        clearInterval(spinner);
      }
    }, 55);
  };

  const isActive = React.useCallback(
    (type) => state && state.activeType === type,
    [state]
  );

  const hasOptions = React.useCallback(
    (type) => state && state[type] && state[type].length > 0,
    [state]
  );

  const result = React.useMemo(
    () => (
      <span
        key={(state.randomItem && state.randomItem.id) || "emptyResult"}
        className={classNames("randomizer__result")}
      >
        <span
          className={classNames({
            "randomizer__slideIn--spinning": state.spinning,
            "randomizer__slideIn--not-spinning": !state.spinning,
          })}
        >
          {(state.randomItem && state.randomItem.display) || ""}
        </span>
      </span>
    ),
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
            classes={[
              "randomizer__controls--icon",
              isActive(ITEM_TYPES[type]) ? "grey-active" : "grey-inactive",
              !hasOptions(ITEM_TYPES[type]) ? "red-stop" : "",
            ]}
            size="large"
          />
        ))}
      </span>

      {result}
    </React.Fragment>
  ) : null;
};

export default RandomItems;
