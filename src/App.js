import React from "react";
import { DataProvider } from "./DataProvider";
import { Ghosts } from "./components/Ghosts";
import { Evidence } from "./components/Evidence";
import {
  EVIDENCE,
  EVIDENCE_MAP,
  GHOSTS,
  STATUSES,
  STATUS_STRINGS,
} from "./constants";
import "./App.css";

function App() {
  const [ghosts, setGhosts] = React.useState([]);
  const [selectedGhost, setSelectedGhost] = React.useState("");
  const [invalidGhosts, setInvalidGhosts] = React.useState([]);
  const [evidence, setEvidence] = React.useState([]);
  const [validEvidence, setValidEvidence] = React.useState([]);
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    setGhosts(GHOSTS);
    setEvidence(EVIDENCE);
    setLoaded(true);
  }, []);

  React.useEffect(() => {
    const filtered = ghosts
      .filter((ghost) => {
        // All confirmed evidence
        const confirmedEvidence = evidence
          .filter(({ status }) => status === STATUSES[1])
          .map((e) => EVIDENCE_MAP[e.key]);

        // All excluded evidence
        const excludedEvidence = evidence
          .filter(({ status }) => status === STATUSES[2])
          .map((e) => EVIDENCE_MAP[e.key]);

        // Is any of the confirmed evidence *not* for this ghost?
        const hasInvalidEvidence = confirmedEvidence.some(
          (e) => !ghost.evidence.includes(e)
        );

        // Is any of the excluded evidence for this ghost?
        const hasExcludedEvidence = excludedEvidence.some((e) =>
          ghost.evidence.includes(e)
        );

        return hasInvalidEvidence || hasExcludedEvidence;
      })
      .map((ghost) => ghost.name);

    setInvalidGhosts(filtered);
  }, [evidence, ghosts]);

  React.useEffect(() => {
    const valid = [
      ...new Set(
        GHOSTS.filter(({ name }) => !invalidGhosts.includes(name))
          .map((ghost) => ghost.evidence)
      ),
    ];
    // const invalidEvidence = selectInvalidEvidence(state);
    console.log('poop', state);

    //setValidEvidence(valid);
  }, [invalidGhosts, evidence]);

  const resetHandleClick = () => {
    const newEvidence = evidence.map((e) => ({
      ...e,
      status: STATUSES[0],
      statusString: STATUS_STRINGS[0],
    }));
    setSelectedGhost("");
    setEvidence(newEvidence);
  };

  const state = React.useMemo(() => {
    return {
      data: {
        evidence,
        ghosts,
        invalidGhosts,
        loaded,
        selectedGhost,
        validEvidence,
      },
      actions: {
        setEvidence,
        setGhosts,
        setInvalidGhosts,
        setLoaded,
        setSelectedGhost,
        setValidEvidence,
      }
    };
  }, [evidence, ghosts, invalidGhosts, loaded, selectedGhost, validEvidence]);

  return (
    loaded && (
      <DataProvider.Provider value={state}>
        <div className="App">
          <header className="App-header">Phasmophobia Evidence Matrix</header>
          <section data-testid="test-evidence" className="App-section-evidence">
            <Evidence />
          </section>
          <section data-testid="test-ghosts" className="App-section-ghosts">
            <Ghosts />
          </section>
          <section className="App-section-controls">
            <button onClick={resetHandleClick}>Reset</button>
          </section>
        </div>
      </DataProvider.Provider>
    )
  );
}

export default App;
