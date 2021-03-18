import React from "react";
import classNames from "classnames";
import { nanoid } from "nanoid";
import { useStore } from "../../StoreProvider";
import "./Background.css";
import { ReactComponent as ScaryGhost } from "./ghost.svg";

const Background = () => {
  const {
    evidence: {
      state: { confirmed },
    },
  } = useStore();

  const key = React.useMemo(() => confirmed && nanoid(), [confirmed]);

  return (
    <div key={key} className={classNames("background__ghost")}>
      {
        {
          0: <span  className="background__opacity__0">{" "}</span>,
          1: (
            <span className="background__opacity__one_third">
              <ScaryGhost height="100%" />
            </span>
          ),
          2: (
            <span  className="background__opacity__two_third">
              <ScaryGhost height="100%" />
            </span>
          ),
          3: (
            <span  className="background__opacity__1">
              <ScaryGhost height="100%" />
            </span>
          ),
        }[confirmed.length]
      }
    </div>
  );
};

export default Background;
