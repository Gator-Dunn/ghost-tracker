import React from "react";
import classNames from "classnames";
import { useStore } from "../../StoreProvider";
import "./Background.css";
import { ReactComponent as ScaryGhost } from "./ghost.svg";

const Background = () => {
  const {
    evidence: {
      state: { confirmed },
    },
  } = useStore();

  const ghostOpacityClass = React.useMemo(() => {
    switch (confirmed.length) {
      case 0:
        return "background__opacity__0";
      case 1:
        return "background__opacity__one_third";
      case 2:
        return "background__opacity__two_third";
      case 3:
        return "background__opacity__1";
      default:
        return "background__opacity__0";
    }
  }, [confirmed]);

  return (
    <div className={classNames("background__ghost", ghostOpacityClass)}>
      {confirmed.length > 0 ? <ScaryGhost height="100%" /> : " "}
    </div>
  );
};

export default Background;
