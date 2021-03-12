import React from "react";
import classNames from "classnames";
import Icon from "../Icon";
import { ITEMS, ITEM_TYPES } from "./constants";
import "./Controls.css";

const Result = ({ item }) => (
  <span
    key={item.id}
    className={classNames("randomizer__result", "randomizer__fadeIn")}
  >
    <span>{item.display}</span>
  </span>
);

const RandomItems = () => {
  const [state, setState] = React.useState();
  const [randomItem, setRandomItem] = React.useState();
  const [activeType, setActiveType] = React.useState();

  React.useEffect(() => {
    const initialState = Object.values(ITEM_TYPES).reduce(
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
    setState(initialState);
  }, []);

  const randomizer = (array) => array[Math.floor(Math.random() * array.length)];
  const handleClick = (e) => {
    const { type } = e.target.dataset;
    if (type) {
      setActiveType(type);
      const limit = 15;
      let counter = 0;
      const spinner = setInterval(() => {
        if (counter <= limit) {
          const random = randomizer(state[type]);
          if (!randomItem || randomItem.id !== random.id) {
            setRandomItem(random);
          }
          counter++;
        } else {
          clearInterval(spinner);
        }
      }, 25);

    }
  };

  const isActive = React.useCallback((type) => activeType === type, [
    activeType,
  ]);

  return (
    <section className="randomizer">
      <span className="randomizer__controls">
        <Icon
          onClick={handleClick}
          icon="search"
          data-type={ITEM_TYPES.evidence}
          classes={[isActive(ITEM_TYPES.evidence) ? "green-good" : "grey-inactive"]}
          size="large"
        />
        <Icon
          onClick={handleClick}
          data-type={ITEM_TYPES.tools}
          icon="build"
          classes={[isActive(ITEM_TYPES.tools) ? "green-good" : "grey-inactive"]}
          size="large"
        />
        <Icon
          onClick={handleClick}
          data-type={ITEM_TYPES.objectives}
          icon="check"
          classes={[isActive(ITEM_TYPES.objectives) ? "green-good" : "grey-inactive"]}
          size="large"
        />
        <Icon
          onClick={handleClick}
          data-type={ITEM_TYPES.photos}
          icon="photo_camera"
          classes={[isActive(ITEM_TYPES.photos) ? "green-good" : "grey-inactive"]}
          size="large"
        />
      </span>
      {randomItem && <Result item={randomItem} />}
    </section>
  );
};

export default RandomItems;
