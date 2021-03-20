import React from "react";
import classNames from "classnames";
import { nanoid } from "nanoid";
import { useStore } from "../../StoreProvider";
import "./Background.css";
import { ReactComponent as ScaryGhost } from "./ghost.svg";

const Background = () => {
  const {
    ghosts: {
      state: { valid },
    }
  } = useStore();

  const key = React.useMemo(() => valid && nanoid(), [valid]);

  return (
    <div key={key} className={classNames("background__ghost")}>
      {
        {
          0: <span  className="background__opacity__0">{" "}</span>,
          1: (
            <span className="background__opacity__1">
              <ScaryGhost height="100%" />
            </span>
          ),
          2: (
            <span  className="background__opacity__two_third">
              <ScaryGhost height="100%" />
            </span>
          ),
          3: (
            <span  className="background__opacity__one_third">
              <ScaryGhost height="100%" />
            </span>
          ),
        }[valid.length]
      }
    </div>
  );
};

export default Background;
