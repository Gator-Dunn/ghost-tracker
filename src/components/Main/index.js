import React from "react";
import { Switch, useHistory, useRouteMatch, Route } from "react-router-dom";
import EvidenceWrapper from "../EvidenceWrapper";
import RandomizerWrapper from "../RandomizerWrapper";

const Main = () => {
  const history = useHistory();
  const match = useRouteMatch({
    path: "/ghost-tracker",
    exact: true,
  });

  React.useEffect(() => {
    const redirectFromRoot = () => {
      if (match) {
        history.push("/ghost-tracker/investigation");
      }
    };
    redirectFromRoot();
  }, []);

  return (
    <Switch>
      <Route path="/ghost-tracker/investigation">
        <EvidenceWrapper />
      </Route>
      <Route path="/ghost-tracker/randomizer">
        <RandomizerWrapper />
      </Route>
    </Switch>
  );
};

export default Main;
