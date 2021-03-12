import React from "react";
import classNames from "classnames";
import { Icon } from "../Icon";
import { ITEMS, ITEM_TYPES } from "./constants";
import "./ItemCarousel.css";

const Result = ({item}) => (
  <span key={item.id} className={classNames("randomizer__result", "randomizer__fadeIn")}>
    {item.display}
  </span>
);

export const ItemCarousel = () => {
  const [state, setState] = React.useState();
  const [randomItem, setRandomItem] = React.useState();
  const [nextItem, setNextItem] = React.useState(false);

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
      console.log("e", { e, type });
      const random = randomizer(state[type]);
      if (!randomItem || randomItem.id !== random.id) {
        setNextItem(true);
        setRandomItem(random);
      }
    }
  };

  return (
    <section className="randomizer">
      <span className="randomizer__controls">
        <Icon
          onClick={handleClick}
          icon="search"
          data-type="EVIDENCE_ITEMS"
          classes={[]}
          size="large"
        />
        <Icon
          onClick={handleClick}
          data-type={ITEM_TYPES.evidence}
          icon="build"
          classes={[]}
          size="large"
        />
        <Icon
          onClick={handleClick}
          data-type={ITEM_TYPES.objective}
          icon="check"
          classes={[]}
          size="large"
        />
        <Icon
          onClick={handleClick}
          data-type={ITEM_TYPES.photo}
          icon="photo_camera"
          classes={[]}
          size="large"
        />
      </span>
      {randomItem && <Result item={randomItem} />}
    </section>
  );
};
