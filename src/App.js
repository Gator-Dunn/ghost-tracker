import React from "react";
import { DataProvider } from "./DataProvider";
import { Ghosts } from "./components/Ghosts";
import { Evidence } from "./components/Evidence";
import { EVIDENCE, GHOSTS, STATUSES, STATUS_STRINGS } from "./constants";
import "./App.css";

function App() {
  const [ghosts, setGhosts] = React.useState([]);
  const [selectedGhost, setSelectedGhost] = React.useState("");
  const [invalidGhosts, setInvalidGhosts] = React.useState([]);
  const [evidence, setEvidence] = React.useState([]);
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    setGhosts(GHOSTS);
    setEvidence(
      Object.entries(EVIDENCE).map(([key, name]) => ({
        key,
        name,
        status: STATUSES[0],
        statusString: "default",
      }))
    );
    setLoaded(true);
  }, []);

  React.useEffect(() => {
    const filtered = ghosts
      .filter((ghost) => {
        const checkedEvidence = evidence
          .filter(({ status }) => status === STATUSES[1])
          .map((e) => EVIDENCE[e.key]);

        const invertedEvidence = evidence
          .filter(({ status }) => status === STATUSES[2])
          .map((e) => EVIDENCE[e.key]);

        const hasInvalidEvidence = checkedEvidence.some(
          (e) => !ghost.evidence.includes(e)
        );

        const hasValidEvidence = invertedEvidence.some((e) =>
          ghost.evidence.includes(e)
        );

        return hasInvalidEvidence || hasValidEvidence;
      })
      .map((ghost) => ghost.name);

    setInvalidGhosts(filtered);
  }, [evidence, ghosts]);

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
      evidence,
      ghosts,
      invalidGhosts,
      loaded,
      selectedGhost,
    };
  }, [evidence, ghosts, invalidGhosts, loaded, selectedGhost]);

  return (
    loaded && (
      <DataProvider.Provider value={state}>
        <div className="App">
          <header className="App-header">Phasmophobia Evidence Matrix</header>
          <section data-testid="test-evidence" className="App-section-evidence">
            <Evidence setEvidence={setEvidence} />
          </section>
          <section data-testid="test-ghosts" className="App-section-ghosts">
            <Ghosts
              setSelectedGhost={setSelectedGhost}
              setEvidence={setEvidence}
            />
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
