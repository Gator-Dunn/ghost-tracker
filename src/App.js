import React from "react";
import pkgJson from '../package.json';
import { Ghosts } from "./components/Ghosts";
import { Evidence } from "./components/Evidence";
import { Reset } from './components/Reset';
import { useGhosts } from "./reducers/useGhosts";
import { useEvidence } from "./reducers/useEvidence";

import "./App.css";

function App() {
  const evidence = useEvidence();
  const ghosts = useGhosts();
  return (
    evidence &&
    ghosts && (
      <div className="App">
        <header className="App-header">Phasmophobia Evidence Matrix</header>
        <section data-testid="test-evidence" className="App-section-evidence">
          <Evidence
            evidence={evidence}
            ghosts={ghosts}
          />
        </section>
        <section data-testid="test-ghosts" className="App-section-ghosts">
          <Ghosts evidence={evidence} ghosts={ghosts} />
        </section>
        <section className="App-section-controls">
          <Reset ghosts={ghosts} evidence={evidence} />
        </section>
        <section className="App-section-version">
          beta version {pkgJson.version}
        </section>
      </div>
    )
  );
}

export default App;
