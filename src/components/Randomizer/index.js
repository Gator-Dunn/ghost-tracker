import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { nanoid } from "nanoid";
import { useStore } from "../../StoreProvider";
import useRandomizer from "../../reducers/useRandomizer";
import { ITEM_TYPES } from "../Tools/constants";
import Icon from "../Icon";
import "./Randomizer.css";

const RandomItem = ({ item: { display, color }, spinning }) => {
  const key = nanoid();
  return display ? (
    <span
      className={classNames("randomizer__results", {
        "randomizer__results--spinning": spinning,
      })}
      key={key}
      id={key}
      style={{ color }}
    >
      {display}
    </span>
  ) : (
    "Random Item"
  );
};

const Randomizer = () => {
  const {
    appState: { state: appState },
  } = useStore();

  const {
    getRandomItem,
    removeItem,
    reset,
    state,
    toggleItem,
    toggleFilter,
  } = useRandomizer();

  const handleCheckbox = ({ target: { id } }) => {
    toggleItem(id);
  };

  const remainingItems = React.useMemo(
    () => state.items.filter((i) => i.checked === true).length,
    [state]
  );

  const isReady = React.useMemo(
    () => state && state.original && state.original.items.length > 0,
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
            <RandomItem spinning={state.spinning} item={state.selected} />
          )}
        </span>
        <span className="randomizer__edit_section">
          <span className="randomizer__edit_details">
            <h3>Item Count</h3>
            <h3>
              {remainingItems} / {state.items.length}
            </h3>
          </span>
          <span
            className={classNames("randomizer__edit_items", {
              "randomizer__edit_items--loading": state.spinning,
            })}
          >
            {state.items.map((item) => (
              <span
                className={`randomizer__${item.category.replace(" ", "")}`}
                key={`checkbox_${item.id}`}
              >
                <Icon
                  classes={["randomizer__remove_item"]}
                  icon="delete"
                  iconHover="delete_forever"
                  size="large"
                  onClick={() => removeItem(item.id)}
                />
                <input
                  type="checkbox"
                  checked={item.checked}
                  id={item.id}
                  name={item.id}
                  value={item.display}
                  onChange={handleCheckbox}
                />
                <label
                  className={classNames({
                    "randomizer__item_label--active": item.checked,
                    "randomizer__item_label--inactive": !item.checked,
                  })}
                  htmlFor={item.id}
                >
                  {appState.isDesktopSized ? item.display : item.displayShort}
                </label>
              </span>
            ))}
          </span>
        </span>
        <span className="randomizer__item_type_filters">
          {Object.entries(ITEM_TYPES).map(([key, val]) => (
            <span
              className={classNames("randomizer__item_type_filter", {
                "randomizer__item_type_filter--selected": state.filters[val],
                "randomizer__item_type_filter--unselected": !state.filters[val],
              })}
              onClick={() => toggleFilter(val)}
              key={key}
            >
              <span>{key}</span>
            </span>
          ))}
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
