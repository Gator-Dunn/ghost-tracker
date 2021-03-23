import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Randomizer from "../Randomizer";
import { RANDOMIZERS } from "./constants";
import "./RandomizerWrapper.css";

const RandomizerWrapper = () => {
  let match = useRouteMatch();

  return (
    <div className="randomizer__wrapper">
      <Switch>
        {RANDOMIZERS.map(({filter, key, path, speed}) => (
          <Route key={`route_${key}`} path={`${match.path}/${path}`}>
            <Randomizer
              filter={filter}
              key={key}
              keyName={key}
              speed={speed}
            />
          </Route>
        ))}
        <Route path={`${match.path}/`}>
          <h3>Select an Item Category</h3>
        </Route>
      </Switch>
    </div>
  );
};

export default RandomizerWrapper;
