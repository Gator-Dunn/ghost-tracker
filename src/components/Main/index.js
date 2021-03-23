import React from "react";
import { Switch, useHistory, useRouteMatch, Route } from "react-router-dom";
import EvidenceWrapper from "../EvidenceWrapper";
import RandomizerWrapper from "../RandomizerWrapper";

const Main = () => {
  const history = useHistory();
  const match = useRouteMatch({
    path: "/",
    exact: true,
  });

  React.useEffect(() => {
    const redirectFromRoot = () => {
      if (match) {
        history.push("/investigation");
      }
    };
    redirectFromRoot();
  }, []);

  return (
    <Switch>
      <Route path="/investigation">
        <EvidenceWrapper />
      </Route>
      <Route path="/randomizer">
        <RandomizerWrapper />
      </Route>
    </Switch>
  );
};

export default Main;
