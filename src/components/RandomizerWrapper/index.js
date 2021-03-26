import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Randomizer from "../Randomizer";
import { ITEM_TYPES } from "../Tools/constants";
import "./RandomizerWrapper.css";

const RandomizerWrapper = () => {
  let match = useRouteMatch();

  return (
    <div className="randomizer__wrapper">
      <Switch>
        <Route key={`route_all`} path={`${match.path}/all`}>
          <Randomizer
            filter={ITEM_TYPES.all}
            key="route_all"
            keyName="route_all"
          />
        </Route>
        <Route path={`${match.path}/`}>
          <h3>Select an Item Category</h3>
        </Route>
      </Switch>
    </div>
  );
};

export default RandomizerWrapper;
