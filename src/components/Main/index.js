import React from "react";
import { Switch, useHistory, useRouteMatch, Route } from "react-router-dom";
import EvidenceWrapper from "../EvidenceWrapper";
import Randomizer from "../Randomizer";

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
    // eslint-disable-next-line
  }, []);

  return (
    <Switch>
      <Route path="/investigation">
        <EvidenceWrapper />
      </Route>
      <Route path="/randomizer">
        <Randomizer
          key="route_randomizer"
          keyName="route_randomizer"
        />
      </Route>
    </Switch>
  );
};

export default Main;
