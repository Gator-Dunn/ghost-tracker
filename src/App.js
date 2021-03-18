import React from "react";
import classNames from "classnames";
import Tools from "./components/Tools";
import Header from "./components/Header";
import Evidence from "./components/Evidence";
import Ghosts from "./components/Ghosts";
import GhostName from "./components/GhostName";
import SecondaryEvidence from "./components/SecondaryEvidence";
import Version from "./components/Version";
import { StoreProvider } from "./StoreProvider";

function App() {
  const sections = [
    {
      key: "ghostName",
      render: <GhostName />,
    },
    {
      key: "evidence",
      render: <Evidence />,
    },
    {
      key: "ghosts",
      render: <Ghosts />,
    },
    {
      key: "tools",
      render: <Tools />,
    },
    {
      key: "secondaryEvidence",
      render: <SecondaryEvidence />,
    },
    {
      key: "version",
      render: <Version />,
    },
  ];

  return (
    <StoreProvider>
      <main className="main">
        <Header className="main__header"></Header>
        {sections.map((section) => (
          <section
            id={`section-${section.key}`}
            data-testid={`test-${section.key}`}
            className={classNames("main__section", `main__${section.key}`)}
            key={section.key}
          >
            {section.render}
          </section>
        ))}
      </main>
    </StoreProvider>
  );
}

export default App;
