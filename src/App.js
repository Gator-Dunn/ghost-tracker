import React from "react";
import "./App.css";

const EVIDENCE = {
  emf: "EMF Level 5",
  fingerprints: "Fingerprints",
  freezing: "Freezing",
  orbs: "Ghost Orbs",
  writing: "Ghost Writing",
  box: "Spirit Box",
};

const GHOSTS = [
  {
    name: "banshee",
    evidence: [EVIDENCE.emf, EVIDENCE.fingerprints, EVIDENCE.freezing],
    valid: true,
  },
  {
    name: "demon",
    evidence: [EVIDENCE.freezing, EVIDENCE.box, EVIDENCE.writing],
    valid: true,
  },
  {
    name: "jinn",
    evidence: [EVIDENCE.emf, EVIDENCE.orbs, EVIDENCE.box],
    valid: true,
  },
  {
    name: "mare",
    evidence: [EVIDENCE.freezing, EVIDENCE.orbs, EVIDENCE.box],
    valid: true,
  },
  {
    name: "oni",
    evidence: [EVIDENCE.emf, EVIDENCE.box, EVIDENCE.writing],
    valid: true,
  },
  {
    name: "phantom",
    evidence: [EVIDENCE.emf, EVIDENCE.freezing, EVIDENCE.orbs],
    valid: true,
  },
  {
    name: "poltergeist",
    evidence: [EVIDENCE.orbs, EVIDENCE.fingerprints, EVIDENCE.box],
    valid: true,
  },
  {
    name: "revenant",
    evidence: [EVIDENCE.emf, EVIDENCE.fingerprints, EVIDENCE.writing],
    valid: true,
  },
  {
    name: "shade",
    evidence: [EVIDENCE.emf, EVIDENCE.orbs, EVIDENCE.writing],
    valid: true,
  },
  {
    name: "spirit",
    evidence: [EVIDENCE.box, EVIDENCE.fingerprints, EVIDENCE.writing],
    valid: true,
  },
  {
    name: "wraith",
    evidence: [EVIDENCE.freezing, EVIDENCE.fingerprints, EVIDENCE.box],
    valid: true,
  },
  {
    name: "yurei",
    evidence: [EVIDENCE.freezing, EVIDENCE.orbs, EVIDENCE.writing],
    valid: true,
  },
];

const statuses = ["⚪", "✔️", "❌"];
const statusStrings = ["default", "active", "inverted"];

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
        status: statuses[0],
        statusString: "default",
      }))
    );
    setLoaded(true);
  }, []);

  const statusHandleClick = (status, key) => {
    const newEvidence = evidence.map((e) => {
      const statusIndex =
        statuses.indexOf(status) === statuses.length - 1
          ? 0
          : statuses.indexOf(status) + 1;

      const newStatus = e.key === key ? statuses[statusIndex] : e.status;
      const newStatusString =
        e.key === key ? statusStrings[statusIndex] : e.statusString;
      return {
        ...e,
        status: newStatus,
        statusString: newStatusString,
      };
    });

    setEvidence(newEvidence);
  };

  const ghostHandleClick = ({ evidence: ghostEvidence, name }) => {
    const selected = selectedGhost === name;
    let newEvidence = [];
    if (!selected) {
      newEvidence = evidence.map((e) => {
        const status = ghostEvidence.includes(e.name);
        return {
          ...e,
          status: status ? statuses[1] : statuses[0],
          statusString: status ? statusStrings[1] : statusStrings[0],
        };
      });
      setSelectedGhost(name);
    } else {
      newEvidence = evidence.map((e) => ({
        ...e,
        status: statuses[0],
        statusString: statusStrings[0],
      }));
      setSelectedGhost("");
    }

    setEvidence(newEvidence);
  };

  React.useEffect(() => {
    const filtered =
      loaded &&
      ghosts
        .filter((ghost) => {
          const checkedEvidence = evidence
            .filter(({ status }) => status === statuses[1])
            .map((e) => EVIDENCE[e.key]);

          const invertedEvidence = evidence
            .filter(({ status }) => status === statuses[2])
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
  }, [evidence, ghosts, loaded]);

  const resetHandleClick = () => {
    const newEvidence = evidence.map((e) => ({
      ...e,
      status: statuses[0],
      statusString: statusStrings[0],
    }));
    setSelectedGhost("");
    setEvidence(newEvidence);
  }

  const isInvalidGhost = React.useCallback(
    (ghost) => {
      return invalidGhosts && invalidGhosts.includes(ghost.name);
    },
    [invalidGhosts]
  );

  return (
    loaded && (
      <div className="App">
        <header className="App-header">Phasmophobia Evidence Matrix</header>
        <section className="App-section-evidence">
          {evidence.map(({ key, name, status, statusString }) => (
            <span
              className="Evidence-item"
              onClick={() => statusHandleClick(status, key)}
              key={key}
            >
              <span className="Evidence-status">
                {status}
              </span>
              <span className={`Evidence-name-${statusString}`}>{name}</span>
            </span>
          ))}
        </section>
        <section className="App-section-ghosts">
          {ghosts.map((ghost) => (
            <span
              key={ghost.name}
              onClick={() => ghostHandleClick(ghost)}
              className={`Tag-ghost-${
                isInvalidGhost(ghost) ? "invalid" : "valid"
              }`}
            >
              {ghost.name}
            </span>
          ))}
        </section>
        <section className="App-section-controls">
          <button onClick={resetHandleClick}>Reset</button>
        </section>
      </div>
    )
  );
}

export default App;
