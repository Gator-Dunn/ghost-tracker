import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useStore } from "../../StoreProvider";
import useRandomizer from "../../reducers/useRandomizer";
import { ITEM_TYPE_MAP } from "./constants";
import "./Randomizer.css";

const RandomItem = ({ colors, filter, item: { display, id }, ...props }) => {
  const colorIndex = ITEM_TYPE_MAP[filter].items.findIndex((i) => i.id === id);

  return display ? (
    <span style={{ color: colors[colorIndex] }} {...props}>
      {display}
    </span>
  ) : (
    "Random Item"
  );
};

const Randomizer = ({ filter, keyName, speed }) => {
  const {
    appState: { state: appState },
  } = useStore();

  const { colors, items } = ITEM_TYPE_MAP[filter];

  const { getRandomItem, reset, state, toggleItem } = useRandomizer({
    items,
    speed,
    showEditItems: false,
  });

  const handleCheckbox = ({ target: { id } }) => {
    toggleItem(id);
  };

  const isReady = React.useMemo(
    () => Object.keys(state.checkboxes).length > 0,
    [state]
  );

  return (
    isReady && (
      <span className="randomizer__container">
        <span className="randomizer__controls_section">
          <span
            onClick={reset}
            role="button"
            className={classNames("randomizer__button_reset")}
          >
            Reset
          </span>
          <span
            onClick={() => getRandomItem()}
            role="button"
            className={classNames("randomizer__button_default")}
          >
            Roll!
          </span>
        </span>
        <span className="randomizer__results_section">
          {state.selected && (
            <RandomItem
              className={classNames("randomizer__results", {
                "randomizer__results--spinning": state.spinning,
              })}
              colors={colors}
              key={`${keyName}_results`}
              filter={filter}
              item={state.selected}
            />
          )}
        </span>
        <span className="randomizer__edit_section">
          <span className="randomizer__edit_details">
            <h3>Item Count</h3>
            <h3>
              {state.items.length} / {state.original.items.length}
            </h3>
          </span>
          <span className="randomizer__edit_items">
            {items.map((item) => (
              <span key={`checkbox_${item.id}`}>
                <input
                  type="checkbox"
                  checked={state.checkboxes[item.id]}
                  id={item.id}
                  name={item.id}
                  value={item.display}
                  onChange={handleCheckbox}
                />
                <label
                  className={classNames({
                    "randomizer__item_label--active": state.checkboxes[item.id],
                    "randomizer__item_label--inactive": !state.checkboxes[
                      item.id
                    ],
                  })}
                  htmlFor={item.id}
                >
                  {appState.isDesktopSized ? item.display : item.displayShort}
                </label>
              </span>
            ))}
          </span>
        </span>
      </span>
    )
  );
};

Randomizer.propTypes = {
  filter: PropTypes.string,
  keyName: PropTypes.string.isRequired,
  speed: PropTypes.number,
};

Randomizer.defaultProps = {
  filter: "all",
  speed: 20,
};

export default Randomizer;
