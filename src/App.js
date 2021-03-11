import React from "react";
import classNames from "classnames";
import pkgJson from "../package.json";
import { Evidence } from "./components/Evidence";
import { Ghosts } from "./components/Ghosts";
import { Reset } from "./components/Reset";
import { Secondary } from "./components/Secondary";
import { Timer } from "./components/Header/Timer";
import { Tools } from "./components/Tools";
import { useGhosts } from "./reducers/useGhosts";
import { useEvidence } from "./reducers/useEvidence";

import "./styles/App.css";
import "./styles/Mobile.css";
import "./styles/Background.css";

function App() {
  const evidence = useEvidence();
  const ghosts = useGhosts();
  const backgroundClass = React.useMemo(() => {
    let opacities = [];
    for (let i = 0; i <= 100; i += 9) {
      opacities = [...opacities, i];
    }
    opacities.reverse();
    const ghostCount = evidence.state.validGhosts.length - 1;
    const index = ghostCount >= 0 && ghostCount < 12 ? ghostCount : 11;

    return `opacity-${opacities[index]}`;
  }, [evidence.state.validGhosts]);
  return (
    evidence &&
    ghosts && (
      <React.Fragment>
        <div className="App">
          <section className="App-section-title">
            Phasmophobia Evidence Matrix
          </section>
          <section className="App-section-tools">
            <Tools />
          </section>
          <section data-testid="test-evidence" className="App-section-evidence">
            <Evidence evidence={evidence} ghosts={ghosts} />
          </section>
          <section data-testid="test-ghosts" className="App-section-ghosts">
            <Ghosts evidence={evidence} ghosts={ghosts} />
          </section>
          <section data-testid="test-timer" className="App-section-timer">
            <Timer />
          </section>
          <section className="App-section-secondary-evidence">
            <Secondary evidence={evidence} ghosts={ghosts} />
          </section>
          <section className="App-section-controls">
            <Reset ghosts={ghosts} evidence={evidence} />
          </section>
          <section className="App-section-version">
            beta version {pkgJson.version}
          </section>
        </div>
        <div
          className={classNames({
            "App-background": true,
            [backgroundClass]: backgroundClass,
          })}
        ></div>
      </React.Fragment>
    )
  );
}

export default App;
